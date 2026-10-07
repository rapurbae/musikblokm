// Countdown menuju opening night: 12 Des 2026, 19:00 WIB
const LAUNCH_DATE = new Date('2026-12-12T19:00:00+07:00');

const els = {
  days: document.getElementById('cd-days'),
  hours: document.getElementById('cd-hours'),
  mins: document.getElementById('cd-mins'),
  secs: document.getElementById('cd-secs'),
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const diff = LAUNCH_DATE - new Date();
  if (diff <= 0) {
    els.days.textContent = '00';
    els.hours.textContent = '00';
    els.mins.textContent = '00';
    els.secs.textContent = '00';
    const note = document.querySelector('.cd-note');
    if (note) note.textContent = 'Kami sudah buka! Sampai ketemu di Blok M!';
    return;
  }
  els.days.textContent = pad(Math.floor(diff / 86400000));
  els.hours.textContent = pad(Math.floor(diff / 3600000) % 24);
  els.mins.textContent = pad(Math.floor(diff / 60000) % 60);
  els.secs.textContent = pad(Math.floor(diff / 1000) % 60);
}

tick();
setInterval(tick, 1000);

// Form "kasih tau gue" — simpan lokal + tampilkan pesan sukses
const form = document.getElementById('notify-form');
const emailInput = document.getElementById('notify-email');
const msg = document.getElementById('notify-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  if (!email) return;
  try {
    const saved = JSON.parse(localStorage.getItem('mbm-notify') || '[]');
    if (!saved.includes(email)) {
      saved.push(email);
      localStorage.setItem('mbm-notify', JSON.stringify(saved));
    }
  } catch (_) {
    // abaikan bila localStorage tidak tersedia
  }
  msg.hidden = false;
  form.reset();
});

// Tahun footer otomatis
document.getElementById('year').textContent = new Date().getFullYear();
