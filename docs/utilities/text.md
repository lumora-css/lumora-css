---
title: Text
---

Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.

### Text alignment

<div class="preview-block">
  <p class="text-start">Start aligned text on all viewport sizes.</p>
  <p class="text-center">Center aligned text on all viewport sizes.</p>
  <p class="text-end">End aligned text on all viewport sizes.</p>
</div>

```html
<p class="text-start">Start aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-end">End aligned text on all viewport sizes.</p>
```

### Text wrapping and overflow

<div class="preview-block">
  <div class="badge bg-primary text-wrap" style="width: 6rem;">
    This text should wrap.
  </div>
  <div class="text-nowrap bg-light border" style="width: 8rem; overflow: hidden;">
    This text should overflow the parent.
  </div>
</div>

```html
<div class="badge bg-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
<div class="text-nowrap bg-light border" style="width: 8rem; overflow: hidden;">
  This text should overflow the parent.
</div>
```

### Font weight and italics

<div class="preview-block">
  <p class="fw-bold">Bold text.</p>
  <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
  <p class="fw-semibold">Semibold weight text.</p>
  <p class="fw-medium">Medium weight text.</p>
  <p class="fw-normal">Normal weight text.</p>
  <p class="fw-light">Light weight text.</p>
  <p class="fst-italic">Italic text.</p>
  <p class="fst-normal">Text with normal font style</p>
</div>

```html
<p class="fw-bold">Bold text.</p>
<p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p class="fw-semibold">Semibold weight text.</p>
<p class="fw-medium">Medium weight text.</p>
<p class="fw-normal">Normal weight text.</p>
<p class="fw-light">Light weight text.</p>
<p class="fst-italic">Italic text.</p>
<p class="fst-normal">Text with normal font style</p>
```
