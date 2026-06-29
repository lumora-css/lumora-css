// Offcanvas Plugin
export default class Offcanvas {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.backdrop = null;
    this.isShown = false;
    
    this.element.addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-bs-dismiss') && e.target.getAttribute('data-bs-dismiss') === 'offcanvas') {
        this.hide();
      }
    });
  }
  
  toggle() {
    this.isShown ? this.hide() : this.show();
  }
  
  show() {
    if (this.isShown) return;
    
    this.isShown = true;
    
    this.backdrop = document.createElement('div');
    this.backdrop.className = 'offcanvas-backdrop fade';
    document.body.appendChild(this.backdrop);
    
    // reflow
    void this.backdrop.offsetWidth;
    this.backdrop.classList.add('show');
    
    this.element.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    this.backdrop.addEventListener('click', () => this.hide());
  }
  
  hide() {
    if (!this.isShown) return;
    
    this.isShown = false;
    this.element.classList.remove('show');
    
    this.backdrop.classList.remove('show');
    setTimeout(() => {
      this.backdrop.remove();
      this.backdrop = null;
      document.body.style.overflow = '';
    }, 300); // match transition
  }
}

document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="offcanvas"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute('data-bs-target') || toggleBtn.getAttribute('href');
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      if (!targetEl._offcanvas) targetEl._offcanvas = new Offcanvas(targetEl);
      targetEl._offcanvas.toggle();
    }
  }
});
