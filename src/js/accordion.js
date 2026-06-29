// Accordion functionality
const initAccordion = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const collapseId = button.getAttribute('aria-controls');
      const collapseContent = document.getElementById(collapseId);
      
      // Close all other accordions (optional, for accordion group behavior)
      const accordionGroup = button.closest('.accordion');
      if (accordionGroup) {
        const groupButtons = accordionGroup.querySelectorAll('.accordion-button');
        groupButtons.forEach(btn => {
          if (btn !== button) {
            btn.setAttribute('aria-expanded', 'false');
            const target = document.getElementById(btn.getAttribute('aria-controls'));
            if (target) target.classList.remove('show');
          }
        });
      }

      // Toggle current accordion
      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        if (collapseContent) collapseContent.classList.remove('show');
      } else {
        button.setAttribute('aria-expanded', 'true');
        if (collapseContent) collapseContent.classList.add('show');
      }
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccordion);
} else {
  initAccordion();
}

window.Lumora = window.Lumora || {}; window.Lumora.initAccordion = initAccordion;
