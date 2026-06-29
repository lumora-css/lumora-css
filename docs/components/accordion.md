---
title: Accordion
---

Vertically collapsing accordions that toggle content visibility.

### Standard Accordion
Wrap everything in `.accordion`. Each pane requires `.accordion-item`, an `.accordion-header` containing the `.accordion-button`, and a `.accordion-collapse` wrapper for the body.

<div class="preview-block">
  <div class="accordion">
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" aria-expanded="true" aria-controls="collapseOne">
          What is Lumora?
          <svg class="accordion-icon" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </h3>
      <div id="collapseOne" class="accordion-collapse show">
        <div class="accordion-body">
          <div class="accordion-body-inner">
            Lumora is a premium, fast, and modern component library built with vanilla CSS and JavaScript. It provides a clean base for building beautiful interfaces without the overhead of heavy frameworks.
          </div>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h3 class="accordion-header">
        <button class="accordion-button" aria-expanded="false" aria-controls="collapseTwo">
          Does it support Dark Mode?
          <svg class="accordion-icon" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </h3>
      <div id="collapseTwo" class="accordion-collapse">
        <div class="accordion-body">
          <div class="accordion-body-inner">
            Yes! Dark mode is fully supported via CSS variables. You can toggle it using the theme button in the header, and it automatically respects the user's system preferences.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion">
  <!-- Item 1 -->
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="true" aria-controls="collapseOne">
        <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </h3>
    <!-- Add 'show' class to make it initially open -->
    <div id="collapseOne" class="accordion-collapse show">
      <div class="accordion-body">
        <div class="accordion-body-inner">
          This is the body content for the first item. It's visible by default.
        </div>
      </div>
    </div>
  </div>
  
  <!-- Item 2 -->
  <div class="accordion-item">
    <h3 class="accordion-header">
      <button class="accordion-button" aria-expanded="false" aria-controls="collapseTwo">
        <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </h3>
    <div id="collapseTwo" class="accordion-collapse">
      <div class="accordion-body">
        <div class="accordion-body-inner">
          This is the body content for the second item. It's hidden by default.
        </div>
      </div>
    </div>
  </div>
</div>
```
