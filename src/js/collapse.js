// Collapse Plugin
export default class Collapse {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.isTransitioning = false;
  }
  
  toggle() {
    if (this.element.classList.contains('show')) {
      this.hide();
    } else {
      this.show();
    }
  }
  
  show() {
    if (this.isTransitioning || this.element.classList.contains('show')) return;
    
    this.element.classList.remove('collapse');
    this.element.classList.add('collapsing');
    this.element.style.height = 0;
    
    this.isTransitioning = true;
    
    const scrollHeight = this.element.scrollHeight;
    
    const complete = () => {
      this.element.classList.remove('collapsing');
      this.element.classList.add('collapse', 'show');
      this.element.style.height = '';
      this.isTransitioning = false;
      this.element.removeEventListener('transitionend', complete);
    };
    
    this.element.addEventListener('transitionend', complete);
    this.element.style.height = scrollHeight + 'px';
  }
  
  hide() {
    if (this.isTransitioning || !this.element.classList.contains('show')) return;
    
    this.element.style.height = this.element.getBoundingClientRect().height + 'px';
    // Force reflow
    void this.element.offsetHeight;
    
    this.element.classList.add('collapsing');
    this.element.classList.remove('collapse', 'show');
    
    this.isTransitioning = true;
    
    const complete = () => {
      this.element.classList.remove('collapsing');
      this.element.classList.add('collapse');
      this.isTransitioning = false;
      this.element.removeEventListener('transitionend', complete);
    };
    
    this.element.addEventListener('transitionend', complete);
    this.element.style.height = '';
  }
}

document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="collapse"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute('data-bs-target') || toggleBtn.getAttribute('href');
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      // Store instance on element
      if (!targetEl._collapse) targetEl._collapse = new Collapse(targetEl);
      targetEl._collapse.toggle();
    }
  }
});
