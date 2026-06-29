# Navbar

The Navbar component is a responsive header for your application that contains branding, navigation links, and can collapse on smaller screens.

## Basic Usage

```html
<div class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a href="#" class="navbar-brand">Lumora</a>
    <button class="navbar-toggler" type="button">
      <span>☰</span>
    </button>
    <div class="navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</div>
```

<div class="preview-block">
  <div class="navbar navbar-expand-lg" style="margin: -2rem;">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">Lumora</a>
      <button class="navbar-toggler" type="button">
        <span>☰</span>
      </button>
      <div class="navbar-collapse" style="display: flex;">
        <ul class="navbar-nav" style="flex-direction: row; gap: 1rem;">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

*Check this navbar.md for usage code.*
