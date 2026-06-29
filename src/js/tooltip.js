// Minimal Tooltip Plugin
export default class Tooltip {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.tooltipEl = null;
    this.isShown = false;
    
    this.element.addEventListener('mouseenter', () => this.show());
    this.element.addEventListener('mouseleave', () => this.hide());
    this.element.addEventListener('focus', () => this.show());
    this.element.addEventListener('blur', () => this.hide());
  }
  
  show() {
    if (this.isShown) return;
    
    const title = this.element.getAttribute('title') || this.element.getAttribute('data-bs-title');
    if (!title) return;
    
    // Remove native title to prevent default tooltip
    this.element.setAttribute('data-original-title', title);
    this.element.removeAttribute('title');
    
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.className = 'tooltip bs-tooltip-top show';
    this.tooltipEl.innerHTML = `
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">${title}</div>
    `;
    
    document.body.appendChild(this.tooltipEl);
    
    // Basic top center positioning
    const rect = this.element.getBoundingClientRect();
    const tipRect = this.tooltipEl.getBoundingClientRect();
    
    this.tooltipEl.style.top = (rect.top + window.scrollY - tipRect.height - 4) + 'px';
    this.tooltipEl.style.left = (rect.left + window.scrollX + (rect.width / 2) - (tipRect.width / 2)) + 'px';
    
    this.isShown = true;
  }
  
  hide() {
    if (!this.isShown || !this.tooltipEl) return;
    this.tooltipEl.remove();
    this.tooltipEl = null;
    this.isShown = false;
    
    // Restore native title
    const origTitle = this.element.getAttribute('data-original-title');
    if (origTitle) {
      this.element.setAttribute('title', origTitle);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new Tooltip(el));
});
