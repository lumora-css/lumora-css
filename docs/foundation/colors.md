---
title: Colors
---

Lumora features a harmonious, highly-tuned color palette based on HSL values that scales perfectly between light and dark modes.

### Background Colors
Use `.bg-*` classes to apply background colors. Text colors may need to be adjusted (e.g. using `.text-white`).

<div class="preview-block">
  <div class="d-flex flex-wrap gap-2">
    <div class="color-patch bg-primary text-white">.bg-primary</div>
    <div class="color-patch bg-secondary text-white">.bg-secondary</div>
    <div class="color-patch bg-success text-white">.bg-success</div>
    <div class="color-patch bg-danger text-white">.bg-danger</div>
    <div class="color-patch bg-warning text-dark">.bg-warning</div>
    <div class="color-patch bg-info text-white">.bg-info</div>
    <div class="color-patch bg-light text-dark">.bg-light</div>
    <div class="color-patch bg-dark text-white">.bg-dark</div>
  </div>
</div>

```html
<div class="bg-primary text-white">.bg-primary</div>
<div class="bg-success text-white">.bg-success</div>
<div class="bg-danger text-white">.bg-danger</div>
<div class="bg-warning text-dark">.bg-warning</div>
```

### Text Colors
Use `.text-*` classes to easily change the color of text.

<div class="preview-block">
  <div class="d-flex flex-column gap-2">
    <div class="text-primary font-weight-semibold">.text-primary text</div>
    <div class="text-secondary font-weight-semibold">.text-secondary text</div>
    <div class="text-success font-weight-semibold">.text-success text</div>
    <div class="text-danger font-weight-semibold">.text-danger text</div>
    <div class="text-warning font-weight-semibold">.text-warning text</div>
    <div class="text-info font-weight-semibold">.text-info text</div>
    <div class="text-muted font-weight-semibold">.text-muted text</div>
  </div>
</div>

```html
<span class="text-primary">.text-primary text</span>
<span class="text-success">.text-success text</span>
<span class="text-danger">.text-danger text</span>
<span class="text-muted">.text-muted text</span>
```
