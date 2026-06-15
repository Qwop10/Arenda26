// ===== TELEGRAM WEB APP INIT =====
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#0e0608');
  tg.setBackgroundColor('#0e0608');
}

const API = 'https://arenda26-production.up.railway.app';

// ===== CAR DATA =====
let CARS = [
  // ЭКОНОМ
  { id: 1, name: 'Lada Granta АКПП', year: 2024, trans: 'АКПП', price: 2600, class: 'econom',
    img: 'фото машин/Lada Granta.webp' },
  { id: 2, name: 'Lada Granta 2024', year: 2024, trans: 'АКПП', price: 2600, class: 'econom',
    img: 'фото машин/Lada Granta.webp' },
  { id: 3, name: 'Lada Granta МКПП', year: 2023, trans: 'МКПП', price: 2400, class: 'econom',
    img: 'фото машин/Lada Granta.webp' },

  // КОМФОРТ
  { id: 4, name: 'Kia Rio АКПП', year: 2022, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'фото машин/Kia Rio.webp' },
  { id: 5, name: 'Kia Rio x line', year: 2022, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'фото машин/Kia Rio x line.webp' },
  { id: 6, name: 'Hyundai Solaris АКПП', year: 2022, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'фото машин/Hyundai Solaris.webp' },
  { id: 7, name: 'Hyundai Solaris NEW АКПП', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'фото машин/Hyundai Solaris NEW.webp' },
  { id: 8, name: 'Skoda Rapid АКПП', year: 2021, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'фото машин/Skoda Rapid 2021.webp' },
  { id: 9, name: 'Skoda Rapid 2020', year: 2020, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'фото машин/Skoda Rapid 2020.webp' },
  { id: 10, name: 'Lada Vesta АКПП', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'фото машин/Lada Vesta.webp' },
  { id: 11, name: 'Lada Vesta Cross', year: 2023, trans: 'АКПП', price: 3500, class: 'comfort',
    img: 'фото машин/Lada Vesta Cross.webp' },
  { id: 12, name: 'Lada Vesta SW', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'фото машин/Lada Vesta SW.webp' },

  // КОМФОРТ+
  { id: 13, name: 'Hyundai Creta', year: 2023, trans: 'АКПП', price: 4500, class: 'comfort-plus',
    img: 'фото машин/Hyundai Creta.webp' },
  { id: 14, name: 'Haval Jolion', year: 2024, trans: 'АКПП', price: 5500, class: 'comfort-plus',
    img: 'фото машин/Haval Jolion.webp' },
  { id: 15, name: 'Volkswagen Jetta АКПП', year: 2022, trans: 'АКПП', price: 4300, class: 'comfort-plus',
    img: 'фото машин/Volkswagen Jetta.webp' },
  { id: 16, name: 'Changan Eado', year: 2023, trans: 'АКПП', price: 4500, class: 'comfort-plus',
    img: 'фото машин/Changan Eado.webp' },
  { id: 17, name: 'Skoda Octavia 2021', year: 2021, trans: 'АКПП', price: 4200, class: 'comfort-plus',
    img: 'фото машин/Skoda Octavia 2021.webp' },
  { id: 18, name: 'Hyundai Elantra 2016', year: 2016, trans: 'АКПП', price: 3500, class: 'comfort-plus',
    img: 'фото машин/Hyundai Elantra 2016.webp' },

  // БИЗНЕС
  { id: 19, name: 'Toyota Camry V75', year: 2023, trans: 'АКПП', price: 7000, class: 'business',
    img: 'фото машин/Toyota Camry V75.webp' },
  { id: 20, name: 'Toyota Camry V70', year: 2022, trans: 'АКПП', price: 6500, class: 'business',
    img: 'фото машин/Toyota Camry V70.webp' },
  { id: 21, name: 'Kia K5', year: 2022, trans: 'АКПП', price: 6500, class: 'business',
    img: 'фото машин/Kia K5.webp' },
  { id: 22, name: 'Mercedes-Benz C 180', year: 2021, trans: 'АКПП', price: 8000, class: 'business',
    img: 'фото машин/Mercedes-Benz C 180.webp' },
  { id: 23, name: 'Mercedes-Benz E-класс', year: 2022, trans: 'АКПП', price: 7000, class: 'business',
    img: 'фото машин/Mercedes-Benz E-класс.webp' },
  { id: 24, name: 'Mercedes-Benz E-200 Premium', year: 2022, trans: 'АКПП', price: 11000, class: 'business',
    img: 'фото машин/Mercedes-Benz E-200 Premium.webp' },
  { id: 25, name: 'BMW 5 серия 520d', year: 2018, trans: 'АКПП', price: 13000, class: 'business',
    img: 'фото машин/BMW 5 серия 520d.webp' },
  { id: 26, name: 'BMW 320D XDRIVE', year: 2021, trans: 'АКПП', price: 11000, class: 'business',
    img: 'фото машин/BMW 320D XDRIVE.webp' },
  { id: 27, name: 'Chery Tiggo 8 Pro', year: 2023, trans: 'АКПП', price: 7500, class: 'business',
    img: 'фото машин/Chery Tiggo 8 Pro.webp' },
  { id: 28, name: 'KIA Carnival 9 мест', year: 2019, trans: 'АКПП', price: 8000, class: 'business',
    img: 'фото машин/KIA Carnival 9 мест.webp' },
  { id: 29, name: 'Changan UNI-V 2024', year: 2024, trans: 'АКПП', price: 15000, class: 'business',
    img: 'фото машин/Changan UNI-V 2024.webp' },
  { id: 30, name: 'Changan Lamore', year: 2024, trans: 'АКПП', price: 15000, class: 'business',
    img: 'фото машин/Changan Lamore.webp' },
];

// ===== TRANSFER CAR DATA =====
let TRANSFER_CARS = [
  { id: 1, name: 'Mercedes-Benz E-Class W-213 Restyling', price: 3000, type: 'sedan',
    img: 'фото машин/Mercedes-Benz E-Class W-213 Restyling.webp' },
  { id: 2, name: 'Mercedes-Benz E-Class W-213', price: 3000, type: 'sedan',
    img: 'фото машин/Mercedes-Benz E-Class W-213.webp' },
  { id: 3, name: 'Mercedes-Benz E-Class W-214 Long', price: 3500, type: 'sedan',
    img: 'фото машин/Mercedes-Benz E-Class W-214 Long.webp' },
  { id: 4, name: 'Mercedes-Benz V-class', price: 3500, type: 'minivan',
    img: 'фото машин/Mercedes-Benz V-class.webp' },
  { id: 5, name: 'Mercedes-Benz V-class Коллекционная', price: 3500, type: 'minivan',
    img: 'фото машин/Mercedes-Benz V-class Коллекционная.webp' },
  { id: 6, name: 'GAC M8', price: 3000, type: 'minivan',
    img: 'фото машин/GAC M8.webp' },
  { id: 7, name: 'Mercedes-Benz S-Class W-222 Restyling', price: 5000, type: 'sedan',
    img: 'фото машин/Mercedes-Benz S-Class W-222 Restyling.webp' },
  { id: 8, name: 'Mercedes S-Class W222 Noldea', price: 5000, type: 'sedan',
    img: 'фото машин/Mercedes S-Class W222 Noldea.webp' },
];

const CLASS_LABELS = {
  econom: 'Эконом',
  comfort: 'Комфорт',
  'comfort-plus': 'Комфорт+',
  business: 'Бизнес',
};

// ===== STATE =====
let currentFilter = 'all';
let currentTrans = 'all';
let selectedCar = null;
let currentPage = 'home';
let bookings = [];
let sortOrder = 'default';
let transferSortOrder = 'default';
let transferBodyFilter = 'all'; // 'all' | 'sedan' | 'minivan'
let transferBookings = [];
let selectedTransferCar = null;
let docsStatus = 'empty'; // 'empty' | 'pending' | 'verified' | 'rejected'
let verificationRequests = [];
let messages = []; // Admin broadcasts

// Fleet status: carId → true (available) / false (not available)
let fleetStatus = {};
CARS.forEach(c => { fleetStatus[c.id] = true; });

// Transfer fleet status
let transferFleetStatus = {};
TRANSFER_CARS.forEach(c => { transferFleetStatus[c.id] = true; });

// Currently selected class tab in fleet admin
let selectedFleetClass = 'econom';
let fleetTransferTypeFilter = 'sedan';

// Transfer type filter on Transfer page: 'all' | 'sedan' | 'minivan'
let transferTypeFilter = 'all';

// Blob URL of newly picked car photo
let newCarImgUrl = '';

// Selected price type in Add Car modal: 'rent' | 'transfer'
let addCarPriceType = 'rent';

