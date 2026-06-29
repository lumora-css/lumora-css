const initSidebar = () => {
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  // Use a data attribute to avoid duplicate event bindings when re-initialized
  const sidebarToggles = document.querySelectorAll('.sidebar-toggle:not([data-lumora-init])');
  const sidebarCloses = document.querySelectorAll('.sidebar-close:not([data-lumora-init])');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('show');
    if (sidebarOverlay) sidebarOverlay.classList.add('show');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('show');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
  }

  function toggleDesktop() {
    if (sidebar) sidebar.classList.toggle('collapsed');
  }

  sidebarToggles.forEach(toggle => {
    toggle.setAttribute('data-lumora-init', 'true');
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.innerWidth <= 991) {
        const isOpen = sidebar && sidebar.classList.contains('show');
        if (isOpen) closeSidebar();
        else openSidebar();
      } else {
        toggleDesktop();
      }
    });
  });

  sidebarCloses.forEach(closeBtn => {
    closeBtn.setAttribute('data-lumora-init', 'true');
    closeBtn.addEventListener('click', closeSidebar);
  });

  if (sidebarOverlay && !sidebarOverlay.hasAttribute('data-lumora-init')) {
    sidebarOverlay.setAttribute('data-lumora-init', 'true');
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  const collapseToggles = document.querySelectorAll('.sidebar-nav-link[data-toggle="collapse"]:not([data-lumora-init])');
  collapseToggles.forEach(toggle => {
    toggle.setAttribute('data-lumora-init', 'true');
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = toggle.getAttribute('data-target');
      if (!targetId) return;
      const targetMenu = document.getElementById(targetId.replace('#', ''));
      if (targetMenu) {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        targetMenu.classList.toggle('show');
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebar);
} else {
  initSidebar();
}

window.Lumora = window.Lumora || {}; window.Lumora.initSidebar = initSidebar;
