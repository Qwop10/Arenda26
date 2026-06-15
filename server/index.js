const express = require('express');
const cors    = require('cors');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Статические файлы фронтенда из корня репозитория
app.use(express.static(path.join(__dirname, '..')));

// API маршруты
app.use('/api/cars',      require('./routes/cars'));
app.use('/api/bookings',  require('./routes/bookings'));
app.use('/api/transfers', require('./routes/transfers'));
app.use('/api/messages',       require('./routes/messages'));
app.use('/api/verifications',  require('./routes/verifications'));

app.get('/api/health', (req, res) => res.json({ ok: true }));

// Всё остальное → index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
