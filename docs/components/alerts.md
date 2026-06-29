---
title: Alerts
---

Feedback messages for typical user actions.

### Primary Alert
Use the `.alert` and `.alert-primary` classes for standard informational alerts. Add `.alert-dismissible` and a close button to allow users to dismiss it.

<div class="preview-block">
  <div class="alert alert-primary alert-dismissible">
    <strong>Heads up!</strong> This is a primary alert with a close button.
    <button class="alert-close" data-dismiss="alert">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
  </div>
</div>

```html
<div class="alert alert-primary alert-dismissible">
  <strong>Heads up!</strong> This is a primary alert with a close button.
  <button class="alert-close" data-dismiss="alert">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>
```

### Success Alert
Use the `.alert-success` class for positive feedback messages.

<div class="preview-block">
  <div class="alert alert-success alert-dismissible">
    <strong>Success!</strong> Your changes have been saved successfully.
    <button class="alert-close" data-dismiss="alert">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
  </div>
</div>

```html
<div class="alert alert-success alert-dismissible">
  <strong>Success!</strong> Your changes have been saved successfully.
  <button class="alert-close" data-dismiss="alert">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>
```

### Danger Alert
Use the `.alert-danger` class for error messages.

<div class="preview-block">
  <div class="alert alert-danger alert-dismissible">
    <strong>Error:</strong> Something went wrong while saving.
    <button class="alert-close" data-dismiss="alert">
      <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
    </button>
  </div>
</div>

```html
<div class="alert alert-danger alert-dismissible">
  <strong>Error:</strong> Something went wrong while saving.
  <button class="alert-close" data-dismiss="alert">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>
</div>
```
