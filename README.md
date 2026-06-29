# Lumora CSS

<p align="center">
  <strong>Build Premium Interfaces, Faster.</strong><br>
  A lightweight, modern, and accessible UI framework built with pure CSS and Vanilla JS. Zero dependencies. Maximum performance.
</p>

## ✨ Features

- **Zero Dependencies:** Built entirely with vanilla CSS (Sass) and JS. No jQuery, no React, just the web platform.
- **Lightweight & Fast:** Minimal footprint for blazing-fast load times (sub-15ms render speeds).
- **Dark Mode Ready:** Native support for seamless theming and toggling out of the box.
- **Accessible:** Interactive components are built with ARIA and keyboard navigation in mind.
- **Premium Aesthetics:** Thoughtfully designed with glassmorphism, soft shadows, and vibrant gradients.

## 🚀 Quick Start

### Via CDN (jsDelivr)

Include Lumora directly in your HTML using our CDN. This requires no build step.

**CSS** (Place inside your `<head>` tag)
```html
<link href="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.css" rel="stylesheet">
```

**JavaScript** (Place just before the closing `</body>` tag)
```html
<script src="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.js"></script>
```

### NPM / Yarn / Bun

For modern workflows, you can install Lumora via package managers:

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

## 🛠 Starter Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumora Starter</title>
  <link href="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.css" rel="stylesheet">
</head>
<body>
  <main class="container" style="padding: 3rem 1.5rem;">
    <h1 class="text-primary">Hello Lumora!</h1>
    <p>You have successfully installed the framework.</p>
    <button class="btn btn-primary">Get Started</button>
  </main>
  <script src="https://cdn.jsdelivr.net/npm/lumora-css@latest/dist/lumora.min.js"></script>
</body>
</html>
```

## 📄 Documentation

For full documentation, including component examples and utility classes, please visit our documentation site or check the `/docs` folder.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/lumora-css/lumora-css/issues).

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
