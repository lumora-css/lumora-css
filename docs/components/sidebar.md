---
title: Sidebar
---

A versatile navigation component for dashboards and documentation, complete with collapsible submenus.

### Sidebar Navigation Structure
Use the `.sidebar` container with `.sidebar-nav` and `.sidebar-nav-link` for items. For a collapsible menu, add `.has-collapse` and `data-toggle="collapse"` to the link, and pair it with a `.sidebar-collapse-menu` list.

<div class="preview-block d-flex bg-light p-0">
  <aside class="sidebar" style="position: relative; height: 400px; transform: none; width: 260px; z-index: 1">
    <div class="sidebar-header">
      <a href="#" class="brand" style="font-weight: 600; font-size: 1.25rem">
        Lumora
      </a>
    </div>
    <div class="sidebar-menu">
      <ul class="sidebar-nav">
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link active">
            Getting Started
          </a>
        </li>
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link has-collapse" data-toggle="collapse" data-target="#demo-collapse" aria-expanded="true">
            <span class="nav-link-text">Components</span>
            <svg class="sidebar-collapse-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6" /></svg>
          </a>
          <ul class="sidebar-collapse-menu show" id="demo-collapse">
            <li><a href="#" class="sidebar-nav-link">Buttons</a></li>
            <li><a href="#" class="sidebar-nav-link">Cards</a></li>
            <li><a href="#" class="sidebar-nav-link">Forms</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <div style="flex: 1; padding: 2rem">
    <h4>Page Content</h4>
    <p class="text-muted">The sidebar stays on the left.</p>
  </div>
</div>

```html
<aside class="sidebar">
  <div class="sidebar-header">
    <a href="#" class="brand">Lumora</a>
  </div>
  <div class="sidebar-menu">
    <ul class="sidebar-nav">
      <!-- Collapsible Nav Item -->
      <li class="sidebar-nav-item">
        <a href="#" class="sidebar-nav-link has-collapse" data-toggle="collapse" data-target="#menu-id" aria-expanded="true">
          <span class="nav-link-text">Components</span>
          <svg class="sidebar-collapse-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
        <!-- Collapse Menu Container -->
        <ul class="sidebar-collapse-menu show" id="menu-id">
          <li><a href="#" class="sidebar-nav-link">Buttons</a></li>
          <li><a href="#" class="sidebar-nav-link">Cards</a></li>
        </ul>
      </li>
    </ul>
  </div>
</aside>
```
