---
title: Utilities
---

Lumora provides a comprehensive set of Bootstrap 5 compatible utility classes for fast layout and styling.

### Responsive Spacing
Margin and padding utilities support all breakpoints (`sm`, `md`, `lg`, `xl`, `xxl`). Use the format `{property}{sides}-{breakpoint}-{size}`.

Properties: `m` (margin), `p` (padding)
Sides: `t` (top), `b` (bottom), `s` (start/left), `e` (end/right), `x` (horizontal), `y` (vertical), blank (all sides)
Sizes: `0` to `5`, and `auto` for margin.

<div class="preview-block">
  <div class="bg-light border p-3 mb-3">.p-3 .mb-3 (Default)</div>
  <div class="bg-light border p-1 p-md-4 mb-3">.p-1 .p-md-4 (Padding changes at md)</div>
  <div class="bg-light border mx-auto w-50 text-center">.mx-auto .w-50 (Centered)</div>
</div>

```html
<div class="p-3 mb-3">Default padding</div>
<div class="p-1 p-md-4 mb-3">Responsive padding</div>
<div class="mx-auto w-50 text-center">Centered</div>
```

### Z-Index
Control the stacking order of elements with `.z-*` utilities.

<div class="preview-block" style="position: relative; min-height: 250px;">
  <div class="z-3 position-absolute p-3 bg-primary text-white" style="top: 10px; left: 10px;">.z-3 (Highest)</div>
  <div class="z-2 position-absolute p-3 bg-info text-dark" style="top: 30px; left: 30px;">.z-2</div>
  <div class="z-1 position-absolute p-3 bg-success text-white" style="top: 50px; left: 50px;">.z-1</div>
  <div class="z-0 position-absolute p-3 bg-warning text-dark" style="top: 70px; left: 70px;">.z-0</div>
  <div class="z-n1 position-absolute p-3 bg-dark text-white" style="top: 90px; left: 90px;">.z-n1 (Lowest)</div>
</div>

```html
<div class="z-3 position-absolute">.z-3 (Highest)</div>
<div class="z-2 position-absolute">.z-2</div>
<div class="z-1 position-absolute">.z-1</div>
<div class="z-0 position-absolute">.z-0</div>
<div class="z-n1 position-absolute">.z-n1 (Lowest)</div>
```

### Flex & Display
Control layout display with responsive display and flex utilities like `.d-none`, `.d-md-block`, `.d-flex`, `.justify-content-center`, etc.

<div class="preview-block">
  <div class="d-flex justify-content-between align-items-center bg-light p-3 border">
    <div>Left</div>
    <div class="d-none d-md-block">Hidden on small screens</div>
    <div>Right</div>
  </div>
</div>

```html
<div class="d-flex justify-content-between align-items-center">
  <div>Left</div>
  <div class="d-none d-md-block">Hidden on small screens</div>
  <div>Right</div>
</div>
```
