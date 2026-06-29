---
title: Layout System
---

Lumora uses a flexible 12-column grid system built with flexbox, matching the exact behavior and class names of Bootstrap 5.

### Breakpoints
The layout is responsive and scales up at predefined breakpoints:
- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px
- **xxl**: 1400px

### Containers
Use `.container` for a responsive, fixed-width container. Use `.container-fluid` for a full-width container spanning the entire viewport. 
You can also use `.container-{breakpoint}` for 100% width until the specified breakpoint.

### 12-Column Grid
Use the `.row` wrapper, and place `.col-*` classes inside. For responsive scaling, use classes like `.col-md-6`.

<div class="preview-block">
  <div class="container">
    <div class="row mb-3">
      <div class="col-12 col-md-8 mb-3"><div class="bg-light color-patch" style="border: 1px dashed var(--color-primary); padding: 1rem">.col-12 .col-md-8</div></div>
      <div class="col-12 col-md-4 mb-3"><div class="bg-light color-patch" style="border: 1px dashed var(--color-primary); padding: 1rem">.col-12 .col-md-4</div></div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-4 mb-3"><div class="bg-light color-patch" style="border: 1px dashed var(--color-primary); padding: 1rem">.col-lg-4</div></div>
      <div class="col-12 col-md-6 col-lg-4 mb-3"><div class="bg-light color-patch" style="border: 1px dashed var(--color-primary); padding: 1rem">.col-md-6 .col-lg-4</div></div>
      <div class="col-12 col-md-6 col-lg-4 mb-3"><div class="bg-light color-patch" style="border: 1px dashed var(--color-primary); padding: 1rem">.col-md-6 .col-lg-4</div></div>
    </div>
  </div>
</div>

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-8">Content</div>
    <div class="col-12 col-md-4">Sidebar</div>
  </div>
  <div class="row">
    <div class="col-12 col-lg-4">Item 1</div>
    <div class="col-12 col-md-6 col-lg-4">Item 2</div>
    <div class="col-12 col-md-6 col-lg-4">Item 3</div>
  </div>
</div>
```

### Gutters
Control the padding between columns using `.g-*` classes. Use `.gx-*` to control horizontal gutters, and `.gy-*` for vertical gutters.

<div class="preview-block">
  <div class="container">
    <div class="row g-2">
      <div class="col-6"><div class="bg-light p-3 border">Gutter 2</div></div>
      <div class="col-6"><div class="bg-light p-3 border">Gutter 2</div></div>
      <div class="col-6"><div class="bg-light p-3 border">Gutter 2</div></div>
      <div class="col-6"><div class="bg-light p-3 border">Gutter 2</div></div>
    </div>
  </div>
</div>

```html
<div class="row g-2">
  <div class="col-6">Gutter 2</div>
  <div class="col-6">Gutter 2</div>
  <div class="col-6">Gutter 2</div>
  <div class="col-6">Gutter 2</div>
</div>
```
