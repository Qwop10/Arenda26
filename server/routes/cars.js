const router = require('express').Router();
const pool   = require('../db');

// Все машины аренды
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM cars ORDER BY id');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Добавить машину
router.post('/', async (req, res) => {
  const { name, year, transmission, price, class: cls, img } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO cars (name,year,transmission,price,class,img) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [name, year, transmission, price, cls, img]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Обновить машину
router.put('/:id', async (req, res) => {
  const { name, year, transmission, price, class: cls, img, available } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE cars SET name=$1,year=$2,transmission=$3,price=$4,class=$5,img=$6,available=$7 WHERE id=$8 RETURNING *',
      [name, year, transmission, price, cls, img, available, req.params.id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Переключить наличие
router.patch('/:id/available', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'UPDATE cars SET available=$1 WHERE id=$2 RETURNING *',
      [req.body.available, req.params.id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Удалить машину
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM cars WHERE id=$1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Трансфер машины
router.get('/transfer', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM transfer_cars ORDER BY id');
    res.json(rows);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.post('/transfer', async (req, res) => {
  const { name, year, transmission, price_per_hour, type, img } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO transfer_cars (name,year,transmission,price_per_hour,type,img) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [name, year, transmission, price_per_hour, type, img]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.put('/transfer/:id', async (req, res) => {
  const { name, year, transmission, price_per_hour, type, img, available } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE transfer_cars SET name=$1,year=$2,transmission=$3,price_per_hour=$4,type=$5,img=$6,available=$7 WHERE id=$8 RETURNING *',
      [name, year, transmission, price_per_hour, type, img, available, req.params.id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.patch('/transfer/:id/available', async (req, res) => {
  try {
    const { rows } = await pool.query(
      'UPDATE transfer_cars SET available=$1 WHERE id=$2 RETURNING *',
      [req.body.available, req.params.id]
    );
    res.json(rows[0]);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

router.delete('/transfer/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM transfer_cars WHERE id=$1', [req.params.id]);
    res.json({ ok: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

module.exports = router;
