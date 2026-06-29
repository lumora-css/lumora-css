const initAlerts = () => {
  const dismissButtons = document.querySelectorAll('[data-dismiss="alert"]');
  
  dismissButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const alert = btn.closest('.alert');
      if (alert) {
        alert.classList.add('fade-out');
        // Wait for transition before removing
        setTimeout(() => {
          alert.remove();
        }, 300); // 300ms matches --transition-normal
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAlerts);
} else {
  initAlerts();
}

window.Lumora = window.Lumora || {}; window.Lumora.initAlerts = initAlerts;
