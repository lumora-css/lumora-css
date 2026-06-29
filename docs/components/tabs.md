---
title: Tabs & Spinners
---

Navigational tabs for switching content and spinners for loading states.

### Interactive Tabs
Use `.nav-tabs` with `.nav-item` and `.nav-link` for the headers. Add `data-toggle="tab"` and a target. The content wrapper uses `.tab-content` and the panes use `.tab-pane`.

<div class="preview-block">
  <ul class="nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" data-target="#tab1">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" data-target="#tab2">Settings</a>
    </li>
  </ul>
  <div class="tab-content card border-top-0 border-radius-top-0 px-4 py-3" style="border-top-left-radius: 0; border-top-right-radius: 0">
    <div id="tab1" class="tab-pane active">
      <h4 class="mb-2">Profile Overview</h4>
      <p class="mb-0">This is the profile tab. You can seamlessly switch between these views without refreshing the page.</p>
    </div>
    <div id="tab2" class="tab-pane">
      <h4 class="mb-2">Settings Configuration</h4>
      <p class="mb-0">Settings content goes here. The tab-content wrapper handles showing the active pane.</p>
    </div>
  </div>
</div>

```html
<ul class="nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" data-target="#tab1">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" data-target="#tab2">Settings</a>
  </li>
</ul>
<div class="tab-content card border-top-0 px-4 py-3" style="border-top-left-radius: 0; border-top-right-radius: 0;">
  <div id="tab1" class="tab-pane active">
    <h4>Profile Overview</h4>
    <p>This is the profile tab...</p>
  </div>
  <div id="tab2" class="tab-pane">
    <h4>Settings Configuration</h4>
    <p>Settings content goes here...</p>
  </div>
</div>
```

### Spinners
Use the `.spinner` class. It can be colored using text color utilities like `.text-primary`.

<div class="preview-block d-flex gap-3 align-items-center">
  <div class="spinner"></div>
  <div class="spinner text-primary"></div>
  <div class="spinner text-success"></div>
  <div class="spinner text-danger"></div>
  <button class="btn btn-primary d-flex align-items-center gap-2">
    <div class="spinner" style="width: 1rem; height: 1rem; border-width: 2px"></div>
    Loading...
  </button>
</div>

```html
<div class="spinner"></div>
<div class="spinner text-primary"></div>
<div class="spinner text-success"></div>
<div class="spinner text-danger"></div>

<button class="btn btn-primary d-flex align-items-center gap-2">
  <div class="spinner" style="width: 1rem; height: 1rem; border-width: 2px;"></div>
  Loading...
</button>
```
