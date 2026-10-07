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
