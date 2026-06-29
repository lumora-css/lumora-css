---
title: Modals
---

Accessible, responsive dialogs that overlay the main content.

### Standard Modal
Use the `.modal-backdrop` class to create the background overlay, and `.modal-dialog` for the actual modal window. Toggle it using `data-toggle="modal"` and `data-target="#modalId"` on a trigger button.

<div class="preview-block">
  <button class="btn btn-primary" data-toggle="modal" data-target="#demoModal">Open Modal</button>
  <div class="modal-backdrop" id="demoModal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Confirm Action</h3>
        <button class="modal-close" data-dismiss="modal" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to proceed? This action cannot be undone and will permanently delete your account data.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" data-dismiss="modal">Cancel</button>
        <button class="btn btn-danger" data-dismiss="modal">Delete Account</button>
      </div>
    </div>
  </div>
</div>

```html
<!-- Trigger Button -->
<button class="btn btn-primary" data-toggle="modal" data-target="#demoModal">Open Modal</button>

<!-- Modal Element -->
<div class="modal-backdrop" id="demoModal">
  <div class="modal-dialog">
    <div class="modal-header">
      <h3 class="modal-title">Confirm Action</h3>
      <button class="modal-close" data-dismiss="modal" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="modal-body">
      <p>Are you sure you want to proceed?</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost" data-dismiss="modal">Cancel</button>
      <button class="btn btn-danger" data-dismiss="modal">Delete</button>
    </div>
  </div>
</div>
```
