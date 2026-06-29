const initModal = () => {
  const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
  const modalDismissers = document.querySelectorAll('[data-dismiss="modal"]');
  const backdrops = document.querySelectorAll('.modal-backdrop');

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-target');
      if (targetId) openModal(targetId.replace('#', ''));
    });
  });

  modalDismissers.forEach(dismisser => {
    dismisser.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = dismisser.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  // Close when clicking on the backdrop (outside the dialog)
  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initModal);
} else {
  initModal();
}

window.Lumora = window.Lumora || {}; window.Lumora.initModal = initModal;