// ===== API INIT =====
async function initApp() {
  // Загрузка статуса верификации отдельно — чтобы ошибка не ломала весь init
  const tgUserId = tg?.initDataUnsafe?.user?.id;
  if (tgUserId) {
    try {
      const vr = await fetch(`${API}/api/verifications/${tgUserId}`);
      const verifData = await vr.json();
      if (verifData && verifData.status) {
        docsStatus = verifData.status;
        updateVerificationBadge();
        applyVerifStatusToUI(docsStatus);
      }
    } catch(e) { console.warn('Verif load error:', e.message); }
  }

  try {
    const [carsRes, trRes, bookRes, trBookRes, msgRes] = await Promise.all([
      fetch(`${API}/api/cars`),
      fetch(`${API}/api/cars/transfer`),
      fetch(`${API}/api/bookings`),
      fetch(`${API}/api/transfers`),
      fetch(`${API}/api/messages`)
    ]);
    const carsData    = await carsRes.json();
    const trData      = await trRes.json();
    const bookData    = await bookRes.json();
    const trBookData  = await trBookRes.json();
    const msgData     = await msgRes.json();

    CARS.length = 0;
    carsData.forEach(c => {
      CARS.push({ id: c.id, name: c.name, year: c.year, trans: c.transmission,
        transmission: c.transmission, price: c.price, class: c.class, img: c.img });
      fleetStatus[c.id] = c.available !== false;
    });

    TRANSFER_CARS.length = 0;
    trData.forEach(c => {
      TRANSFER_CARS.push({ id: c.id, name: c.name, year: c.year, transmission: c.transmission,
        trans: c.transmission, pricePerHour: c.price_per_hour, price: c.price_per_hour,
        type: c.type, img: c.img });
      transferFleetStatus[c.id] = c.available !== false;
    });

    bookings.length = 0;
    bookData.forEach(b => bookings.push({
      id: b.id, car: b.car_name, client: b.client_name, phone: b.client_phone,
      start: b.start_date, end: b.end_date,
      price: b.total_price ? b.total_price.toLocaleString('ru') : '—',
      status: b.status, tg_user_id: b.tg_user_id
    }));

    transferBookings.length = 0;
    trBookData.forEach(b => transferBookings.push({
      id: b.id, car: b.car_name, from: b.route?.split(' → ')[0] || '',
      to: b.route?.split(' → ')[1] || '', startTime: b.date,
      status: b.status, price: b.total_price, tg_user_id: b.tg_user_id,
      pricePerHour: b.price_per_hour || 0, hours: b.hours, receipt_url: b.receipt_url
    }));

    messages.length = 0;
    msgData.forEach(m => messages.push({
      title: m.title, text: m.body,
      time: new Date(m.created_at).toLocaleDateString('ru')
    }));

  } catch(e) {
    console.warn('API unavailable, using local data:', e.message);
  }

  renderPopularCars();
  renderCatalog();
  renderRentals();
  renderTransferCars();
  renderAdminVerification();
  renderAdminFleet();
  renderProfileRentals();
  renderProfileMessages();
  renderAdminBookings();
  renderAdminTransfers();
  updateAdminStats();
}

// ===== INIT =====
const ADMIN_IDS = [763224120, 628854840];

document.addEventListener('DOMContentLoaded', () => {
  initApp();
  setupFilterTabs();
  setupTransButtons();
  initProfile();
  renderAdminFleet();

  // Показываем кнопку админа только для разрешённых ID
  const tgUserId = Number(tg?.initDataUnsafe?.user?.id);
  const adminBtn = document.getElementById('adminBtn');
  if (adminBtn) {
    adminBtn.style.display = ADMIN_IDS.includes(tgUserId) ? 'flex' : 'none';
  }
});

// ===== PROFILE INIT =====
function initProfile() {
  const user = tg?.initDataUnsafe?.user;
  const firstName = user?.first_name || '';
  const lastName = user?.last_name || '';
  const name = (firstName + (lastName ? ' ' + lastName : '')).trim() || 'Пользователь';

  document.getElementById('profileAvatar').textContent = name[0].toUpperCase();
  document.getElementById('profileName').textContent = name;

  renderProfileRentals();
  renderProfileTransfer();
  renderProfileMessages();
}

// ===== PAGE NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  const navBtn = document.querySelector(`[data-page="${name}"]`);
  if (navBtn) navBtn.classList.add('active');

  currentPage = name;

  const adminBtn = document.getElementById('adminBtn');
  const bottomNav = document.getElementById('bottomNav');

  if (name === 'admin') {
    bottomNav.style.display = 'none';
    adminBtn.style.opacity = '0.3';
  } else {
    bottomNav.style.display = 'flex';
    adminBtn.style.opacity = '1';
  }

  if (page) page.scrollTop = 0;
}

// ===== CAR IMAGE HELPER =====
function carImgHtml(car, className) {
  return `
    <img
      src="${car.img}"
      alt="${car.name}"
      class="${className}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
    >
    <div class="car-img-fallback" style="display:none">${car.name[0]}</div>
  `;
}

// ===== RENDER POPULAR CARS =====
function renderPopularCars() {
  const container = document.getElementById('popularCars');
  const popularIds = [1, 6, 13, 19];
  const popular = CARS.filter(c => popularIds.includes(c.id));

  container.innerHTML = popular.map(car => {
    const avail = fleetStatus[car.id] !== false;
    return `
    <div class="car-card ${avail ? 'car-available' : 'car-unavailable'}" onclick="openBookingModal(${car.id})">
      <div class="car-img-wrap">
        ${carImgHtml(car, 'car-photo')}
        <span class="car-class-badge">${CLASS_LABELS[car.class]}</span>
      </div>
      <div class="car-info">
        <div class="car-name">${car.name}</div>
        <div class="car-price">${car.price.toLocaleString('ru')} <small>₽/сут</small></div>
        <span class="avail-badge ${avail ? 'avail-yes' : 'avail-no'}" style="display:inline-block;margin-bottom:8px">${avail ? 'В наличии' : 'Нет в наличии'}</span>
        <button class="car-book-btn" onclick="event.stopPropagation(); openBookingModal(${car.id})">Забронировать</button>
      </div>
    </div>
  `}).join('');
}

