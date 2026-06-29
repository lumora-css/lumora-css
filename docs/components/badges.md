---
title: Badges
---

Small status indicators and labels for highlighting information.

### Standard Badges
Use the `.badge` class combined with semantic colors like `.badge-primary` or `.badge-success`.

<div class="preview-block">
  <div class="d-flex align-items-center gap-3 mb-3">
    <h4>Heading with badge <span class="badge badge-primary">New</span></h4>
  </div>
  <div class="d-flex flex-wrap gap-2 mb-3">
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-danger">Danger</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-info">Info</span>
  </div>
</div>

```html
<h4>Heading with badge <span class="badge badge-primary">New</span></h4>

<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
```

### Pill Badges
Add the `.badge-pill` class for completely rounded badges.

<div class="preview-block">
  <div class="d-flex flex-wrap gap-2">
    <span class="badge badge-pill badge-primary">Pill Badge</span>
    <span class="badge badge-pill badge-success">Pill Success</span>
    <span class="badge badge-pill badge-danger">Pill Danger</span>
  </div>
</div>

```html
<span class="badge badge-pill badge-primary">Pill Badge</span>
<span class="badge badge-pill badge-success">Pill Success</span>
<span class="badge badge-pill badge-danger">Pill Danger</span>
```
