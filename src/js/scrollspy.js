// Minimal ScrollSpy Plugin
export default class ScrollSpy {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    const targetSelector = this.element.getAttribute('data-bs-target') || 'body';
    this.target = document.querySelector(targetSelector);
    if (!this.target) return;
    
    this.links = Array.from(this.target.querySelectorAll('.nav-link, .list-group-item'));
    this.observables = this.links
      .map(link => {
        const hash = link.getAttribute('href');
        if (hash && hash.startsWith('#') && hash.length > 1) {
          const el = document.querySelector(hash);
          if (el) return { link, el };
        }
        return null;
      })
      .filter(item => item !== null);
      
    this.initObserver();
  }
  
  initObserver() {
    const options = {
      root: this.element.tagName === 'BODY' ? null : this.element,
      rootMargin: '0px 0px -50% 0px', // trigger near top
      threshold: 0
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.activate('#' + id);
        }
      });
    }, options);
    
    this.observables.forEach(item => this.observer.observe(item.el));
  }
  
  activate(hash) {
    this.links.forEach(l => l.classList.remove('active'));
    const activeLink = this.links.find(l => l.getAttribute('href') === hash);
    if (activeLink) activeLink.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-bs-spy="scroll"]').forEach(el => new ScrollSpy(el));
});