// ===== RENDER CATALOG =====
function renderCatalog() {
  const container = document.getElementById('catalogList');
  let filtered = CARS;

  if (currentFilter !== 'all') filtered = filtered.filter(c => c.class === currentFilter);
  const transMap = { akpp: 'АКПП', mkpp: 'МКПП', rkpp: 'РКПП', cvt: 'CVT' };
  if (currentTrans !== 'all' && transMap[currentTrans]) {
    filtered = filtered.filter(c => c.trans === transMap[currentTrans]);
  }
  if (sortOrder === 'desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortOrder === 'asc') filtered = [...filtered].sort((a, b) => a.price - b.price);

  container.innerHTML = filtered.map(car => {
    const avail = fleetStatus[car.id] !== false;
    return `
    <div class="car-list-item ${avail ? 'car-available' : 'car-unavailable'}">
      <div class="car-list-top">
        <div class="car-list-img-wrap">
          ${carImgHtml(car, 'car-list-photo')}
        </div>
        <div class="car-list-details">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
            <div class="car-list-name">${car.name}</div>
            <span class="car-list-badge">${CLASS_LABELS[car.class]}</span>
          </div>
          <div class="car-list-year">${car.year} · ${car.trans}</div>
          <div class="car-list-price">${car.price.toLocaleString('ru')} <small>₽/сутки</small></div>
          <span class="avail-badge ${avail ? 'avail-yes' : 'avail-no'}" style="display:inline-block;margin-top:5px">${avail ? 'В наличии' : 'Нет в наличии'}</span>
        </div>
      </div>
      <button class="car-book-full" onclick="openBookingModal(${car.id})">Забронировать</button>
    </div>
  `}).join('');
}

// ===== BOOKING STATUS HELPER =====
function getBookingDisplayStatus(b) {
  if (b.status === 'pending' || b.status === 'new') return { label: 'Ожидает', cls: 'new' };
  if (b.status === 'confirmed') return { label: 'Подтверждена', cls: 'active' };
  if (b.status === 'declined') return { label: 'Отклонена', cls: 'done' };
  if (b.status === 'returned') return { label: 'Досрочный возврат', cls: 'done' };
  if (b.status === 'completed') return { label: 'Завершена', cls: 'done' };
  try {
    const parts = b.end.split('.');
    if (parts.length === 3) {
      const endDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      if (!isNaN(endDate) && endDate < new Date()) return { label: 'Завершена', cls: 'done' };
    }
  } catch(e) {}
  return { label: 'Активна', cls: 'active' };
}

// ===== RENDER RENTALS PAGE =====
function renderRentals() {
  const tgId = String(tg?.initDataUnsafe?.user?.id || '');
  const container = document.getElementById('rentalsList');
  const myBookings = tgId ? bookings.filter(b => String(b.tg_user_id) === tgId) : bookings;

  if (myBookings.length === 0) {
    container.innerHTML = '<div class="empty-state">У вас пока нет аренд</div>';
  } else {
    container.innerHTML = myBookings.map(r => {
      const st = getBookingDisplayStatus(r);
      return `
      <div class="rental-card">
        <div class="rental-top">
          <div class="rental-car-name">${r.car}</div>
          <span class="status-badge ${st.cls}">${st.label}</span>
        </div>
        <div class="rental-dates">${r.start} — ${r.end}</div>
        <div class="rental-price">${r.price} ₽</div>
      </div>`;
    }).join('');
  }

  // Трансферы на той же странице
  const trContainer = document.getElementById('transferRentalsList');
  if (!trContainer) return;
  const myTransfers = tgId ? transferBookings.filter(t => String(t.tg_user_id) === tgId) : transferBookings;

  if (myTransfers.length === 0) {
    trContainer.innerHTML = '<div class="empty-state">У вас пока нет трансферов</div>';
  } else {
    const statusLabel = { pending: 'Ожидает', confirmed: 'Подтверждён', receipt_sent: 'Чек отправлен', paid: 'Оплачено', declined: 'Отклонён' };
    const statusClass = { pending: 'new', confirmed: 'active', receipt_sent: 'new', paid: 'active', declined: 'done' };
    trContainer.innerHTML = myTransfers.map((t, i) => {
      const realIndex = transferBookings.indexOf(t);
      return `
      <div class="rental-card">
        <div class="rental-top">
          <div class="rental-car-name">${t.car}</div>
          <span class="status-badge ${statusClass[t.status] || 'new'}">${statusLabel[t.status] || t.status}</span>
        </div>
        <div class="rental-dates">${t.from} → ${t.to}</div>
        <div class="rental-dates">Подача: ${t.startTime}</div>
        ${t.price ? `<div class="rental-price">${t.price} ₽</div>` : ''}
        ${t.status === 'confirmed' ? `<button class="btn-primary full-width" style="margin-top:8px;padding:9px" onclick="openPaymentModal(${realIndex})">Оплатить</button>` : ''}
      </div>`;
    }).join('');
  }
}

// ===== RENDER PROFILE RENTALS =====
function renderProfileRentals() {
  const container = document.getElementById('profileActiveRentals');
  if (!container) return;

  const tgId = String(tg?.initDataUnsafe?.user?.id || '');
  const activeStatuses = ['pending', 'confirmed', 'active'];
  const active = bookings.filter(b =>
    activeStatuses.includes(b.status) && (!tgId || String(b.tg_user_id) === tgId)
  );

  if (active.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:10px 0">Нет активных аренд</div>';
    return;
  }

  const statusLabel = { pending: 'Ожидает', confirmed: 'Подтверждена', active: 'Активна' };
  const statusClass = { pending: 'new', confirmed: 'active', active: 'active' };
  const latest = active[0];
  const st = latest.status;
  container.innerHTML = `
    <div class="rental-item active-rental" onclick="showPage('rentals')">
      <div class="ri-left">
        <div class="ri-name">${latest.car}</div>
        <div class="ri-dates">${latest.start} — ${latest.end}</div>
        <div class="ri-price">${latest.price} ₽</div>
      </div>
      <div class="ri-right">
        <span class="status-badge ${statusClass[st] || 'new'}">${statusLabel[st] || st}</span>
        <button class="ri-more" onclick="showPage('rentals')">Подробнее ›</button>
      </div>
    </div>
    ${active.length > 1 ? `<div class="more-rentals">+${active.length - 1} ещё</div>` : ''}
  `;
}

// ===== PROFILE MESSAGES =====
function renderProfileMessages() {
  const container = document.getElementById('profileMessages');
  const card = document.getElementById('profileMessagesCard');
  if (!container || !card) return;

  if (messages.length === 0) {
    card.style.display = 'none';
    return;
  }
  card.style.display = 'block';
  container.innerHTML = messages.map(m => `
    <div class="msg-item">
      <div class="msg-title">${m.title}</div>
      <div class="msg-body">${m.text}</div>
      <div class="msg-time">${m.time}</div>
    </div>
  `).join('');
}

// ===== FILTER TABS =====
function setupFilterTabs() {
  document.querySelectorAll('#filterTabs .tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filterTabs .tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCatalog();
    });
  });
}

function setupTransButtons() {
  // теперь используется select, ничего не нужно
}

function onTransSelect(value) {
  currentTrans = value;
  renderCatalog();
}

// ===== LIVE SEARCH =====
function positionSearchDropdown() {
  const wrap = document.getElementById('searchWrap');
  const dropdown = document.getElementById('searchDropdown');
  if (!wrap || !dropdown) return;
  const rect = wrap.getBoundingClientRect();
  dropdown.style.position = 'fixed';
  dropdown.style.top = (rect.bottom + 6) + 'px';
  dropdown.style.left = rect.left + 'px';
  dropdown.style.width = rect.width + 'px';
}

function onSearchInput(query) {
  const dropdown = document.getElementById('searchDropdown');
  const clearBtn = document.getElementById('searchClear');
  const q = query.trim().toLowerCase();
  clearBtn.style.display = q ? 'flex' : 'none';
  if (!q) { dropdown.style.display = 'none'; return; }
  const matches = CARS.filter(c => c.name.toLowerCase().includes(q)).slice(0, 6);
  if (!matches.length) {
    dropdown.innerHTML = '<div class="search-no-result">Ничего не найдено</div>';
  } else {
    dropdown.innerHTML = matches.map(c => `
      <div class="search-result-item" onclick="pickSearchCar(${c.id})">
        <img src="${c.img}" class="search-result-img" onerror="this.style.display='none'" />
        <div class="search-result-info">
          <span class="search-result-name">${c.name}</span>
          <span class="search-result-sub">${c.transmission} · ${c.price.toLocaleString()} ₽/сут</span>
        </div>
      </div>
    `).join('');
  }
  positionSearchDropdown();
  dropdown.style.display = 'block';
}

function pickSearchCar(id) {
  clearSearch();
  openBookingModal(id);
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchClear').style.display = 'none';
  document.getElementById('searchDropdown').style.display = 'none';
}

