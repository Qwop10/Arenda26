const router = require('express').Router();
const pool   = require('../db');
const bot    = require('../bot');

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT tb.*, tc.price_per_hour
      FROM transfer_bookings tb
      LEFT JOIN transfer_cars tc ON tb.car_id = tc.id
      ORDER BY tb.created_at DESC
    `);
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.get('/user/:tg_id', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM transfer_bookings WHERE tg_user_id=$1 ORDER BY created_at DESC',
      [req.params.tg_id]
    );
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.post('/', async (req, res) => {
  const { car_id, car_name, client_name, client_phone, route, date, hours, total_price, tg_user_id } = req.body;
  try {
    const { rows } = await pool.query(
      `INSERT INTO transfer_bookings (car_id,car_name,client_name,client_phone,route,date,hours,total_price,tg_user_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [car_id, car_name, client_name, client_phone, route, date, hours, total_price, tg_user_id]
    );
    const transfer = rows[0];
    // Уведомить админа о новой заявке
    bot.adminNewTransfer(transfer).catch(() => {});
    res.json(transfer);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.patch('/:id/status', async (req, res) => {
  const { status, total_price } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE transfer_bookings SET status=$1, total_price=COALESCE($2, total_price) WHERE id=$3 RETURNING *',
      [status, total_price || null, req.params.id]
    );
    const transfer = rows[0];
    // Уведомить клиента
    if (status === 'confirmed')        bot.clientTransferConfirmed(transfer).catch(() => {});
    if (status === 'declined')         bot.clientTransferDeclined(transfer).catch(() => {});
    if (status === 'paid')             bot.clientReceiptConfirmed(transfer).catch(() => {});
    if (status === 'receipt_declined') bot.clientReceiptDeclined(transfer).catch(() => {});
    res.json(transfer);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.patch('/:id/receipt', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'UPDATE transfer_bookings SET receipt_url=$1, status=$2 WHERE id=$3 RETURNING *',
      [req.body.receipt_url, 'receipt_sent', req.params.id]
    );
    const transfer = rows[0];
    bot.adminReceiptSent(transfer).catch(() => {});
    res.json(transfer);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
