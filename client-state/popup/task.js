const modal = document.getElementById('subscribe-modal');
const closeBtn = document.querySelector('.modal__close_times');

function openModal() {
  if (modal) {
    modal.classList.add('modal_active');
  }
}

function closeModal() {
  if (modal) {
    modal.classList.remove('modal_active');
    localStorage.setItem('subscribe-modal', 'true');
  }
}

if (modal && !localStorage.getItem('subscribe-modal')) {
  openModal();
}

if (closeBtn) {
  closeBtn.addEventListener('click', closeModal);
}