document.addEventListener('click', e => {
  const wrap = document.getElementById('searchWrap');
  const dropdown = document.getElementById('searchDropdown');
  if (dropdown && wrap && !wrap.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

// ===== DATE MODAL =====
function openDateModal() {
  openModal('dateModal');
  const today = new Date().toISOString().split('T')[0];
  const weekLater = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('startDate').value = today;
  document.getElementById('endDate').value = weekLater;
}

function applyDates() {
  const start = document.getElementById('startDate').value;
  const end = document.getElementById('endDate').value;
  if (start && end) {
    const fmt = d => d.split('-').reverse().join('.');
    document.getElementById('dateInput').value = `${fmt(start)} — ${fmt(end)}`;
    closeModal();
    showToast('Даты выбраны');
  }
}

// ===== DOCS CHECK =====
function checkDocsBeforeAction() {
  if (docsStatus === 'verified') return true;

  showPage('profile');
  const msgs = {
    empty:    'Сначала отправьте документы на проверку',
    pending:  'Ваши документы ещё проверяются, подождите',
    rejected: 'Ваши документы отклонены — отправьте повторно',
  };
  setTimeout(() => {
    showToast(msgs[docsStatus] || 'Пройдите верификацию в профиле', 'rgba(232,38,74,0.9)');
    const docsCard = document.querySelector('#page-profile .profile-card');
    if (docsCard) {
      docsCard.style.transition = 'border-color 0.3s';
      docsCard.style.borderColor = 'var(--accent)';
      setTimeout(() => docsCard.style.borderColor = '', 2000);
    }
  }, 100);
  return false;
}

// ===== TRANSFER CARS =====
function setTransferBodyFilter(type) {
  transferBodyFilter = type;
  document.querySelectorAll('.transfer-body-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.body === type);
  });
  renderTransferCars();
}

const TRANSFER_TYPE_LABELS = { sedan: 'Седан', minivan: 'Минивэн' };

function setTransferType(type) {
  transferTypeFilter = type;
  const sel = document.getElementById('transferTypeSelect');
  if (sel) sel.value = type;
  renderTransferCars();
}

function onTransferTypeSelect(value) {
  transferTypeFilter = value;
  renderTransferCars();
}

function renderTransferCars() {
  const container = document.getElementById('transferList');
  if (!container) return;

  let list = [...TRANSFER_CARS];
  if (transferTypeFilter !== 'all') list = list.filter(c => c.type === transferTypeFilter);
  if (transferSortOrder === 'desc') list.sort((a, b) => b.price - a.price);
  else if (transferSortOrder === 'asc') list.sort((a, b) => a.price - b.price);

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:24px">Нет автомобилей в этой категории</div>';
    return;
  }

  container.innerHTML = list.map(car => {
    const avail = transferFleetStatus[car.id] !== false;
    const typeLabel = TRANSFER_TYPE_LABELS[car.type] || '';
    return `
    <div class="car-list-item ${avail ? 'car-available' : 'car-unavailable'}">
      <div class="car-list-top">
        <div class="car-list-img-wrap">
          ${carImgHtml(car, 'car-list-photo')}
        </div>
        <div class="car-list-details">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px">
            <div class="car-list-name">${car.name}</div>
            <span class="car-list-badge">${typeLabel}</span>
          </div>
          <div class="car-list-year">Трансфер · АКПП</div>
          <div class="car-list-price">${car.price.toLocaleString('ru')} <small>₽/час</small></div>
          <span class="avail-badge ${avail ? 'avail-yes' : 'avail-no'}" style="display:inline-block;margin-top:5px">${avail ? 'В наличии' : 'Нет в наличии'}</span>
        </div>
      </div>
      <button class="car-book-full" onclick="openTransferModal(${car.id})">Выбрать</button>
    </div>
  `}).join('');
}

function toggleTransferSort() {
  if (transferSortOrder === 'default' || transferSortOrder === 'asc') {
    transferSortOrder = 'desc';
    showToast('По убыванию цены ↓');
  } else {
    transferSortOrder = 'asc';
    showToast('По возрастанию цены ↑');
  }
  const btn = document.getElementById('transferSortBtn');
  if (btn) btn.classList.toggle('active', transferSortOrder !== 'default');
  renderTransferCars();
}

let confirmingTransferIndex = null;

function openTransferModal(carId) {
  if (!checkDocsBeforeAction()) return;
  selectedTransferCar = TRANSFER_CARS.find(c => c.id === carId);
  if (!selectedTransferCar) return;

  document.getElementById('transferModalTitle').textContent = selectedTransferCar.name;
  document.getElementById('transferCarInfo').textContent =
    `${selectedTransferCar.price.toLocaleString('ru')} ₽/час`;

  const now = new Date();
  now.setMinutes(0, 0, 0);
  document.getElementById('transferStart').value = now.toISOString().slice(0, 16);
  document.getElementById('fromAddr').value = '';
  document.getElementById('toAddr').value = '';

  openModal('transferModal');
}

async function submitTransfer() {
  if (!selectedTransferCar) return;

  const from = document.getElementById('fromAddr').value.trim();
  const to = document.getElementById('toAddr').value.trim();
  const start = document.getElementById('transferStart').value;

  if (!from || !to) { showToast('Укажите адреса!'); return; }
  if (!start) { showToast('Укажите время подачи!'); return; }

  const fmt = dt => {
    const d = new Date(dt);
    return `${d.getDate().toString().padStart(2,'0')}.${(d.getMonth()+1).toString().padStart(2,'0')} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  };

  const tgId = tg?.initDataUnsafe?.user?.id || null;
  const user = tg?.initDataUnsafe?.user;
  const userName = [user?.first_name, user?.last_name].filter(Boolean).join(' ') || 'Пользователь';

  const local = {
    id: Date.now(), car: selectedTransferCar.name,
    pricePerHour: selectedTransferCar.price,
    from, to, startTime: fmt(start), status: 'pending', tg_user_id: tgId
  };

  try {
    const res = await fetch(`${API}/api/transfers`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        car_id: selectedTransferCar.id, car_name: selectedTransferCar.name,
        client_name: userName, client_phone: '',
        route: `${from} → ${to}`, date: fmt(start), tg_user_id: tgId
      })
    });
    const saved = await res.json();
    local.id = saved.id;
  } catch(e) { console.warn('Transfer API error:', e.message); }

  transferBookings.unshift(local);
  closeModal();
  renderProfileTransfer();
  renderAdminTransfers();
  updateAdminStats();
  showToast('✓ Трансфер заказан!');
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
}

// ===== ADMIN TRANSFER SECTION =====
function renderAdminTransfers() {
  const container = document.getElementById('adminTransferList');
  if (!container) return;

  if (transferBookings.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px 0">Нет заявок на трансфер</div>';
    return;
  }

  const statusLabel = { pending: 'Новый', confirmed: 'Подтверждён', receipt_sent: 'Чек', paid: 'Оплачено', declined: 'Отклонён' };
  const statusClass = { pending: 'new', confirmed: 'active', receipt_sent: 'new', paid: 'active', declined: 'done' };

  container.innerHTML = transferBookings.map((t, i) => `
    <div class="tr-row${t.status === 'declined' || t.status === 'paid' ? ' tr-row--faded' : ''}">
      <div class="tr-top">
        <div class="bt-client">
          <b>${t.car}</b><br>
          <small>${t.from} → ${t.to}</small><br>
          <small>Подача: ${t.startTime}</small>
        </div>
        <span class="status-badge ${statusClass[t.status]}">${statusLabel[t.status] || t.status}</span>
      </div>
      ${t.price ? `<div class="bt-price-row">${t.price} ₽ · ${t.hours} ч.</div>` : ''}
      ${t.status === 'pending' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="openConfirmTransferModal(${i})">✓ Подтвердить</button>
          <button class="btn-icon-decline" onclick="declineTransfer(${i})" title="Отклонить">✕</button>
        </div>` : ''}
      ${t.status === 'receipt_sent' ? `
        ${t.receipt_url ? `<img src="${t.receipt_url}" onclick="openDocPhoto('${t.receipt_url}')" style="width:100%;max-height:140px;object-fit:cover;border-radius:8px;margin-top:8px;cursor:pointer">` : ''}
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-icon-confirm" onclick="confirmPayment(${i})" title="Оплата получена">✓</button>
          <button class="btn-icon-decline" onclick="rejectPayment(${i})" title="Отклонить чек">✕</button>
        </div>` : ''}
    </div>
  `).join('');
}

function openConfirmTransferModal(index) {
  confirmingTransferIndex = index;
  const t = transferBookings[index];

  const pph = t.pricePerHour || 0;
  document.getElementById('confirmTransferInfo').textContent =
    `${t.car} · ${t.from} → ${t.to} · Подача: ${t.startTime}${pph ? ` · ${pph.toLocaleString('ru')} ₽/час` : ''}`;

  document.getElementById('confirmTransferEnd').value = '';
  document.getElementById('confirmTransferTotal').textContent = '';

  openModal('confirmTransferModal');
}

function updateConfirmTotal() {
  if (confirmingTransferIndex === null) return;
  const t = transferBookings[confirmingTransferIndex];
  const endVal = document.getElementById('confirmTransferEnd').value;
  if (!endVal) return;

  const end = new Date(endVal);
  const totalEl = document.getElementById('confirmTransferTotal');

  const year = new Date().getFullYear();
  const [datePart, timePart] = t.startTime.split(' ');
  const [day, month] = datePart.split('.');
  const start = new Date(`${year}-${month}-${day}T${timePart}`);

  if (end <= start) { totalEl.textContent = 'Время окончания раньше времени подачи'; return; }

  const hours = Math.ceil((end - start) / (1000 * 60 * 60));
  const total = hours * t.pricePerHour;
  totalEl.textContent = `Итого: ${hours} ч. × ${t.pricePerHour.toLocaleString('ru')} ₽ = ${total.toLocaleString('ru')} ₽`;
}

async function saveConfirmTransfer() {
  if (confirmingTransferIndex === null) return;
  const t = transferBookings[confirmingTransferIndex];
  const endVal = document.getElementById('confirmTransferEnd').value;

  if (!endVal) { showToast('Введите время окончания'); return; }

  const fmt = dt => {
    const d = new Date(dt);
    return `${d.getDate().toString().padStart(2,'0')}.${(d.getMonth()+1).toString().padStart(2,'0')} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  };

  const year = new Date().getFullYear();
  const [datePart, timePart] = t.startTime.split(' ');
  const [day, month] = datePart.split('.');
  const start = new Date(`${year}-${month}-${day}T${timePart}`);
  const end = new Date(endVal);

  if (end <= start) { showToast('Неверное время окончания'); return; }

  const hours = Math.ceil((end - start) / (1000 * 60 * 60));
  const total = hours * (t.pricePerHour || 0);

  try {
    await fetch(`${API}/api/transfers/${t.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'confirmed', total_price: total })
    });
  } catch(e) { console.warn('Transfer confirm error:', e.message); }

  transferBookings[confirmingTransferIndex] = {
    ...t, endTime: fmt(endVal), hours, price: total, status: 'confirmed',
  };

  confirmingTransferIndex = null;
  closeModal();
  renderAdminTransfers();
  renderProfileTransfer();
  showToast('✓ Трансфер подтверждён');
}

