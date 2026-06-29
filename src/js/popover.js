// Minimal Popover Plugin
export default class Popover {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.popoverEl = null;
    this.isShown = false;
    
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
    
    // Hide when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isShown && !this.element.contains(e.target) && (!this.popoverEl || !this.popoverEl.contains(e.target))) {
        this.hide();
      }
    });
  }
  
  toggle() {
    this.isShown ? this.hide() : this.show();
  }
  
  show() {
    if (this.isShown) return;
    
    const title = this.element.getAttribute('title') || this.element.getAttribute('data-bs-title') || '';
    const content = this.element.getAttribute('data-bs-content') || '';
    
    this.popoverEl = document.createElement('div');
    this.popoverEl.className = 'popover bs-popover-top';
    this.popoverEl.innerHTML = `
      <div class="popover-arrow"></div>
      ${title ? `<h3 class="popover-header">${title}</h3>` : ''}
      <div class="popover-body">${content}</div>
    `;
    
    document.body.appendChild(this.popoverEl);
    this.popoverEl.classList.add('show');
    
    // Position (basic top center)
    const rect = this.element.getBoundingClientRect();
    const popRect = this.popoverEl.getBoundingClientRect();
    
    this.popoverEl.style.top = (rect.top + window.scrollY - popRect.height - 8) + 'px';
    this.popoverEl.style.left = (rect.left + window.scrollX + (rect.width / 2) - (popRect.width / 2)) + 'px';
    
    this.isShown = true;
  }
  
  hide() {
    if (!this.isShown || !this.popoverEl) return;
    this.popoverEl.classList.remove('show');
    this.popoverEl.remove();
    this.popoverEl = null;
    this.isShown = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new Popover(el));
});
