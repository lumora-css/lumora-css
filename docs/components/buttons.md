---
title: Buttons
---

Custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and variants.

### Solid Buttons
Use the `.btn` class followed by a semantic color class like `.btn-primary` or `.btn-success`.

<div class="preview-block d-flex flex-wrap gap-2">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-light text-dark">Light</button>
  <button class="btn btn-dark">Dark</button>
</div>

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```

### Outline Buttons
Replace the color class with its outline variant, e.g. `.btn-outline-primary`, for a transparent button with a colored border.

<div class="preview-block d-flex flex-wrap gap-2">
  <button class="btn btn-outline-primary">Primary</button>
  <button class="btn btn-outline-secondary">Secondary</button>
  <button class="btn btn-outline-success">Success</button>
  <button class="btn btn-outline-danger">Danger</button>
</div>

```html
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
```

### Ghost Buttons
Use the `.btn-ghost` class for a button that is completely transparent until hovered.

<div class="preview-block d-flex flex-wrap gap-2">
  <button class="btn btn-ghost">Ghost Default</button>
  <button class="btn btn-ghost text-primary">Ghost Primary</button>
  <button class="btn btn-ghost text-danger">Ghost Danger</button>
</div>

```html
<button class="btn btn-ghost">Ghost Default</button>
<button class="btn btn-ghost text-primary">Ghost Primary</button>
<button class="btn btn-ghost text-danger">Ghost Danger</button>
```

### Button Sizes
Add `.btn-sm` or `.btn-lg` for smaller or larger buttons.

<div class="preview-block d-flex flex-wrap gap-2 align-items-center">
  <button class="btn btn-primary btn-sm">Small Button</button>
  <button class="btn btn-primary">Default Button</button>
  <button class="btn btn-primary btn-lg">Large Button</button>
</div>

```html
<button class="btn btn-primary btn-sm">Small Button</button>
<button class="btn btn-primary">Default Button</button>
<button class="btn btn-primary btn-lg">Large Button</button>
```
