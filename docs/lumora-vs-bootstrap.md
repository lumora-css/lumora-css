---
title: Lumora vs Bootstrap
slug: /lumora-vs-bootstrap
---

# Lumora vs Bootstrap 5

Here you can compare Lumora's premium design aesthetics directly against standard Bootstrap 5. 
Toggle the switch below to swap the CSS framework on the fly and see how the exact same HTML structure looks in both.

<div style="margin: 2rem 0; padding: 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; box-shadow: var(--shadow-sm);">
  <div>
    <h3 style="margin: 0 0 0.5rem 0; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Framework Toggle</h3>
    <p style="margin: 0; color: var(--text-muted); font-size: 0.9rem;">Currently viewing: <strong id="current-fw-label" style="color: var(--primary-color);">Lumora</strong></p>
  </div>
  <button id="toggle-fw-btn" style="padding: 0.75rem 1.5rem; background: var(--primary-gradient); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow-sm);">
    Switch to Bootstrap 5
  </button>
</div>

<script>
  document.getElementById('toggle-fw-btn').addEventListener('click', function() {
    const link = document.getElementById('theme-stylesheet');
    const label = document.getElementById('current-fw-label');
    
    if (link.href.includes('lumora.css')) {
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
      label.textContent = 'Bootstrap 5';
      label.style.color = '#712cf9';
      this.textContent = 'Switch to Lumora';
      this.style.background = '#712cf9';
    } else {
      link.href = '/dist/lumora.css';
      label.textContent = 'Lumora';
      label.style.color = 'var(--primary-color)';
      this.textContent = 'Switch to Bootstrap 5';
      this.style.background = 'var(--primary-gradient)';
    }
  });
</script>

## Component Comparisons

Below are several components rendered with the exact same HTML classes. Toggle the framework above to see the difference.

### Buttons

<div class="preview-block">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-light">Light</button>
  <button class="btn btn-dark">Dark</button>
  
  <div class="mt-3">
    <button class="btn btn-outline-primary">Outline Primary</button>
    <button class="btn btn-outline-secondary">Outline Secondary</button>
    <button class="btn btn-outline-success">Outline Success</button>
    <button class="btn btn-outline-danger">Outline Danger</button>
  </div>
</div>

### Cards

<div class="preview-block" style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>

  <div class="card text-center" style="width: 18rem;">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
</div>

### Alerts

<div class="preview-block">
  <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
  </div>
  <div class="alert alert-secondary" role="alert">
    A simple secondary alert—check it out!
  </div>
  <div class="alert alert-success" role="alert">
    A simple success alert—check it out!
  </div>
  <div class="alert alert-danger" role="alert">
    A simple danger alert—check it out!
  </div>
  <div class="alert alert-warning" role="alert">
    A simple warning alert—check it out!
  </div>
</div>

### Badges & Breadcrumbs

<div class="preview-block">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
  </nav>

  <div>
    <span class="badge bg-primary">Primary</span>
    <span class="badge bg-secondary">Secondary</span>
    <span class="badge bg-success">Success</span>
    <span class="badge bg-danger">Danger</span>
    <span class="badge bg-warning text-dark">Warning</span>
    <span class="badge bg-info text-dark">Info</span>
    <span class="badge bg-light text-dark">Light</span>
    <span class="badge bg-dark">Dark</span>
  </div>
  
  <div class="mt-3">
    <span class="badge rounded-pill bg-primary">Primary Pill</span>
    <span class="badge rounded-pill bg-success">Success Pill</span>
    <span class="badge rounded-pill bg-danger">Danger Pill</span>
  </div>
</div>

### Forms

<div class="preview-block">
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