async function declineTransfer(index) {
  const t = transferBookings[index];
  try {
    await fetch(`${API}/api/transfers/${t.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'declined' })
    });
  } catch(e) {}
  transferBookings[index].status = 'declined';
  renderAdminTransfers();
  renderProfileTransfer();
  showToast('Трансфер отклонён');
}

function confirmPayment(index) {
  transferBookings[index].status = 'paid';
  renderAdminTransfers();
  renderProfileTransfer();
  showToast('✓ Оплата подтверждена');
}

function rejectPayment(index) {
  transferBookings[index].status = 'confirmed';
  renderAdminTransfers();
  renderProfileTransfer();
  showToast('Чек отклонён — клиент должен оплатить повторно');
}

// ===== PAYMENT MODAL =====
let payingTransferIndex = null;

function openPaymentModal(index) {
  payingTransferIndex = index;
  const t = transferBookings[index];
  document.getElementById('paymentAmount').textContent = `К оплате: ${t.price} ₽`;
  openModal('paymentModal');
}

let receiptImageBase64 = null;

function onReceiptFileChange(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    receiptImageBase64 = e.target.result;
    const preview = document.getElementById('receiptPreview');
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const btn = document.getElementById('sendReceiptBtn');
    if (btn) btn.disabled = false;
  };
  reader.readAsDataURL(file);
}

async function sendReceipt() {
  if (!receiptImageBase64) { showToast('Выберите фото чека'); return; }
  const btn = document.getElementById('sendReceiptBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Отправка...'; }

  try {
    const t = transferBookings[payingTransferIndex];
    await fetch(`${API}/api/transfers/${t.id}/receipt`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ receipt_url: receiptImageBase64 })
    });

    transferBookings[payingTransferIndex].status = 'receipt_sent';
    renderProfileTransfer();
    renderAdminTransfers();
    closeModal();
    receiptImageBase64 = null;
    tg?.HapticFeedback?.notificationOccurred('success');
    showToast('✓ Чек отправлен, ожидайте подтверждения');
  } catch(e) {
    if (btn) { btn.disabled = false; btn.textContent = 'Отправить чек'; }
    showToast('Ошибка отправки, попробуйте снова');
  }
}

// ===== RENDER PROFILE TRANSFER =====
function renderProfileTransfer() {
  const container = document.getElementById('profileActiveTransfer');
  if (!container) return;

  const tgId = String(tg?.initDataUnsafe?.user?.id || '');
  const activeStatuses = ['pending', 'confirmed', 'receipt_sent'];
  const active = transferBookings.filter(t =>
    activeStatuses.includes(t.status) && (!tgId || String(t.tg_user_id) === tgId)
  );

  if (active.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:10px 0">Нет активных трансферов</div>';
    return;
  }

  container.innerHTML = active.map(t => {
    const realIndex = transferBookings.indexOf(t);
    let statusBadge = '';
    let actionBtn = '';

    if (t.status === 'pending') {
      statusBadge = `<span class="status-badge new">Ожидает</span>`;
    } else if (t.status === 'confirmed') {
      statusBadge = `<span class="status-badge active">Подтверждён</span>`;
      actionBtn = `<button class="pay-btn" onclick="openPaymentModal(${realIndex})">Оплатить</button>`;
    } else if (t.status === 'receipt_sent') {
      statusBadge = `<span class="status-badge new">Чек отправлен</span>`;
      actionBtn = `<div style="font-size:11px;color:var(--text-muted);margin-top:4px;text-align:right">Ожидайте<br>проверки</div>`;
    }

    return `
      <div class="rental-item active-rental" style="margin-bottom:10px">
        <div class="ri-left">
          <div class="ri-name">${t.car}</div>
          <div class="ri-dates">${t.from} → ${t.to}</div>
          <div class="ri-dates">Подача: ${t.startTime}</div>
          ${t.price ? `<div class="ri-price">${t.price} ₽</div>` : ''}
        </div>
        <div class="ri-right">
          ${statusBadge}
          ${actionBtn}
        </div>
      </div>
    `;
  }).join('');
}

function toggleTransferHistory() {
  const content = document.getElementById('transferHistoryContent');
  const arrow = document.getElementById('transferHistoryArrow');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'none';
    arrow.style.transform = '';
  }
}

// ===== BOOKING MODAL =====
function openBookingModal(carId) {
  if (!checkDocsBeforeAction()) return;
  selectedCar = CARS.find(c => c.id === carId);
  if (!selectedCar) return;

  document.getElementById('bookingTitle').textContent = `Забронировать ${selectedCar.name}`;
  document.getElementById('bookingCarInfo').textContent = `${selectedCar.name} — ${selectedCar.price.toLocaleString('ru')} ₽/сутки`;

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('bookStartDate').value = today;
  document.getElementById('bookEndDate').value = tomorrow;

  const maxDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('bookEndDate').max = maxDate;
  document.getElementById('bookStartDate').min = today;

  document.getElementById('bookStartDate').onchange = onBookingDateChange;
  document.getElementById('bookEndDate').onchange = onBookingDateChange;

  updateBookingTotal();
  openModal('bookingModal');
}

function onBookingDateChange() {
  const startEl = document.getElementById('bookStartDate');
  const endEl = document.getElementById('bookEndDate');
  const start = new Date(startEl.value);
  const end = new Date(endEl.value);

  if (startEl.value && endEl.value && !isNaN(start) && !isNaN(end)) {
    const maxEnd = new Date(start);
    maxEnd.setDate(maxEnd.getDate() + 2);

    if (end > maxEnd) {
      endEl.value = maxEnd.toISOString().split('T')[0];
      showToast('Максимальный срок аренды — 2 суток');
    }
    if (end <= start) {
      const next = new Date(start);
      next.setDate(next.getDate() + 1);
      endEl.value = next.toISOString().split('T')[0];
    }

    const maxDate = new Date(start);
    maxDate.setDate(maxDate.getDate() + 2);
    endEl.max = maxDate.toISOString().split('T')[0];
  }
  updateBookingTotal();
}

function updateBookingTotal() {
  if (!selectedCar) return;
  const start = new Date(document.getElementById('bookStartDate').value);
  const end = new Date(document.getElementById('bookEndDate').value);
  if (isNaN(start) || isNaN(end) || end <= start) {
    document.getElementById('bookingTotal').textContent = '';
    return;
  }
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const total = days * selectedCar.price;
  document.getElementById('bookingTotal').textContent = `Итого за ${days} дн.: ${total.toLocaleString('ru')} ₽`;
}

async function submitBooking() {
  if (!selectedCar) return;

  const start = document.getElementById('bookStartDate').value;
  const end = document.getElementById('bookEndDate').value;

  if (!start || !end) { showToast('Выберите даты'); return; }

  const fmt = d => { const p = d.split('-'); return `${p[2]}.${p[1]}.${p[0]}`; };
  const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
  const total = days * selectedCar.price;
  const userName = document.getElementById('profileName')?.textContent || 'Пользователь';
  const tgId = tg?.initDataUnsafe?.user?.id || null;

  const local = {
    car: selectedCar.name, client: userName,
    start: fmt(start), end: fmt(end),
    price: total.toLocaleString('ru'), days, status: 'pending'
  };

  try {
    const res = await fetch(`${API}/api/bookings`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        car_id: selectedCar.id, car_name: selectedCar.name,
        client_name: userName, start_date: fmt(start), end_date: fmt(end),
        total_price: total, tg_user_id: tgId
      })
    });
    const saved = await res.json();
    local.id = saved.id;
  } catch(e) { console.warn('Booking API error:', e.message); }

  bookings.unshift(local);
  closeModal();
  renderRentals();
  renderProfileRentals();
  renderAdminBookings();
  updateAdminStats();
  showToast('✓ Заявка отправлена!');
  if (tg) tg.HapticFeedback?.notificationOccurred('success');
}

// ===== ADMIN BOOKINGS =====
function renderAdminBookings() {
  const container = document.getElementById('adminBookingList');
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px">Нет заявок на аренду</div>';
    return;
  }

  container.innerHTML = bookings.map((b, i) => {
    const st = getBookingDisplayStatus(b);
    return `
    <div class="tr-row${b.status === 'declined' || b.status === 'returned' ? ' tr-row--faded' : ''}">
      <div class="tr-top">
        <div>
          <div class="admin-booking-client">${b.client}</div>
          <div class="admin-booking-car">${b.car}</div>
          <div class="admin-booking-dates">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${b.start} — ${b.end}
          </div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <span class="status-badge ${st.cls}">${st.label}</span>
          <div class="admin-booking-price">${b.price} ₽</div>
        </div>
      </div>
      ${b.status === 'pending' || b.status === 'new' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="confirmAdminBooking(${i})">✓ Подтвердить</button>
          <button class="btn-icon-decline" onclick="declineAdminBooking(${i})" title="Отклонить">✕</button>
        </div>` : ''}
      ${b.status === 'confirmed' || b.status === 'active' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="completeBooking(${i})">✓ Завершить</button>
          <button class="btn-confirm" style="background:rgba(255,160,0,0.15);color:#ffa000;border-color:#ffa000" onclick="earlyReturnBooking(${i})">↩ Досрочно</button>
        </div>` : ''}
    </div>
  `}).join('');
}

async function confirmAdminBooking(index) {
  const b = bookings[index];
  try {
    await fetch(`${API}/api/bookings/${b.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'confirmed' })
    });
  } catch(e) {}
  bookings[index].status = 'confirmed';
  renderAdminBookings(); updateAdminStats(); renderRentals(); renderProfileRentals();
  showToast(`✓ Аренда ${b.client} подтверждена`);
}

