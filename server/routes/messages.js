const router = require('express').Router();
const pool   = require('../db');

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/', async (req, res) => {
  const { title, body, target } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO messages (title,body,target) VALUES ($1,$2,$3) RETURNING *',
      [title, body, target || 'all']
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
