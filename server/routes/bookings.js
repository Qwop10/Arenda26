const router = require('express').Router();
const pool   = require('../db');

// Все заявки
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Заявки конкретного пользователя
router.get('/user/:tg_id', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM bookings WHERE tg_user_id=$1 ORDER BY created_at DESC',
      [req.params.tg_id]
    );
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Создать заявку
router.post('/', async (req, res) => {
  const { car_id, car_name, client_name, client_phone, start_date, end_date, total_price, passport, tg_user_id } = req.body;
  try {
    const { rows } = await pool.query(
      `INSERT INTO bookings (car_id,car_name,client_name,client_phone,start_date,end_date,total_price,passport,tg_user_id)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [car_id, car_name, client_name, client_phone, start_date, end_date, total_price, passport, tg_user_id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Обновить статус заявки
router.patch('/:id/status', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'UPDATE bookings SET status=$1 WHERE id=$2 RETURNING *',
      [req.body.status, req.params.id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
