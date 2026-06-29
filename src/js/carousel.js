// Carousel Plugin
export default class Carousel {
  constructor(element) {
    this.element = typeof element === 'string' ? document.querySelector(element) : element;
    if (!this.element) return;
    
    this.items = Array.from(this.element.querySelectorAll('.carousel-item'));
    this.indicators = Array.from(this.element.querySelectorAll('.carousel-indicators [data-bs-target]'));
    this.currentIndex = this.items.findIndex(item => item.classList.contains('active')) || 0;
    if(this.currentIndex === -1) this.currentIndex = 0;
    
    this.isTransitioning = false;
    
    this.bindEvents();
  }
  
  bindEvents() {
    const prevBtn = this.element.querySelector('[data-bs-slide="prev"]');
    const nextBtn = this.element.querySelector('[data-bs-slide="next"]');
    
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.preventDefault(); this.prev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.preventDefault(); this.next(); });
    
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.to(index));
    });
  }
  
  next() {
    if (this.isTransitioning) return;
    const nextIndex = (this.currentIndex + 1) % this.items.length;
    this.slide('next', nextIndex);
  }
  
  prev() {
    if (this.isTransitioning) return;
    const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.slide('prev', prevIndex);
  }
  
  to(index) {
    if (this.isTransitioning || index === this.currentIndex) return;
    const direction = index > this.currentIndex ? 'next' : 'prev';
    this.slide(direction, index);
  }
  
  slide(direction, nextIndex) {
    this.isTransitioning = true;
    
    const currentItem = this.items[this.currentIndex];
    const nextItem = this.items[nextIndex];
    
    const directionClass = direction === 'next' ? 'carousel-item-start' : 'carousel-item-end';
    const orderClass = direction === 'next' ? 'carousel-item-next' : 'carousel-item-prev';
    
    nextItem.classList.add(orderClass);
    
    // Force reflow
    void nextItem.offsetWidth;
    
    currentItem.classList.add(directionClass);
    nextItem.classList.add(directionClass);
    
    // Update indicators
    this.indicators.forEach((ind, i) => {
      if (i === nextIndex) ind.classList.add('active');
      else ind.classList.remove('active');
    });
    
    setTimeout(() => {
      nextItem.classList.remove(orderClass, directionClass);
      nextItem.classList.add('active');
      
      currentItem.classList.remove('active', directionClass);
      
      this.currentIndex = nextIndex;
      this.isTransitioning = false;
    }, 600); // 0.6s match CSS
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(el => new Carousel(el));
});
