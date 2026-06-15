const router = require('express').Router();
const pool   = require('../db');
const bot    = require('../bot');

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.get('/user/:tg_id', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM bookings WHERE tg_user_id=$1 ORDER BY created_at DESC',
      [req.params.tg_id]
    );
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.post('/', async (req, res) => {
  const { car_id, car_name, client_name, client_phone, start_date, end_date, total_price, passport, tg_user_id } = req.body;
  try {
    const { rows } = await pool.query(
      `INSERT INTO bookings (car_id,car_name,client_name,client_phone,start_date,end_date,total_price,passport,tg_user_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [car_id, car_name, client_name, client_phone, start_date, end_date, total_price, passport, tg_user_id]
    );
    const booking = rows[0];
    // Уведомить админа о новой заявке
    bot.adminNewBooking(booking).catch(() => {});
    res.json(booking);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE bookings SET status=$1 WHERE id=$2 RETURNING *',
      [status, req.params.id]
    );
    const booking = rows[0];
    // Уведомить клиента об изменении статуса
    if (status === 'confirmed') bot.clientBookingConfirmed(booking).catch(() => {});
    if (status === 'declined')  bot.clientBookingDeclined(booking).catch(() => {});
    res.json(booking);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
