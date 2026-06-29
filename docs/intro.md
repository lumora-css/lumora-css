---
title: Getting Started
slug: /
---

# Build Premium Interfaces, Faster.

<div class="hero-section" style="padding: 1rem 0 3rem 0; margin-bottom: 3rem; border-bottom: 1px solid var(--border-color);">
  <p style="font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin: 0 0 2rem 0; line-height: 1.6;">Lumora is a lightweight, modern, and accessible UI framework built with pure CSS and Vanilla JS. Zero dependencies. Maximum performance.</p>
  
  <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <a href="/components/buttons" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--primary-gradient); color: white; border-radius: 8px; text-decoration: none; font-weight: 600; box-shadow: var(--shadow-md); transition: transform 0.2s;">Explore Components</a>
    <a href="https://github.com/lumora-css/lumora-css" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--glass-bg); border: 1px solid var(--border-color); color: var(--text-main); border-radius: 8px; text-decoration: none; font-weight: 600; transition: transform 0.2s;">View on GitHub</a>
  </div>
</div>

## 🚀 Quick Start

Get started with Lumora in seconds. Choose the installation method that works best for your workflow.

### Option 1: Via CDN (jsDelivr)
The easiest way to get started is by including Lumora directly in your HTML using our CDN. This requires no build step.

**CSS** (Place inside your `<head>` tag)
```html
<link href="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.css" rel="stylesheet">
```

**JavaScript** (Place just before the closing `</body>` tag)
```html
<script src="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.js"></script>
```

### Option 2: NPM / Yarn
For modern workflows, you can install Lumora via package managers and integrate it with your bundler (Webpack, Vite, Rollup, etc.).

```bash
npm install lumora-css
# or
yarn add lumora-css
# or
bun add lumora-css
```

Then, import the assets into your entry file:

```javascript
// Import styles
import 'lumora-css/dist/lumora.css';

// Import JS components (if needed)
import 'lumora-css/dist/lumora.js';
```

---

## ✨ Features

- **Zero Dependencies:** Built entirely with vanilla CSS (Sass) and JS. No jQuery, no React, just the web platform.
- **Lightweight:** Minimal footprint for blazing-fast load times.
- **Dark Mode Ready:** Native support for seamless theming and toggling out of the box.
- **Accessible:** Interactive components are built with ARIA and keyboard navigation in mind.
- **Premium Aesthetics:** Thoughtfully designed with glassmorphism, soft shadows, and vibrant gradients.

---

## 🆚 Why Lumora? (Comparison)

How does Lumora stack up against other popular CSS frameworks? Here is a quick comparison:

<div class="table-responsive">
  <table class="table table-bordered table-striped table-hover mb-4">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Lumora CSS</th>
        <th>Bootstrap 5</th>
        <th>Bulma</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Dependencies</strong></td>
        <td>None (Vanilla JS/CSS)</td>
        <td>None (Vanilla JS/CSS)</td>
        <td>None (CSS only)</td>
      </tr>
      <tr>
        <td><strong>Design Aesthetic</strong></td>
        <td>Premium, Modern, Glassmorphism</td>
        <td>Traditional, Corporate</td>
        <td>Clean, Flat</td>
      </tr>
      <tr>
        <td><strong>Learning Curve</strong></td>
        <td>Low (Bootstrap-compatible classes)</td>
        <td>Medium</td>
        <td>Low</td>
      </tr>
      <tr>
        <td><strong>File Size (Minified)</strong></td>
        <td>Ultra Lightweight</td>
        <td>Medium</td>
        <td>Medium</td>
      </tr>
      <tr>
        <td><strong>Dark Mode</strong></td>
        <td>Built-in & Seamless</td>
        <td>Requires configuration</td>
        <td>Third-party / Custom</td>
      </tr>
      <tr>
        <td><strong>Components</strong></td>
        <td>Focused & Essential</td>
        <td>Extensive</td>
        <td>Essential</td>
      </tr>
      <tr>
        <td><strong>Speed Comparison</strong></td>
        <td>~15ms (Ultra Fast)</td>
        <td>~45ms</td>
        <td>~35ms</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 🛠 Starter Template

Here is a quick starter template you can copy and paste to get up and running immediately.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumora Starter</title>
  
  <!-- Include Lumora CSS -->
  <link href="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.css" rel="stylesheet">
</head>
<body>

  <main class="container" style="padding: 3rem 1.5rem;">
    <div class="preview-block">
      <h1 class="text-primary">Hello Lumora!</h1>
      <p>You have successfully installed the framework. Let's start building something amazing.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </main>

  <!-- Include Lumora JS -->
  <script src="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.js"></script>
</body>
</html>
```