async function declineAdminBooking(index) {
  const b = bookings[index];
  try {
    await fetch(`${API}/api/bookings/${b.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'declined' })
    });
  } catch(e) {}
  bookings[index].status = 'declined';
  renderAdminBookings(); updateAdminStats(); renderRentals(); renderProfileRentals();
  showToast('Аренда отклонена');
}

async function completeBooking(index) {
  const b = bookings[index];
  try {
    await fetch(`${API}/api/bookings/${b.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'completed' })
    });
  } catch(e) {}
  bookings[index].status = 'completed';
  renderAdminBookings(); updateAdminStats(); renderRentals(); renderProfileRentals();
  showToast('✓ Аренда завершена');
}

async function earlyReturnBooking(index) {
  const b = bookings[index];
  try {
    await fetch(`${API}/api/bookings/${b.id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'returned' })
    });
  } catch(e) {}
  bookings[index].status = 'returned';
  renderAdminBookings(); updateAdminStats(); renderRentals(); renderProfileRentals();
  showToast('↩ Досрочный возврат оформлен');
}

function updateAdminStats() {
  const active = bookings.filter(b => b.status === 'active').length;
  const newCount = bookings.filter(b => b.status === 'new').length;
  const revenue = bookings
    .filter(b => b.status === 'active')
    .reduce((sum, b) => sum + parseInt(b.price.replace(/\s/g, ''), 10), 0);
  const transfers = transferBookings.length;

  const el = id => document.getElementById(id);
  if (el('statActiveRentals')) el('statActiveRentals').textContent = active;
  if (el('statRevenue')) el('statRevenue').textContent = revenue.toLocaleString('ru') + ' ₽';
  if (el('statTransfers')) el('statTransfers').textContent = transfers;
  if (el('statNewBookings')) el('statNewBookings').innerHTML = newCount + (newCount > 0 ? ' <span class="red-dot">●</span>' : '');
}

// ===== FLEET STATUS (п.7) =====
function buildFleetColumns(cars, numCols, statusObj, toggleFn, editFn = null) {
  const cols = Array.from({ length: numCols }, () => []);
  const base = numCols * 3;
  cars.forEach((car, i) => {
    const colIdx = i < base ? Math.floor(i / 3) : (i - base) % numCols;
    cols[colIdx].push(car);
  });

  return `
    <div class="fleet-col-grid" style="grid-template-columns:repeat(${numCols},1fr)">
      ${cols.map(col => `
        <div class="fleet-col">
          ${col.map(car => {
            const avail = statusObj[car.id] !== false;
            return `
              <label class="fleet-col-item ${avail ? 'fc-avail' : 'fc-unavail'}">
                <input type="checkbox" class="fleet-checkbox" ${avail ? 'checked' : ''}
                  onchange="${toggleFn}(${car.id}, this.checked)">
                <span class="fleet-col-name">${car.name}</span>
                ${editFn ? `<button class="fleet-edit-btn" onclick="event.preventDefault();event.stopPropagation();${editFn}(${car.id})" title="Редактировать">✎</button>` : ''}
              </label>
            `;
          }).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

const FLEET_CLASSES = [
  { key: 'econom',       label: 'Эконом',   cols: 1 },
  { key: 'comfort',      label: 'Комфорт',  cols: 3 },
  { key: 'comfort-plus', label: 'Комфорт+', cols: 2 },
  { key: 'business',     label: 'Бизнес',   cols: 3 },
];

function selectFleetClass(key) {
  selectedFleetClass = key;
  renderAdminFleet();
}

function selectFleetTransferType(key) {
  fleetTransferTypeFilter = key;
  renderAdminFleet();
}

function renderAdminFleet() {
  const container = document.getElementById('adminFleetList');
  if (!container) return;

  const tabsHtml = FLEET_CLASSES.map(c => `
    <button class="fleet-tab ${selectedFleetClass === c.key ? 'active' : ''}"
      onclick="selectFleetClass('${c.key}')">
      ${c.label}
    </button>
  `).join('');

  const currentClass = FLEET_CLASSES.find(c => c.key === selectedFleetClass);
  const cars = CARS.filter(c => c.class === selectedFleetClass);
  const rentalGrid = buildFleetColumns(cars, currentClass.cols, fleetStatus, 'toggleFleetCar', 'showEditCar');

  // Transfer: split by type with sub-tabs
  const transferTypes = [
    { key: 'sedan', label: 'Седан' },
    { key: 'minivan', label: 'Минивэн' },
  ];
  const fleetTransferType = fleetTransferTypeFilter || 'all';
  const transferTypeTabs = transferTypes.map(t => `
    <button class="fleet-tab ${fleetTransferType === t.key ? 'active' : ''}"
      onclick="selectFleetTransferType('${t.key}')">
      ${t.label}
    </button>
  `).join('');

  const filteredTransfer = fleetTransferType === 'all'
    ? TRANSFER_CARS
    : TRANSFER_CARS.filter(c => c.type === fleetTransferType);
  const transferGrid = buildFleetColumns(filteredTransfer, 3, transferFleetStatus, 'toggleTransferFleetCar', 'showEditTransferCar');

  container.innerHTML = `
    <div class="fleet-class-tabs">${tabsHtml}</div>
    <div class="fleet-group">${rentalGrid}</div>
    <div class="fleet-section-label" style="border-top:1px solid var(--border)">ТРАНСФЕР</div>
    <div class="fleet-class-tabs">${transferTypeTabs}</div>
    <div class="fleet-group">${transferGrid}</div>
  `;
}

function toggleFleetCar(id, checked) {
  fleetStatus[id] = checked;
  const label = document.querySelector(`[onchange="toggleFleetCar(${id}, this.checked)"]`)?.closest('label');
  if (label) label.className = `fleet-col-item ${checked ? 'fc-avail' : 'fc-unavail'}`;
  fetch(`${API}/api/cars/${id}/available`, {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ available: checked })
  }).catch(() => {});
  renderCatalog();
  renderPopularCars();
}

function toggleTransferFleetCar(id, checked) {
  transferFleetStatus[id] = checked;
  const label = document.querySelector(`[onchange="toggleTransferFleetCar(${id}, this.checked)"]`)?.closest('label');
  if (label) label.className = `fleet-col-item ${checked ? 'fc-avail' : 'fc-unavail'}`;
  fetch(`${API}/api/cars/transfer/${id}/available`, {
    method: 'PATCH', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ available: checked })
  }).catch(() => {});
  renderTransferCars();
}

function confirmBooking() {}
function declineBooking() {}

// ===== ADD CAR =====
// ===== EDIT CAR =====
let editCarId = null;
let editCarType = 'rental'; // 'rental' | 'transfer'
let editCarImgUrl = '';
let editCarBodyType = 'sedan';

function showEditCar(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  editCarId = id;
  editCarType = 'rental';
  editCarImgUrl = '';

  document.getElementById('editCarModalTitle').textContent = 'Редактировать авто';
  document.getElementById('editCarName').value = car.name;
  document.getElementById('editCarYear').value = car.year || '';
  document.getElementById('editCarPrice').value = car.price || '';
  document.getElementById('editCarClass').value = car.class || 'comfort';
  const trans = car.transmission || car.trans || 'АКПП';
  document.getElementById('editCarTrans').value = trans;
  const preview = document.getElementById('editCarImgPreview');
  preview.src = car.img || '';

  document.getElementById('editPriceRentField').style.display = '';
  document.getElementById('editPriceTransferField').style.display = 'none';
  document.getElementById('editClassRentField').style.display = '';
  document.getElementById('editClassTransferField').style.display = 'none';

  openModal('editCarModal');
}

function showEditTransferCar(id) {
  const car = TRANSFER_CARS.find(c => c.id === id);
  if (!car) return;
  editCarId = id;
  editCarType = 'transfer';
  editCarImgUrl = '';
  editCarBodyType = car.type || 'sedan';

  document.getElementById('editCarModalTitle').textContent = 'Редактировать трансфер';
  document.getElementById('editCarName').value = car.name;
  document.getElementById('editCarYear').value = car.year || '';
  document.getElementById('editCarTransferPrice').value = car.pricePerHour || '';
  const trans = car.transmission || car.trans || 'АКПП';
  document.getElementById('editCarTrans').value = trans;
  const preview = document.getElementById('editCarImgPreview');
  preview.src = car.img || '';

  document.getElementById('editPriceRentField').style.display = 'none';
  document.getElementById('editPriceTransferField').style.display = '';
  document.getElementById('editClassRentField').style.display = 'none';
  document.getElementById('editClassTransferField').style.display = '';

  document.querySelectorAll('[data-editbody]').forEach(b => {
    b.classList.toggle('active', b.dataset.editbody === editCarBodyType);
  });

  openModal('editCarModal');
}

function selectEditBodyType(body) {
  editCarBodyType = body;
  document.querySelectorAll('[data-editbody]').forEach(b => {
    b.classList.toggle('active', b.dataset.editbody === body);
  });
}

function onEditCarPhoto(input) {
  const file = input.files[0];
  if (!file) return;
  if (editCarImgUrl) URL.revokeObjectURL(editCarImgUrl);
  editCarImgUrl = URL.createObjectURL(file);
  document.getElementById('editCarImgPreview').src = editCarImgUrl;
}

async function saveEditCar() {
  const name  = document.getElementById('editCarName').value.trim();
  const year  = parseInt(document.getElementById('editCarYear').value);
  const trans = document.getElementById('editCarTrans').value;

  if (!name || !year) { showToast('Заполните все поля'); return; }

  if (editCarType === 'transfer') {
    const priceT = parseInt(document.getElementById('editCarTransferPrice').value);
    if (!priceT) { showToast('Укажите цену трансфера'); return; }
    const car = TRANSFER_CARS.find(c => c.id === editCarId);
    if (!car) return;
    car.name = name; car.year = year; car.transmission = trans;
    car.pricePerHour = priceT; car.price = priceT; car.type = editCarBodyType;
    if (editCarImgUrl) car.img = editCarImgUrl;
    try {
      await fetch(`${API}/api/cars/transfer/${editCarId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, year, transmission: trans, price_per_hour: priceT, type: editCarBodyType, img: car.img, available: transferFleetStatus[editCarId] !== false })
      });
    } catch(e) {}
    closeModal(); renderTransferCars(); renderAdminFleet();
    showToast('✓ Трансфер обновлён');
  } else {
    const priceRent = parseInt(document.getElementById('editCarPrice').value);
    const cls = document.getElementById('editCarClass').value;
    if (!priceRent) { showToast('Укажите цену аренды'); return; }
    const car = CARS.find(c => c.id === editCarId);
    if (!car) return;
    car.name = name; car.year = year; car.transmission = trans; car.trans = trans;
    car.price = priceRent; car.class = cls;
    if (editCarImgUrl) car.img = editCarImgUrl;
    try {
      await fetch(`${API}/api/cars/${editCarId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, year, transmission: trans, price: priceRent, class: cls, img: car.img, available: fleetStatus[editCarId] !== false })
      });
    } catch(e) {}
    closeModal(); renderCatalog(); renderPopularCars(); renderAdminFleet();
    showToast('✓ Авто обновлено');
  }
}

async function deleteEditCar() {
  if (!confirm('Удалить этот автомобиль из парка?')) return;
  if (editCarType === 'transfer') {
    const idx = TRANSFER_CARS.findIndex(c => c.id === editCarId);
    if (idx !== -1) TRANSFER_CARS.splice(idx, 1);
    delete transferFleetStatus[editCarId];
    try { await fetch(`${API}/api/cars/transfer/${editCarId}`, { method: 'DELETE' }); } catch(e) {}
    closeModal(); renderTransferCars(); renderAdminFleet();
    showToast('Авто удалено из трансфера');
  } else {
    const idx = CARS.findIndex(c => c.id === editCarId);
    if (idx !== -1) CARS.splice(idx, 1);
    delete fleetStatus[editCarId];
    try { await fetch(`${API}/api/cars/${editCarId}`, { method: 'DELETE' }); } catch(e) {}
    closeModal(); renderCatalog(); renderPopularCars(); renderAdminFleet();
    showToast('Авто удалено из парка');
  }
}

function showAddCar() {
  addCarPriceType = 'rent';
  newCarBodyType = 'sedan';
  newCarImgUrl = '';
  openModal('addCarModal');
  ['newCarName','newCarYear','newCarPrice','newCarTransferPrice'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const preview = document.getElementById('newCarImgPreview');
  if (preview) { preview.src = ''; preview.style.display = 'none'; }
  selectPriceType('rent');
  selectBodyType('sedan');
}

function selectPriceType(type) {
  addCarPriceType = type;
  document.querySelectorAll('[data-type]').forEach(b => {
    b.classList.toggle('active', b.dataset.type === type);
  });
  document.getElementById('priceRentField').style.display = type === 'rent' ? '' : 'none';
  document.getElementById('priceTransferField').style.display = type === 'transfer' ? '' : 'none';
  document.getElementById('classRentField').style.display = type === 'rent' ? '' : 'none';
  document.getElementById('classTransferField').style.display = type === 'transfer' ? '' : 'none';
}

let newCarBodyType = 'sedan';
function selectBodyType(body) {
  newCarBodyType = body;
  document.querySelectorAll('[data-body]').forEach(b => {
    b.classList.toggle('active', b.dataset.body === body);
  });
}

function onNewCarPhoto(input) {
  const file = input.files[0];
  if (!file) return;
  if (newCarImgUrl) URL.revokeObjectURL(newCarImgUrl);
  newCarImgUrl = URL.createObjectURL(file);
  const preview = document.getElementById('newCarImgPreview');
  if (preview) { preview.src = newCarImgUrl; preview.style.display = 'block'; }
}

async function saveNewCar() {
  const name  = document.getElementById('newCarName')?.value.trim();
  const year  = parseInt(document.getElementById('newCarYear')?.value);
  const trans = document.getElementById('newCarTrans')?.value || 'АКПП';
  const img   = newCarImgUrl || 'фото машин/Lada Granta.webp';

  if (!name || !year) { showToast('Заполните все поля'); return; }

  if (addCarPriceType === 'transfer') {
    const priceT = parseInt(document.getElementById('newCarTransferPrice')?.value);
    if (!priceT) { showToast('Укажите цену трансфера'); return; }
    let newId = Math.max(...TRANSFER_CARS.map(c => c.id), 100) + 1;
    try {
      const res = await fetch(`${API}/api/cars/transfer`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, year, transmission: trans, price_per_hour: priceT, type: newCarBodyType, img })
      });
      const saved = await res.json();
      newId = saved.id;
    } catch(e) {}
    TRANSFER_CARS.push({ id: newId, name, year, transmission: trans, pricePerHour: priceT, price: priceT, type: newCarBodyType, img });
    transferFleetStatus[newId] = true;
    newCarImgUrl = '';
    closeModal(); renderTransferCars(); renderAdminFleet();
    showToast('✓ Авто добавлено в трансфер');
  } else {
    const priceRent = parseInt(document.getElementById('newCarPrice')?.value);
    const cls = document.getElementById('newCarClass')?.value || 'comfort';
    if (!priceRent) { showToast('Укажите цену аренды'); return; }
    let newId = Math.max(...CARS.map(c => c.id)) + 1;
    try {
      const res = await fetch(`${API}/api/cars`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, year, transmission: trans, price: priceRent, class: cls, img })
      });
      const saved = await res.json();
      newId = saved.id;
    } catch(e) {}
    CARS.push({ id: newId, name, year, transmission: trans, trans, price: priceRent, class: cls, img });
    fleetStatus[newId] = true;
    newCarImgUrl = '';
    closeModal(); renderCatalog(); renderPopularCars(); renderAdminFleet();
    showToast('✓ Авто добавлено в парк');
  }
}

// ===== MAILING =====
function showMailer() { openModal('mailerModal'); }

async function sendMailing() {
  const title = document.getElementById('mailerTitle')?.value.trim() || 'Сообщение от администрации';
  const text  = document.getElementById('mailerText')?.value.trim();
  const target = document.getElementById('mailerTarget')?.value || 'all';

  if (!text) { showToast('Введите текст сообщения'); return; }

  const now = new Date();
  const time = `${now.getDate().toString().padStart(2,'0')}.${(now.getMonth()+1).toString().padStart(2,'0')} ${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`;
  messages.unshift({ title, text, time });

  try {
    await fetch(`${API}/api/messages`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body: text, target })
    });
  } catch(e) { console.warn('Messages API error:', e.message); }

  closeModal();
  renderProfileMessages();
  showToast('✓ Рассылка отправлена');
}

// ===== REPORT =====
function showReport() {
  const activeCount = bookings.filter(b => b.status === 'active').length;
  const newCount = bookings.filter(b => b.status === 'new').length;
  const revenue = bookings
    .filter(b => b.status === 'active')
    .reduce((sum, b) => sum + parseInt(b.price.replace(/\s/g, ''), 10), 0);
  const avgCheck = activeCount > 0 ? Math.round(revenue / activeCount) : 0;
  const transferTotal = transferBookings.length;
  const paidTransfers = transferBookings.filter(t => t.status === 'paid').length;
  const transferRevenue = transferBookings
    .filter(t => t.status === 'paid' && t.price)
    .reduce((sum, t) => sum + parseInt(t.price.replace(/\s/g, ''), 10), 0);

  document.getElementById('reportActive').textContent = activeCount;
  document.getElementById('reportNew').textContent = newCount;
  document.getElementById('reportRevenue').textContent = revenue > 0 ? revenue.toLocaleString('ru') + ' ₽' : '—';
  document.getElementById('reportAvg').textContent = avgCheck > 0 ? avgCheck.toLocaleString('ru') + ' ₽' : '—';
  document.getElementById('reportTransfers').textContent = transferTotal;
  document.getElementById('reportTransferRevenue').textContent = transferRevenue > 0 ? transferRevenue.toLocaleString('ru') + ' ₽' : '—';

  openModal('reportModal');
}

// ===== PROFILE ACTIONS =====
function toggleHistory() {
  const content = document.getElementById('historyContent');
  const arrow = document.getElementById('historyArrow');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'none';
    arrow.style.transform = '';
  }
}

function toggleNotif() {
  const toggle = document.getElementById('notifToggle');
  toggle.classList.toggle('active');
  showToast(toggle.classList.contains('active') ? 'Уведомления включены' : 'Уведомления выключены');
}

function showTerms() { openModal('termsModal'); }

function showSupport() {
  if (tg) {
    tg.openTelegramLink('https://t.me/your_support_bot');
  } else {
    showToast('Поддержка: @your_support_bot');
  }
}

function callPhone() {
  window.location.href = 'tel:+79622655555';
}

function openTelegram() {
  if (tg) {
    tg.openTelegramLink('https://t.me/your_support_bot');
  } else {
    window.open('https://t.me/your_support_bot', '_blank');
  }
}

function toggleSort() {
  if (sortOrder === 'default' || sortOrder === 'asc') {
    sortOrder = 'desc';
    showToast('По убыванию цены ↓');
  } else {
    sortOrder = 'asc';
    showToast('По возрастанию цены ↑');
  }
  const btn = document.getElementById('catalogSortBtn');
  if (btn) btn.classList.toggle('active', sortOrder !== 'default');
  renderCatalog();
}

// ===== DOCUMENTS =====
const docImages = { passport: null, registration: null, license: null };

function onDocFileChange(type, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    docImages[type] = e.target.result; // base64
    const preview = document.getElementById('doc-preview-' + type);
    if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    const status = document.getElementById('doc-status-' + type);
    if (status) { status.textContent = 'Выбрано'; status.className = 'doc-status loaded'; }
    const label = document.getElementById('doc-upload-' + type + '-label');
    if (label) label.textContent = '✓ Изменить фото';
  };
  reader.readAsDataURL(file);
}

async function submitDocs() {
  if (docsStatus === 'pending') { showToast('Документы уже отправлены, ожидайте проверки'); return; }
  if (docsStatus === 'verified') { showToast('Аккаунт уже верифицирован'); return; }

  if (!docImages.passport || !docImages.registration || !docImages.license) {
    showToast('Загрузите все три документа'); return;
  }

  const tgUserId = tg?.initDataUnsafe?.user?.id;
  if (!tgUserId) { showToast('Не удалось определить пользователя'); return; }

  const btn = document.getElementById('sendDocsBtn');
  if (btn) { btn.textContent = 'Отправка...'; btn.disabled = true; }

  try {
    const userName = document.getElementById('profileName')?.textContent || 'Пользователь';
    await fetch(`${API}/api/verifications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tg_user_id: tgUserId,
        name: userName,
        passport_img: docImages.passport,
        registration_img: docImages.registration,
        license_img: docImages.license
      })
    });
    docsStatus = 'pending';
    applyVerifStatusToUI('pending');
    updateVerificationBadge();
    tg?.HapticFeedback?.notificationOccurred('success');
    showToast('Документы отправлены на проверку!');
  } catch(e) {
    if (btn) { btn.textContent = 'Отправить документы'; btn.disabled = false; }
    showToast('Ошибка отправки, попробуйте снова');
  }
}

