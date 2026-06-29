---
title: Validation
---

Provide valuable, actionable feedback to your users with HTML5 form validation.

### Custom styles
For custom Lumora form validation messages, you'll need to add `.is-valid` and `.is-invalid` to `.form-control`.

<div class="preview-block">
  <form class="row g-3">
    <div class="col-md-4">
      <label for="validationServer01" class="form-label">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationServer02" class="form-label">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4">
      <label for="validationServer03" class="form-label">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required>
      <div id="validationServer03Feedback" class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  </form>
</div>

```html
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
</form>
```
