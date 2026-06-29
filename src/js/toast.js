// Toast Plugin
export default class Toast {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.isShown = false;
    
    const closeBtn = this.element.querySelector('[data-bs-dismiss="toast"]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.hide());
    }
  }
  
  show() {
    if (this.isShown) return;
    
    this.element.classList.add('showing');
    this.element.classList.add('show');
    
    // reflow
    void this.element.offsetHeight;
    
    this.element.style.opacity = '1';
    
    setTimeout(() => {
      this.element.classList.remove('showing');
      this.isShown = true;
      
      const autohide = this.element.getAttribute('data-bs-autohide') !== 'false';
      if (autohide) {
        setTimeout(() => this.hide(), 5000);
      }
    }, 150);
  }
  
  hide() {
    if (!this.isShown) return;
    
    this.element.classList.add('showing');
    this.element.style.opacity = '0';
    
    setTimeout(() => {
      this.element.classList.remove('show', 'showing');
      this.isShown = false;
    }, 150);
  }
}

document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="toast"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute('data-bs-target');
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      if (!targetEl._toast) targetEl._toast = new Toast(targetEl);
      targetEl._toast.show();
    }
  }
});