function applyVerifStatusToUI(status) {
  const btn = document.getElementById('sendDocsBtn');
  if (status === 'pending') {
    ['passport', 'registration', 'license'].forEach(type => {
      const el = document.getElementById('doc-status-' + type);
      if (el && el.textContent !== 'Выбрано') { el.textContent = 'На проверке'; el.className = 'doc-status pending'; }
    });
    if (btn) { btn.textContent = 'Документы на проверке...'; btn.disabled = true; }
  } else if (status === 'verified') {
    ['passport', 'registration', 'license'].forEach(type => {
      const el = document.getElementById('doc-status-' + type);
      if (el) { el.textContent = 'Проверено ✓'; el.className = 'doc-status verified'; }
    });
    if (btn) { btn.textContent = 'Аккаунт верифицирован ✓'; btn.disabled = true; }
  } else if (status === 'rejected') {
    if (btn) { btn.textContent = 'Отправить документы повторно'; btn.disabled = false; }
  }
}

function updateVerificationBadge() {
  const badge = document.getElementById('verifiedBadge');
  if (!badge) return;
  if (docsStatus === 'verified') {
    badge.textContent = 'Верифицированный аккаунт ✓';
    badge.className = 'verified-badge verified';
  } else if (docsStatus === 'pending') {
    badge.textContent = 'Документы на проверке...';
    badge.className = 'verified-badge pending';
  } else if (docsStatus === 'rejected') {
    badge.textContent = 'Документы отклонены — отправьте повторно';
    badge.className = 'verified-badge unverified';
  } else {
    badge.textContent = 'Неверифицированный аккаунт';
    badge.className = 'verified-badge unverified';
  }
}

