const initTabs = () => {
  const tabLinks = document.querySelectorAll('[data-toggle="tab"]');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('data-target');
      if (!targetId) return;
      
      const targetPane = document.querySelector(targetId);
      if (!targetPane) return;
      
      const nav = link.closest('.nav-tabs');
      if (!nav) return;
      
      // Deactivate all links in this nav
      nav.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.classList.remove('active');
      });
      
      // Deactivate all panes in the corresponding tab-content
      const tabContent = targetPane.closest('.tab-content');
      if (tabContent) {
        tabContent.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('active');
        });
      }
      
      // Activate clicked link and target pane
      link.classList.add('active');
      targetPane.classList.add('active');
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTabs);
} else {
  initTabs();
}

window.Lumora = window.Lumora || {}; window.Lumora.initTabs = initTabs;
