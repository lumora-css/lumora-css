---
title: Range
---

Use our custom range inputs for consistent cross-browser styling and built-in customization.

### Overview
Create custom `<input type="range">` controls with `.form-range`.

<div class="preview-block">
  <label for="customRange1" class="form-label">Example range</label>
  <input type="range" class="form-range" id="customRange1">
</div>

```html
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">
```

### Min and max
Range inputs have implicit values for `min` and `max`—`0` and `100`, respectively. You may specify new values for those using the `min` and `max` attributes.

<div class="preview-block">
  <label for="customRange2" class="form-label">Example range</label>
  <input type="range" class="form-range" min="0" max="5" id="customRange2">
</div>

```html
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">
```