// ===== ADMIN VERIFICATION =====
async function renderAdminVerification() {
  const container = document.getElementById('adminVerificationList');
  if (!container) return;

  let list = [];
  try {
    const res = await fetch(`${API}/api/verifications`);
    list = await res.json();
  } catch(e) { list = verificationRequests; }

  if (list.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px">Нет заявок на верификацию</div>';
    return;
  }

  const statusLabel = { pending: 'Ожидает', verified: 'Верифицирован', rejected: 'Отклонён' };
  const statusClass = { pending: 'new', verified: 'active', rejected: 'done' };

  container.innerHTML = list.map(v => `
    <div class="tr-row${v.status !== 'pending' ? ' tr-row--faded' : ''}">
      <div class="tr-top">
        <div class="bt-client">
          <b>${v.name || 'Пользователь'}</b>
          <small style="display:block;opacity:0.6">ID: ${v.tg_user_id}</small>
        </div>
        <span class="status-badge ${statusClass[v.status] || 'new'}">${statusLabel[v.status] || v.status}</span>
      </div>
      <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
        ${v.passport_img ? `<img src="${v.passport_img}" data-verifid="${v.id}" data-doctype="passport" class="verif-doc-img" style="width:80px;height:56px;object-fit:cover;border-radius:6px;cursor:pointer" title="Паспорт">` : ''}
        ${v.registration_img ? `<img src="${v.registration_img}" data-verifid="${v.id}" data-doctype="registration" class="verif-doc-img" style="width:80px;height:56px;object-fit:cover;border-radius:6px;cursor:pointer" title="Прописка">` : ''}
        ${v.license_img ? `<img src="${v.license_img}" data-verifid="${v.id}" data-doctype="license" class="verif-doc-img" style="width:80px;height:56px;object-fit:cover;border-radius:6px;cursor:pointer" title="В/у">` : ''}
      </div>
      ${v.status === 'pending' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-icon-confirm" onclick="verifyClient(${v.id})" title="Верифицировать">✓</button>
          <button class="btn-icon-decline" onclick="rejectClient(${v.id})" title="Отклонить">✕</button>
        </div>` : ''}
    </div>
  `).join('');

  // Клик по фото через делегирование — base64 не попадает в onclick
  container.querySelectorAll('.verif-doc-img').forEach(img => {
    img.addEventListener('click', () => openDocPhoto(img.src));
  });
}

function openDocPhoto(src) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center';
  overlay.innerHTML = `<img src="${src}" style="max-width:95vw;max-height:90vh;border-radius:10px">`;
  overlay.onclick = () => overlay.remove();
  document.body.appendChild(overlay);
}

async function verifyClient(id) {
  try {
    await fetch(`${API}/api/verifications/${id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'verified' })
    });
    showToast('✓ Клиент верифицирован');
    renderAdminVerification();
  } catch(e) { showToast('Ошибка'); }
}

async function rejectClient(id) {
  try {
    await fetch(`${API}/api/verifications/${id}/status`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'rejected' })
    });
    showToast('Документы отклонены');
    renderAdminVerification();
  } catch(e) { showToast('Ошибка'); }
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById('modalOverlay').classList.add('open');
  const modal = document.getElementById(id);
  if (modal) setTimeout(() => modal.classList.add('open'), 10);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('open'));
}

// ===== TOAST =====
function showToast(msg, color = '') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.background = color || 'rgba(34,197,94,0.9)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
