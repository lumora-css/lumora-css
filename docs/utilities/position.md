---
title: Position
---

Use these shorthand utilities for configuring the position of an element.

### Arrange elements

<div class="preview-block">
  <div class="position-relative" style="height: 200px; background-color: var(--color-bg-alt);">
    <div class="position-absolute top-0 start-0 bg-primary text-white p-2">top-0 start-0</div>
    <div class="position-absolute top-0 end-0 bg-primary text-white p-2">top-0 end-0</div>
    <div class="position-absolute top-50 start-50 translate-middle bg-primary text-white p-2">top-50 start-50 translate-middle</div>
    <div class="position-absolute bottom-50 end-50 translate-middle bg-primary text-white p-2">bottom-50 end-50 translate-middle</div>
    <div class="position-absolute bottom-0 start-0 bg-primary text-white p-2">bottom-0 start-0</div>
    <div class="position-absolute bottom-0 end-0 bg-primary text-white p-2">bottom-0 end-0</div>
  </div>
</div>

```html
<div class="position-relative">
  <div class="position-absolute top-0 start-0"></div>
  <div class="position-absolute top-0 end-0"></div>
  <div class="position-absolute top-50 start-50 translate-middle"></div>
  <div class="position-absolute bottom-50 end-50 translate-middle"></div>
  <div class="position-absolute bottom-0 start-0"></div>
  <div class="position-absolute bottom-0 end-0"></div>
</div>
```
