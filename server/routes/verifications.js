const router = require('express').Router();
const pool   = require('../db');
const bot    = require('../bot');

// Создаём таблицу если не существует
pool.query(`
  CREATE TABLE IF NOT EXISTS verifications (
    id           SERIAL PRIMARY KEY,
    tg_user_id   BIGINT UNIQUE,
    name         VARCHAR(120),
    status       VARCHAR(20) DEFAULT 'pending',
    passport_img TEXT,
    registration_img TEXT,
    license_img  TEXT,
    created_at   TIMESTAMP DEFAULT NOW()
  )
`).catch(e => console.error('verifications table error:', e.message));

// Получить статус верификации пользователя
router.get('/:tg_id', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM verifications WHERE tg_user_id=$1',
      [req.params.tg_id]
    );
    res.json(rows[0] || null);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Отправить документы (создать или обновить)
router.post('/', async (req, res) => {
  const { tg_user_id, name, passport_img, registration_img, license_img } = req.body;
  try {
    const { rows } = await pool.query(`
      INSERT INTO verifications (tg_user_id, name, passport_img, registration_img, license_img, status)
      VALUES ($1,$2,$3,$4,$5,'pending')
      ON CONFLICT (tg_user_id) DO UPDATE
        SET name=$2, passport_img=$3, registration_img=$4, license_img=$5, status='pending', created_at=NOW()
      RETURNING *
    `, [tg_user_id, name, passport_img, registration_img, license_img]);
    bot.adminVerificationRequest(rows[0]).catch(() => {});
    res.json(rows[0]);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Обновить статус (approve/decline)
router.patch('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE verifications SET status=$1 WHERE id=$2 RETURNING *',
      [status, req.params.id]
    );
    const v = rows[0];
    if (status === 'verified')  bot.clientVerificationApproved(v.tg_user_id).catch(() => {});
    if (status === 'rejected')  bot.clientVerificationDeclined(v.tg_user_id).catch(() => {});
    res.json(v);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

// Получить все для админа
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM verifications ORDER BY created_at DESC');
    res.json(rows);
  } catch(e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
