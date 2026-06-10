// ===== TELEGRAM WEB APP INIT =====
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.expand();
  tg.setHeaderColor('#0e0608');
  tg.setBackgroundColor('#0e0608');
}

// ===== CAR DATA =====
const CARS = [
  { id: 1, name: 'Lada Granta', year: 2024, trans: 'МКПП', price: 2500, class: 'econom', emoji: '🚗' },
  { id: 2, name: 'Lada Vesta АКПП', year: 2023, trans: 'АКПП', price: 3300, class: 'comfort', emoji: '🚙' },
  { id: 3, name: 'Hyundai Creta', year: 2023, trans: 'АКПП', price: 4200, class: 'comfort-plus', emoji: '🚘' },
  { id: 4, name: 'Toyota Camry V75', year: 2023, trans: 'АКПП', price: 6500, class: 'business', emoji: '🏎️' },
  { id: 5, name: 'BMW 5 Series 520d', year: 2022, trans: 'АКПП', price: 12000, class: 'business', emoji: '🚀' },
  { id: 6, name: 'Haval Jolion', year: 2024, trans: 'АКПП', price: 3800, class: 'comfort', emoji: '🚐' },
];

const CLASS_LABELS = {
  econom: 'Эконом',
  comfort: 'Комфорт',
  'comfort-plus': 'Комфорт+',
  business: 'Бизнес',
};

// ===== RENTALS DATA =====
const RENTALS = [
  { car: 'Toyota Camry V75', start: '15.07', end: '22.07.2025', price: '45 500', status: 'active' },
  { car: 'Hyundai Creta', start: '01.06', end: '05.06.2025', price: '16 800', status: 'done' },
];

// ===== STATE =====
let currentFilter = 'all';
let currentTrans = 'all';
let selectedCar = null;
let currentPage = 'home';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderPopularCars();
  renderCatalog();
  renderRentals();
  setupFilterTabs();
  setupTransButtons();
});

// ===== PAGE NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');

  const navBtn = document.querySelector(`[data-page="${name}"]`);
  if (navBtn) navBtn.classList.add('active');

  currentPage = name;

  // Show/hide phone button and admin button on admin page
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

  // Scroll to top
  if (page) page.scrollTop = 0;
}

// ===== RENDER POPULAR CARS =====
function renderPopularCars() {
  const container = document.getElementById('popularCars');
  const popular = CARS.slice(0, 4);
  container.innerHTML = popular.map(car => `
    <div class="car-card" onclick="openBookingModal(${car.id})">
      <div class="car-img">
        ${car.emoji}
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

  container.innerHTML = filtered.map(car => `
    <div class="car-list-item">
      <div class="car-list-top">
        <div class="car-list-img">${car.emoji}</div>
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

// ===== RENDER RENTALS =====
function renderRentals() {
  const container = document.getElementById('rentalsList');
  container.innerHTML = RENTALS.map(r => `
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
  // Set defaults
  const today = new Date().toISOString().split('T')[0];
  const weekLater = new Date(Date.now() + 7*24*60*60*1000).toISOString().split('T')[0];
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

// ===== TRANSFER MODAL =====
function openTransferModal() {
  openModal('transferModal');
  const now = new Date();
  now.setMinutes(0);
  document.getElementById('transferDateTime').value = now.toISOString().slice(0, 16);
}

function calcTransfer() {
  const from = document.getElementById('fromAddr').value;
  const to = document.getElementById('toAddr').value;
  if (!from || !to) {
    showToast('Укажите адреса!');
    return;
  }
  const prices = { econom: 800, comfort: 1200, business: 2000 };
  const cls = document.getElementById('transferClass').value;
  const base = prices[cls];
  const total = base + Math.floor(Math.random() * 500);
  closeModal();
  showToast(`Стоимость: ~${total} ₽`);
}

// ===== BOOKING MODAL =====
function openBookingModal(carId) {
  selectedCar = CARS.find(c => c.id === carId);
  if (!selectedCar) return;

  document.getElementById('bookingTitle').textContent = `Забронировать ${selectedCar.name}`;
  document.getElementById('bookingCarInfo').textContent = `${selectedCar.name} — ${selectedCar.price.toLocaleString('ru')} ₽/сутки`;

  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0];
  document.getElementById('bookStartDate').value = today;
  document.getElementById('bookEndDate').value = tomorrow;

  updateBookingTotal();

  document.getElementById('bookStartDate').addEventListener('input', updateBookingTotal);
  document.getElementById('bookEndDate').addEventListener('input', updateBookingTotal);

  openModal('bookingModal');
}

function updateBookingTotal() {
  if (!selectedCar) return;
  const start = new Date(document.getElementById('bookStartDate').value);
  const end = new Date(document.getElementById('bookEndDate').value);
  if (isNaN(start) || isNaN(end) || end <= start) {
    document.getElementById('bookingTotal').textContent = '';
    return;
  }
  const days = Math.ceil((end - start) / (1000*60*60*24));
  const total = days * selectedCar.price;
  document.getElementById('bookingTotal').textContent = `Итого за ${days} дн.: ${total.toLocaleString('ru')} ₽`;
}

function submitBooking() {
  closeModal();
  showToast('✓ Заявка отправлена!');
  if (tg) {
    tg.HapticFeedback?.notificationOccurred('success');
  }
}

// ===== ADMIN ACTIONS =====
function confirmBooking(btn, name) {
  const row = btn.closest('.bt-row');
  const actions = row.querySelector('.bt-actions');
  const statusCell = row.querySelector('.status-badge');
  if (actions) actions.remove();
  if (statusCell) {
    statusCell.className = 'status-badge active';
    statusCell.textContent = 'Активна';
  }
  showToast(`✓ Аренда ${name} подтверждена`);
  // Update new bookings count
  const newCount = document.querySelectorAll('.status-badge.new').length;
  document.querySelector('.stat-value .red-dot')?.parentElement && (
    document.querySelector('.stats-grid .stat-card:last-child .stat-value').textContent = newCount + ' '
  );
}

function declineBooking(btn) {
  const row = btn.closest('.bt-row');
  row.style.opacity = '0.4';
  const actions = row.querySelector('.bt-actions');
  if (actions) actions.remove();
  const statusCell = row.querySelector('.status-badge');
  if (statusCell) {
    statusCell.className = 'status-badge done';
    statusCell.textContent = 'Отклонена';
  }
  showToast('Аренда отклонена');
}

function showAddCar() {
  openModal('addCarModal');
}

function saveNewCar() {
  closeModal();
  showToast('✓ Авто добавлено в парк');
}

function showMailer() {
  openModal('mailerModal');
}

function sendMailing() {
  closeModal();
  showToast('✓ Рассылка отправлена');
}

function showReport() {
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

function showTerms() {
  showToast('Условия аренды');
  // Could open a modal with terms
}

function showSupport() {
  if (tg) {
    tg.openTelegramLink('https://t.me/your_support_bot');
  } else {
    showToast('Поддержка: @your_support_bot');
  }
}

function toggleSort() {
  showToast('Сортировка');
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById('modalOverlay').classList.add('open');
  const modal = document.getElementById(id);
  if (modal) {
    // Small delay for animation
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
  if (color) toast.style.background = color;
  else toast.style.background = 'rgba(34,197,94,0.9)';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
