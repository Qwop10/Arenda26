const router = require('express').Router();
const pool   = require('../db');
const bot    = require('../bot');

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

router.post('/', async (req, res) => {
  const { title, body, target } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO messages (title,body,target) VALUES ($1,$2,$3) RETURNING *',
      [title, body, target || 'all']
    );
    const msg = rows[0];

    // Рассылка всем уникальным tg_user_id из БД
    const { rows: users } = await pool.query(
      'SELECT DISTINCT tg_user_id FROM bookings WHERE tg_user_id IS NOT NULL'
    );
    const ids = users.map(u => u.tg_user_id);
    if (ids.length > 0) {
      bot.broadcast(ids, title, body).catch(() => {});
    }

    res.json(msg);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
