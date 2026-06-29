// Dropdown functionality
const initDropdown = () => {
  // Simple custom dropdown logic for future extension
  // Currently, we're relying on native <select> elements as well as basic toggles
  
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains('dropdown-menu')) {
        menu.classList.toggle('show');
        toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    const menus = document.querySelectorAll('.dropdown-menu.show');
    menus.forEach(menu => {
      menu.classList.remove('show');
      const toggle = menu.previousElementSibling;
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDropdown);
} else {
  initDropdown();
}

window.Lumora = window.Lumora || {}; window.Lumora.initDropdown = initDropdown;
