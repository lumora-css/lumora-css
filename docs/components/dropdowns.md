---
title: Dropdowns
---

Toggleable, contextual menus for displaying lists of links and actions.

### Left-Aligned Dropdown
Use the `.dropdown` container, `.dropdown-toggle` on the button, and `.dropdown-menu` for the list. Standard dropdowns align to the left of the button.

<div class="preview-block">
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle">My Profile</button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">View Profile</a></li>
      <li><a class="dropdown-item" href="#">Account Settings</a></li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle">My Profile</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">View Profile</a></li>
    <li><a class="dropdown-item" href="#">Account Settings</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item text-danger" href="#">Logout</a></li>
  </ul>
</div>
```

### Right-Aligned Dropdown
Add the `.dropdown-menu-right` class to the menu to align it to the right edge of the button.

<div class="preview-block">
  <div class="dropdown">
    <button class="btn btn-outline-secondary dropdown-toggle">Options</button>
    <ul class="dropdown-menu dropdown-menu-right">
      <li><a class="dropdown-item" href="#">Share</a></li>
      <li><a class="dropdown-item" href="#">Edit</a></li>
    </ul>
  </div>
</div>

```html
<div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle">Options</button>
  <ul class="dropdown-menu dropdown-menu-right">
    <li><a class="dropdown-item" href="#">Share</a></li>
    <li><a class="dropdown-item" href="#">Edit</a></li>
  </ul>
</div>
```
