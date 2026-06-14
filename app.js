// ===== TELEGRAM WEB APP INIT =====
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#0e0608');
  tg.setBackgroundColor('#0e0608');
}

// ===== CAR DATA =====
const CARS = [
  // ЭКОНОМ
  { id: 1, name: 'Lada Granta АКПП', year: 2024, trans: 'АКПП', price: 2600, class: 'econom',
    img: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&q=80' },
  { id: 2, name: 'Lada Granta 2024', year: 2024, trans: 'АКПП', price: 2600, class: 'econom',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80' },
  { id: 3, name: 'Lada Granta МКПП', year: 2023, trans: 'МКПП', price: 2400, class: 'econom',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },

  // КОМФОРТ
  { id: 4, name: 'Kia Rio АКПП', year: 2022, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80' },
  { id: 5, name: 'Kia Rio x line', year: 2022, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80' },
  { id: 6, name: 'Hyundai Solaris АКПП', year: 2022, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80' },
  { id: 7, name: 'Hyundai Solaris NEW АКПП', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80' },
  { id: 8, name: 'Skoda Rapid АКПП', year: 2021, trans: 'АКПП', price: 3200, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
  { id: 9, name: 'Skoda Rapid 2020', year: 2020, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
  { id: 10, name: 'Lada Vesta АКПП', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  { id: 11, name: 'Lada Vesta Cross', year: 2023, trans: 'АКПП', price: 3500, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 12, name: 'Lada Vesta SW', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },

  // КОМФОРТ+
  { id: 13, name: 'Hyundai Creta', year: 2023, trans: 'АКПП', price: 4500, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 14, name: 'Haval Jolion', year: 2024, trans: 'АКПП', price: 5500, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 15, name: 'Volkswagen Jetta АКПП', year: 2022, trans: 'АКПП', price: 4300, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
  { id: 16, name: 'Changan Eado', year: 2023, trans: 'АКПП', price: 4500, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80' },
  { id: 17, name: 'Skoda Octavia 2021', year: 2021, trans: 'АКПП', price: 4200, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&q=80' },
  { id: 18, name: 'Hyundai Elantra 2016', year: 2016, trans: 'АКПП', price: 3500, class: 'comfort-plus',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80' },

  // БИЗНЕС
  { id: 19, name: 'Toyota Camry V75', year: 2023, trans: 'АКПП', price: 7000, class: 'business',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80' },
  { id: 20, name: 'Toyota Camry V70', year: 2022, trans: 'АКПП', price: 6500, class: 'business',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80' },
  { id: 21, name: 'Kia K5', year: 2022, trans: 'АКПП', price: 6500, class: 'business',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80' },
  { id: 22, name: 'Mercedes-Benz C 180', year: 2021, trans: 'АКПП', price: 8000, class: 'business',
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 23, name: 'Mercedes-Benz E-класс', year: 2022, trans: 'АКПП', price: 7000, class: 'business',
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 24, name: 'Mercedes-Benz E-200 Premium', year: 2022, trans: 'АКПП', price: 11000, class: 'business',
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 25, name: 'BMW 5 серия 520d', year: 2018, trans: 'АКПП', price: 13000, class: 'business',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80' },
  { id: 26, name: 'BMW 320D XDRIVE', year: 2021, trans: 'АКПП', price: 11000, class: 'business',
    img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80' },
  { id: 27, name: 'Chery Tiggo 8 Pro', year: 2023, trans: 'АКПП', price: 7500, class: 'business',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 28, name: 'KIA Carnival 9 мест', year: 2019, trans: 'АКПП', price: 8000, class: 'business',
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 29, name: 'Changan UNI-V 2024', year: 2024, trans: 'АКПП', price: 15000, class: 'business',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80' },
  { id: 30, name: 'Changan Lamore', year: 2024, trans: 'АКПП', price: 15000, class: 'business',
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80' },
];

// ===== TRANSFER CAR DATA =====
const TRANSFER_CARS = [
  { id: 1, name: 'Mercedes-Benz E-Class W-213 Restyling', price: 3000,
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 2, name: 'Mercedes-Benz E-Class W-213', price: 3000,
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 3, name: 'Mercedes-Benz E-Class W-214 Long', price: 3500,
    img: 'https://images.unsplash.com/photo-1617531653332-bd46c16f7d22?w=400&q=80' },
  { id: 4, name: 'Mercedes-Benz V-class', price: 3500,
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 5, name: 'Mercedes-Benz V-class Коллекционная', price: 3500,
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&q=80' },
  { id: 6, name: 'GAC M8', price: 3000,
    img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80' },
  { id: 7, name: 'Mercedes-Benz S-Class W-222 Restyling', price: 5000,
    img: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80' },
  { id: 8, name: 'Mercedes S-Class W222 Noldea', price: 5000,
    img: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&q=80' },
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
let sortOrder = 'default'; // 'default' | 'desc' | 'asc'
let transferBookings = [];
let selectedTransferCar = null;
let docsStatus = 'empty'; // 'empty' | 'pending' | 'verified' | 'rejected'
let verificationRequests = [];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderPopularCars();
  renderCatalog();
  renderRentals();
  renderTransferCars();
  setupFilterTabs();
  setupTransButtons();
  initProfile();
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

  const phoneBtn = document.getElementById('phoneBtn');
  const adminBtn = document.getElementById('adminBtn');
  const bottomNav = document.getElementById('bottomNav');

  if (name === 'admin') {
    phoneBtn.classList.add('hidden');
    bottomNav.style.display = 'none';
    adminBtn.style.opacity = '0.3';
  } else {
    phoneBtn.classList.remove('hidden');
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

  container.innerHTML = popular.map(car => `
    <div class="car-card" onclick="openBookingModal(${car.id})">
      <div class="car-img-wrap">
        ${carImgHtml(car, 'car-photo')}
        <span class="car-class-badge">${CLASS_LABELS[car.class]}</span>
      </div>
      <div class="car-info">
        <div class="car-name">${car.name}</div>
        <div class="car-price">${car.price.toLocaleString('ru')} <small>₽/сут</small></div>
        <button class="car-book-btn" onclick="event.stopPropagation(); openBookingModal(${car.id})">Забронировать</button>
      </div>
    </div>
  `).join('');
}

// ===== RENDER CATALOG =====
function renderCatalog() {
  const container = document.getElementById('catalogList');
  let filtered = CARS;

  if (currentFilter !== 'all') {
    filtered = filtered.filter(c => c.class === currentFilter);
  }
  if (currentTrans !== 'all') {
    filtered = filtered.filter(c =>
      currentTrans === 'mkpp' ? c.trans === 'МКПП' : c.trans === 'АКПП'
    );
  }

  if (sortOrder === 'desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortOrder === 'asc') filtered = [...filtered].sort((a, b) => a.price - b.price);

  container.innerHTML = filtered.map(car => `
    <div class="car-list-item">
      <div class="car-list-top">
        <div class="car-list-img-wrap">
          ${carImgHtml(car, 'car-list-photo')}
        </div>
        <div class="car-list-details">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div class="car-list-name">${car.name}</div>
            <span class="car-list-badge">${CLASS_LABELS[car.class]}</span>
          </div>
          <div class="car-list-year">${car.year} · ${car.trans}</div>
          <div class="car-list-price">${car.price.toLocaleString('ru')} <small>₽/сутки</small></div>
        </div>
      </div>
      <button class="car-book-full" onclick="openBookingModal(${car.id})">Забронировать</button>
    </div>
  `).join('');
}

// ===== RENDER RENTALS PAGE =====
function renderRentals() {
  const container = document.getElementById('rentalsList');
  if (bookings.length === 0) {
    container.innerHTML = '<div class="empty-state">У вас пока нет аренд</div>';
    return;
  }
  container.innerHTML = bookings.map(r => `
    <div class="rental-card">
      <div class="rental-top">
        <div class="rental-car-name">${r.car}</div>
        <span class="status-badge ${r.status === 'active' ? 'active' : 'done'}">${r.status === 'active' ? 'Активна' : 'Завершена'}</span>
      </div>
      <div class="rental-dates">${r.start} – ${r.end}</div>
      <div class="rental-price">${r.price} ₽</div>
    </div>
  `).join('');
}

// ===== RENDER PROFILE RENTALS =====
function renderProfileRentals() {
  const container = document.getElementById('profileActiveRentals');
  if (!container) return;

  const active = bookings.filter(b => b.status === 'active');
  if (active.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:10px 0">Нет активных аренд</div>';
    return;
  }

  const latest = active[0];
  container.innerHTML = `
    <div class="rental-item active-rental" onclick="showPage('rentals')">
      <div class="ri-left">
        <div class="ri-name">${latest.car}</div>
        <div class="ri-dates">${latest.start} – ${latest.end}</div>
        <div class="ri-price">${latest.price} ₽</div>
      </div>
      <div class="ri-right">
        <span class="status-badge active">Активна</span>
        <button class="ri-more" onclick="showPage('rentals')">Подробнее ›</button>
      </div>
    </div>
    ${active.length > 1 ? `<div class="more-rentals">+${active.length - 1} ещё</div>` : ''}
  `;
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
  document.querySelectorAll('.trans-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.trans-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTrans = btn.dataset.trans;
      renderCatalog();
    });
  });
}

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
function renderTransferCars() {
  const container = document.getElementById('transferList');
  if (!container) return;
  container.innerHTML = TRANSFER_CARS.map(car => `
    <div class="car-list-item">
      <div class="car-list-top">
        <div class="car-list-img-wrap">
          ${carImgHtml(car, 'car-list-photo')}
        </div>
        <div class="car-list-details">
          <div class="car-list-name">${car.name}</div>
          <div class="car-list-year">Трансфер · АКПП</div>
          <div class="car-list-price">${car.price.toLocaleString('ru')} <small>₽/час</small></div>
        </div>
      </div>
      <button class="car-book-full" onclick="openTransferModal(${car.id})">Выбрать</button>
    </div>
  `).join('');
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

function submitTransfer() {
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

  transferBookings.unshift({
    id: Date.now(),
    car: selectedTransferCar.name,
    pricePerHour: selectedTransferCar.price,
    from,
    to,
    startTime: fmt(start),
    endTime: null,
    hours: null,
    price: null,
    status: 'pending',
  });

  closeModal();
  renderProfileTransfer();
  renderAdminTransfers();
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

  const statusLabel = { pending: 'Новый', confirmed: 'Подтверждён', receipt_sent: 'Чек отправлен', paid: 'Оплачено', declined: 'Отклонён' };
  const statusClass = { pending: 'new', confirmed: 'active', receipt_sent: 'new', paid: 'active', declined: 'done' };

  container.innerHTML = transferBookings.map((t, i) => `
    <div class="bt-row tr-row${t.status === 'declined' || t.status === 'paid' ? ' tr-row--faded' : ''}">
      <div class="tr-top">
        <div class="bt-client">
          <b>${t.car}</b><br>
          <small>${t.from} → ${t.to}</small><br>
          <small>Подача: ${t.startTime}</small>
        </div>
        <span class="status-badge ${statusClass[t.status]}">${statusLabel[t.status] || t.status}</span>
      </div>
      ${t.price ? `<div class="bt-price" style="margin-top:6px">${t.price} ₽ · ${t.hours} ч.</div>` : ''}
      ${t.status === 'pending' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="openConfirmTransferModal(${i})">✓ Подтвердить</button>
          <button class="btn-decline" onclick="declineTransfer(${i})">✕ Отклонить</button>
        </div>` : ''}
      ${t.status === 'receipt_sent' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="confirmPayment(${i})">✓ Оплата получена</button>
          <button class="btn-decline" onclick="rejectPayment(${i})">✕ Отклонить чек</button>
        </div>` : ''}
    </div>
  `).join('');
}

function openConfirmTransferModal(index) {
  confirmingTransferIndex = index;
  const t = transferBookings[index];

  document.getElementById('confirmTransferInfo').textContent =
    `${t.car} · ${t.from} → ${t.to} · Подача: ${t.startTime} · ${t.pricePerHour.toLocaleString('ru')} ₽/час`;

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

  // Parse start time from stored string (DD.MM HH:MM) — use current year
  const year = new Date().getFullYear();
  const [datePart, timePart] = t.startTime.split(' ');
  const [day, month] = datePart.split('.');
  const start = new Date(`${year}-${month}-${day}T${timePart}`);

  if (end <= start) { totalEl.textContent = 'Время окончания раньше времени подачи'; return; }

  const hours = Math.ceil((end - start) / (1000 * 60 * 60));
  const total = hours * t.pricePerHour;
  totalEl.textContent = `Итого: ${hours} ч. × ${t.pricePerHour.toLocaleString('ru')} ₽ = ${total.toLocaleString('ru')} ₽`;
}

function saveConfirmTransfer() {
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
  const total = hours * t.pricePerHour;

  transferBookings[confirmingTransferIndex] = {
    ...t,
    endTime: fmt(endVal),
    hours,
    price: total.toLocaleString('ru'),
    status: 'confirmed',
  };

  confirmingTransferIndex = null;
  closeModal();
  renderAdminTransfers();
  renderProfileTransfer();
  showToast('✓ Трансфер подтверждён');
}

function declineTransfer(index) {
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
  // Возвращаем статус "подтверждён" — пользователь должен оплатить заново
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

function sendReceipt() {
  if (payingTransferIndex !== null) {
    transferBookings[payingTransferIndex].status = 'receipt_sent';
    renderProfileTransfer();
    renderAdminTransfers();
  }

  closeModal();

  // Открываем чат с ботом — пользователь отправляет фото чека туда вручную
  if (tg) {
    tg.openTelegramLink('https://t.me/ВАШ_БОТ'); // замените на username вашего бота
    tg.HapticFeedback?.notificationOccurred('success');
  }

  showToast('✓ Открываем чат с ботом — отправьте туда фото чека');
}

// ===== RENDER PROFILE TRANSFER =====
function renderProfileTransfer() {
  const container = document.getElementById('profileActiveTransfer');
  if (!container) return;

  const activeStatuses = ['pending', 'confirmed', 'receipt_sent'];
  const active = transferBookings.filter(t => activeStatuses.includes(t.status));

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

  // Max end date = start + 2 days (32 часа)
  const maxDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  document.getElementById('bookEndDate').max = maxDate;
  document.getElementById('bookStartDate').min = today;

  // Use onchange to avoid duplicate listeners
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

    // Update max on end date based on selected start
    const maxDate = new Date(start);
    maxDate.setDate(maxDate.getDate() + 30);
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

function submitBooking() {
  if (!selectedCar) return;

  const start = document.getElementById('bookStartDate').value;
  const end = document.getElementById('bookEndDate').value;

  if (!start || !end) {
    showToast('Выберите даты');
    return;
  }

  const fmt = d => d.split('-').reverse().join('.');
  const days = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
  const total = days * selectedCar.price;

  const userName = document.getElementById('profileName')?.textContent || 'Пользователь';

  bookings.unshift({
    car: selectedCar.name,
    client: userName,
    start: fmt(start),
    end: fmt(end) + '.' + new Date(end).getFullYear(),
    price: total.toLocaleString('ru'),
    days,
    status: 'new',
  });

  closeModal();
  renderRentals();
  renderProfileRentals();
  renderAdminBookings();
  updateAdminStats();

  showToast('✓ Заявка отправлена!');
  if (tg) {
    tg.HapticFeedback?.notificationOccurred('success');
  }
}

// ===== ADMIN ACTIONS =====
function renderAdminBookings() {
  const container = document.getElementById('adminBookingList');
  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px">Нет заявок на аренду</div>';
    return;
  }

  const statusLabel = { new: 'Новая', active: 'Активна', done: 'Завершена', declined: 'Отклонена' };
  const statusClass  = { new: 'new', active: 'active', done: 'done', declined: 'done' };

  container.innerHTML = bookings.map((b, i) => `
    <div class="bt-row${b.status === 'declined' || b.status === 'done' ? '" style="opacity:0.5' : ''}>
      <div class="bt-client"><b>${b.client}</b><br><small>${b.start} – ${b.end}</small></div>
      <div class="bt-car">${b.car}</div>
      <div class="bt-price">${b.price} ₽</div>
      <div><span class="status-badge ${statusClass[b.status] || 'new'}">${statusLabel[b.status] || 'Новая'}</span></div>
      ${b.status === 'new' ? `
        <div class="bt-actions" style="grid-column:1/-1;margin-top:6px">
          <button class="btn-confirm" onclick="confirmAdminBooking(${i})">✓ Подтвердить</button>
          <button class="btn-decline" onclick="declineAdminBooking(${i})">✕ Отклонить</button>
        </div>` : ''}
    </div>
  `).join('');
}

function confirmAdminBooking(index) {
  bookings[index].status = 'active';
  renderAdminBookings();
  updateAdminStats();
  showToast(`✓ Аренда ${bookings[index].client} подтверждена`);
}

function declineAdminBooking(index) {
  bookings[index].status = 'declined';
  renderAdminBookings();
  updateAdminStats();
  renderRentals();
  renderProfileRentals();
  showToast('Аренда отклонена');
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
  if (el('statNewBookings')) el('statNewBookings').innerHTML = newCount + ' <span class="red-dot">●</span>';
}

function confirmBooking(btn, name) {} // оставлено для совместимости
function declineBooking(btn) {}

function showAddCar() { openModal('addCarModal'); }
function saveNewCar() { closeModal(); showToast('✓ Авто добавлено в парк'); }
function showMailer() { openModal('mailerModal'); }
function sendMailing() { closeModal(); showToast('✓ Рассылка отправлена'); }
function showReport() { openModal('reportModal'); }

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

function showTerms() { showToast('Условия аренды'); }

function showSupport() {
  if (tg) {
    tg.openTelegramLink('https://t.me/your_support_bot');
  } else {
    showToast('Поддержка: @your_support_bot');
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
  renderCatalog();
}

// ===== DOCUMENTS =====
function sendDocsToBot() {
  if (docsStatus === 'pending') {
    showToast('Документы уже отправлены, ожидайте проверки');
    return;
  }
  if (docsStatus === 'verified') {
    showToast('Аккаунт уже верифицирован');
    return;
  }

  docsStatus = 'pending';

  ['passport', 'registration', 'license'].forEach(type => {
    const el = document.getElementById('doc-status-' + type);
    if (el) { el.textContent = 'На проверке'; el.className = 'doc-status pending'; }
  });

  const btn = document.getElementById('sendDocsBtn');
  if (btn) { btn.textContent = 'Документы на проверке...'; btn.disabled = true; }

  updateVerificationBadge();

  const userName = document.getElementById('profileName')?.textContent || 'Пользователь';
  verificationRequests.unshift({ id: Date.now(), name: userName, status: 'pending' });
  renderAdminVerification();

  if (tg) {
    tg.openTelegramLink('https://t.me/ВАШ_БОТ'); // замените на username вашего бота
    tg.HapticFeedback?.notificationOccurred('success');
  }
  showToast('Открываем бот — отправьте туда фото документов');
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
function renderAdminVerification() {
  const container = document.getElementById('adminVerificationList');
  if (!container) return;

  if (verificationRequests.length === 0) {
    container.innerHTML = '<div class="empty-state" style="padding:16px">Нет заявок на верификацию</div>';
    return;
  }

  const statusLabel = { pending: 'Ожидает', verified: 'Верифицирован', rejected: 'Отклонён' };
  const statusClass = { pending: 'new', verified: 'active', rejected: 'done' };

  container.innerHTML = verificationRequests.map((v, i) => `
    <div class="bt-row tr-row${v.status !== 'pending' ? ' tr-row--faded' : ''}">
      <div class="tr-top">
        <div class="bt-client">
          <b>${v.name}</b><br>
          <small>Паспорт · Прописка · Водительские права</small>
        </div>
        <span class="status-badge ${statusClass[v.status]}">${statusLabel[v.status]}</span>
      </div>
      ${v.status === 'pending' ? `
        <div class="bt-actions" style="margin-top:8px">
          <button class="btn-confirm" onclick="verifyClient(${i})">✓ Верифицировать</button>
          <button class="btn-decline" onclick="rejectClient(${i})">✕ Отклонить</button>
        </div>` : ''}
    </div>
  `).join('');
}

function verifyClient(index) {
  verificationRequests[index].status = 'verified';
  docsStatus = 'verified';

  ['passport', 'registration', 'license'].forEach(type => {
    const el = document.getElementById('doc-status-' + type);
    if (el) { el.textContent = 'Верифицирован'; el.className = 'doc-status uploaded'; }
  });

  const btn = document.getElementById('sendDocsBtn');
  if (btn) { btn.style.display = 'none'; }

  updateVerificationBadge();
  renderAdminVerification();
  showToast('✓ Клиент верифицирован');
}

function rejectClient(index) {
  verificationRequests[index].status = 'rejected';
  docsStatus = 'rejected';

  ['passport', 'registration', 'license'].forEach(type => {
    const el = document.getElementById('doc-status-' + type);
    if (el) { el.textContent = 'Отклонён'; el.className = 'doc-status'; }
  });

  const btn = document.getElementById('sendDocsBtn');
  if (btn) { btn.textContent = 'Отправить документы повторно'; btn.disabled = false; }

  updateVerificationBadge();
  renderAdminVerification();
  showToast('Документы отклонены');
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById('modalOverlay').classList.add('open');
  const modal = document.getElementById(id);
  if (modal) {
    setTimeout(() => modal.classList.add('open'), 10);
  }
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
