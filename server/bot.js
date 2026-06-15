const TOKEN = process.env.BOT_TOKEN;
const ADMINS = [process.env.ADMIN_CHAT_ID, process.env.ADMIN_CHAT_ID_2].filter(Boolean);

async function send(chatId, text) {
  if (!TOKEN || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
    });
  } catch(e) {
    console.error('Bot error:', e.message);
  }
}

async function sendToAdmins(text) {
  for (const id of ADMINS) await send(id, text);
}

// ===== АРЕНДА =====

async function clientBookingReceived(b) {
  await send(b.tg_user_id,
    `🚗 <b>Заявка принята!</b>\n\n` +
    `🚘 Автомобиль: ${b.car_name}\n` +
    `📅 Начало аренды: ${b.start_date}\n` +
    `📅 Конец аренды: ${b.end_date}\n` +
    `💰 Сумма: ${Number(b.total_price).toLocaleString('ru')} ₽\n\n` +
    `Ожидайте подтверждения от менеджера.`
  );
}

async function adminNewBooking(b) {
  await sendToAdmins(
    `🚗 <b>Новая заявка на аренду</b>\n\n` +
    `👤 Клиент: ${b.client_name}\n` +
    `🚘 Машина: ${b.car_name}\n` +
    `📅 ${b.start_date} — ${b.end_date}\n` +
    `💰 Сумма: ${Number(b.total_price).toLocaleString('ru')} ₽`
  );
}

async function clientBookingConfirmed(b) {
  await send(b.tg_user_id,
    `✅ <b>Заявка подтверждена!</b>\n\n` +
    `🚘 ${b.car_name}\n` +
    `📅 ${b.start_date} — ${b.end_date}\n` +
    `💰 ${Number(b.total_price).toLocaleString('ru')} ₽\n\n` +
    `Ждём вас! По всем вопросам: +7 (962) 265-55-55`
  );
}

async function clientEarlyReturn(b) {
  await send(b.tg_user_id,
    `✅ <b>Досрочный возврат подтверждён!</b>\n\n` +
    `🚘 ${b.car_name}\n\n` +
    `Спасибо, что использовали наш сервис! Будем рады видеть вас снова.\n\n` +
    `Пожалуйста, оставьте отзыв в нашей группе 🙏`
  );
}

async function clientBookingDeclined(b) {
  await send(b.tg_user_id,
    `❌ <b>Заявка отклонена</b>\n\n` +
    `🚘 ${b.car_name}\n` +
    `📅 ${b.start_date} — ${b.end_date}\n\n` +
    `Свяжитесь с нами: +7 (962) 265-55-55`
  );
}

// ===== ТРАНСФЕР =====

async function clientTransferReceived(t) {
  await send(t.tg_user_id,
    `🚕 <b>Заявка на трансфер принята!</b>\n\n` +
    `🚘 Автомобиль: ${t.car_name}\n` +
    `📍 Маршрут: ${t.route}\n` +
    `🕐 Дата и время подачи: ${t.date}\n\n` +
    `Ожидайте подтверждения от менеджера.`
  );
}

async function adminNewTransfer(t) {
  await sendToAdmins(
    `🚕 <b>Новая заявка на трансфер</b>\n\n` +
    `👤 Клиент: ${t.client_name}\n` +
    `🚘 Машина: ${t.car_name}\n` +
    `📍 Маршрут: ${t.route}\n` +
    `🕐 Время: ${t.date}`
  );
}

async function clientTransferConfirmed(t) {
  await send(t.tg_user_id,
    `✅ <b>Трансфер подтверждён!</b>\n\n` +
    `🚘 ${t.car_name}\n` +
    `📍 ${t.route}\n` +
    `🕐 ${t.date}\n` +
    `💰 К оплате: ${Number(t.total_price).toLocaleString('ru')} ₽\n\n` +
    `Оплатите и пришлите чек в приложении.`
  );
}

async function clientTransferDeclined(t) {
  await send(t.tg_user_id,
    `❌ <b>Заявка на трансфер отклонена</b>\n\n` +
    `🚘 ${t.car_name}\n` +
    `📍 ${t.route}\n\n` +
    `Свяжитесь с нами: +7 (962) 265-55-55`
  );
}

async function adminReceiptSent(t) {
  await sendToAdmins(
    `🧾 <b>Клиент прислал чек об оплате</b>\n\n` +
    `👤 ${t.client_name}\n` +
    `🚘 ${t.car_name}\n` +
    `📍 ${t.route}\n` +
    `💰 ${Number(t.total_price).toLocaleString('ru')} ₽\n\n` +
    `Проверьте чек в админ-панели.`
  );
}

async function clientReceiptConfirmed(t) {
  await send(t.tg_user_id,
    `✅ <b>Оплата получена!</b>\n\n` +
    `🚘 ${t.car_name}\n` +
    `📍 ${t.route}\n` +
    `🕐 ${t.date}\n\n` +
    `Водитель будет вовремя. Хорошей поездки! 🙏`
  );
}

async function clientReceiptDeclined(t) {
  await send(t.tg_user_id,
    `❌ <b>Чек не принят</b>\n\n` +
    `Пришлите корректный чек или свяжитесь с нами: +7 (962) 265-55-55`
  );
}

// ===== ВЕРИФИКАЦИЯ =====

async function adminVerificationRequest(v) {
  await sendToAdmins(
    `📄 <b>Новые документы на верификацию</b>\n\n` +
    `👤 Новый клиент — ${v.name}\n\n` +
    `Проверьте документы в админ-панели.`
  );
}

async function clientVerificationApproved(tgId) {
  await send(tgId,
    `✅ <b>Документы проверены!</b>\n\n` +
    `Теперь вы можете бронировать автомобили. Добро пожаловать!`
  );
}

async function clientVerificationDeclined(tgId) {
  await send(tgId,
    `❌ <b>Документы не прошли проверку</b>\n\n` +
    `Пожалуйста, пришлите повторно или свяжитесь с нами: +7 (962) 265-55-55`
  );
}

// ===== РАССЫЛКА =====

async function broadcast(userIds, title, body) {
  const text = `📢 <b>${title}</b>\n\n${body}`;
  for (const id of userIds) {
    await send(id, text);
    await new Promise(r => setTimeout(r, 50)); // небольшая задержка между сообщениями
  }
}

module.exports = {
  clientBookingReceived,
  adminNewBooking,
  clientEarlyReturn,
  clientBookingConfirmed,
  clientBookingDeclined,
  clientTransferReceived,
  adminNewTransfer,
  clientTransferConfirmed,
  clientTransferDeclined,
  adminReceiptSent,
  clientReceiptConfirmed,
  clientReceiptDeclined,
  adminVerificationRequest,
  clientVerificationApproved,
  clientVerificationDeclined,
  broadcast,
};
