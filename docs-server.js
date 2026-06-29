import { serve } from "bun";
import { marked } from "marked";
import { readFileSync, statSync } from "fs";
import { join, extname } from "path";

const DOCS_DIR = join(import.meta.dir, "docs");
const DIST_DIR = join(import.meta.dir, "dist");

import { readdirSync } from "fs";

// Helper to generate sidebar links from a directory
function generateLinks(dirName, currentPath) {
  try {
    const files = readdirSync(join(DOCS_DIR, dirName)).filter(f => f.endsWith('.md'));
    return files.map(file => {
      const name = file.replace('.md', '');
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      const linkPath = `/${dirName}/${name}`;
      const isActive = currentPath === linkPath ? ' active' : '';
      return `<a href="${linkPath}" class="sidebar-link${isActive}">${capitalized}</a>`;
    }).join('\n    ');
  } catch (e) {
    return '';
  }
}

// Simple layout template styled with Lumora CSS
function createHTML(title, content, currentPath) {
  const foundationLinks = generateLinks("foundation", currentPath);
  const componentsLinks = generateLinks("components", currentPath);
  const formsLinks = generateLinks("forms", currentPath);
  const helpersLinks = generateLinks("helpers", currentPath);
  const utilitiesLinks = generateLinks("utilities", currentPath);

  const isFoundation = currentPath.startsWith('/foundation/');
  const isComponents = currentPath.startsWith('/components/');
  const isForms = currentPath.startsWith('/forms/');
  const isHelpers = currentPath.startsWith('/helpers/');
  const isUtilities = currentPath.startsWith('/utilities/');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Lumora CSS Docs</title>
  <link rel="stylesheet" href="/dist/lumora.css" id="theme-stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" rel="stylesheet" />
  <style>
    /* Premium UI Variables */
    :root {
      --bg-color: #f8fafc;
      --bg-surface: #ffffff;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
      --primary-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      --primary-color: #6366f1;
      --glass-bg: rgba(255, 255, 255, 0.7);
      --glass-border: rgba(255, 255, 255, 0.2);
      --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    }
    
    html[data-theme="dark"] {
      --bg-color: #0b0f19;
      --bg-surface: #111827;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #1e293b;
      --glass-bg: rgba(11, 15, 25, 0.7);
      --glass-border: rgba(255, 255, 255, 0.05);
      --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
      --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
    }

    body {
      display: flex;
      min-height: 100vh;
      margin: 0;
      background-color: var(--bg-color);
      color: var(--text-main);
      font-family: 'Outfit', system-ui, sans-serif;
      transition: background-color 0.4s ease, color 0.4s ease;
      -webkit-font-smoothing: antialiased;
    }
    
    /* Scrollbar */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

    /* Layout */
    .sidebar {
      width: 280px;
      background: var(--glass-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-right: 1px solid var(--border-color);
      padding: 2rem 1.5rem;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
      transition: all 0.3s ease;
      z-index: 20;
    }
    
    .layout-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      max-width: 100%;
    }
    
    .header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 1.25rem 4rem;
      background: var(--glass-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
      gap: 1.5rem;
      position: sticky;
      top: 0;
      z-index: 10;
      transition: all 0.3s ease;
    }
    
    .header-link {
      color: var(--text-main);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 500;
      opacity: 0.7;
      transition: all 0.2s ease;
    }
    .header-link:hover { opacity: 1; transform: translateY(-1px); }
    
    /* Main Content */
    .main-content {
      padding: 4rem 5rem;
      max-width: 100%;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      max-width: 1100px; /* Readability wrapper */
    }
    
    /* Typography */
    .main-content > h1 { 
      font-size: 3rem; 
      font-weight: 800; 
      margin-top: 0;
      margin-bottom: 1.5rem; 
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }
    .main-content > h2 { 
      font-size: 2rem; 
      font-weight: 700; 
      margin-top: 3rem; 
      margin-bottom: 1.25rem; 
      color: var(--text-main);
      letter-spacing: -0.01em;
    }
    .main-content > h3 { 
      font-size: 1.4rem; 
      font-weight: 600; 
      margin-top: 2rem; 
      margin-bottom: 1rem; 
      color: var(--text-main); 
    }
    .main-content > p, .main-content > ul, .main-content > ol { 
      line-height: 1.8; 
      margin-bottom: 1.5rem; 
      color: var(--text-muted); 
      font-size: 1.05rem;
    }
    
    /* Code styling */
    .main-content > pre {
      background: #0f111a;
      padding: 1.5rem;
      border-radius: 12px;
      overflow-x: auto;
      margin-bottom: 2rem;
      border: 1px solid rgba(255,255,255,0.05);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
    }
    .main-content code { 
      font-family: 'Fira Code', monospace; 
      font-size: 0.9rem;
    }
    p code, li code {
      background: var(--border-color);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      color: var(--primary-color);
      font-size: 0.9em;
    }
    
    /* Preview block */
    .preview-block {
      padding: 2.5rem;
      border: 1px solid var(--border-color);
      border-radius: 16px;
      margin: 2rem 0;
      background: var(--bg-surface);
      box-shadow: var(--shadow-md);
      transition: all 0.3s ease;
      position: relative;
      overflow: visible;
      z-index: 10;
    }
    .preview-block:hover, .preview-block:focus-within {
      z-index: 99;
    }
    .preview-block::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 4px;
      background: var(--primary-gradient);
      opacity: 0.5;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
    
    /* Sidebar Navigation */
    .sidebar-brand {
      font-size: 1.75rem; 
      font-weight: 800; 
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 2rem; 
      display: flex; 
      align-items: center; 
      gap: 0.5rem;
      letter-spacing: -0.02em;
    }
    
    .sidebar-title {
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-main);
      padding: 0.5rem 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
    }
    
    .sidebar-title::-webkit-details-marker {
      display: none;
    }
    
    details {
      margin-bottom: 1rem;
    }
    
    details > summary::after {
      content: '▼';
      font-size: 0.7em;
      color: var(--text-muted);
      transition: transform 0.2s;
    }
    details[open] > summary::after {
      transform: rotate(180deg);
    }
    
    .sidebar-link {
      display: block;
      padding: 0.5rem 1rem;
      color: var(--text-muted);
      text-decoration: none;
      border-radius: 8px;
      margin-bottom: 0.15rem;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      border-left: 3px solid transparent;
    }
    .sidebar-link:hover {
      background-color: rgba(99, 102, 241, 0.05);
      color: var(--text-main);
    }
    .sidebar-link.active {
      background-color: rgba(99, 102, 241, 0.1);
      color: var(--primary-color);
      border-left-color: var(--primary-color);
      font-weight: 600;
    }
    
    /* Theme Toggle */
    .theme-toggle {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      padding: 0.5rem;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: var(--shadow-sm);
    }
    .theme-toggle:hover {
      transform: rotate(15deg) scale(1.1);
      border-color: var(--primary-color);
      color: var(--primary-color);
    }
  </style>
</head>
<body>
  <aside class="sidebar">
    <div class="sidebar-brand">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#brand-grad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <defs>
          <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#6366f1" />
            <stop offset="100%" stop-color="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      Lumora
    </div>
    
    <details open>
      <summary class="sidebar-title">Getting Started</summary>
      <a href="/" class="sidebar-link${currentPath === '/' ? ' active' : ''}">Introduction</a>
      <a href="/lumora-vs-bootstrap" class="sidebar-link${currentPath === '/lumora-vs-bootstrap' ? ' active' : ''}">Lumora vs Bootstrap</a>
    </details>
    
    <details ${isFoundation ? 'open' : ''}>
      <summary class="sidebar-title">Foundation</summary>
      ${foundationLinks}
    </details>
    
    <details ${isComponents ? 'open' : ''}>
      <summary class="sidebar-title">Components</summary>
      ${componentsLinks}
    </details>
    
    <details ${isForms ? 'open' : ''}>
      <summary class="sidebar-title">Forms</summary>
      ${formsLinks}
    </details>
    
    <details ${isHelpers ? 'open' : ''}>
      <summary class="sidebar-title">Helpers</summary>
      ${helpersLinks}
    </details>
    
    <details ${isUtilities ? 'open' : ''}>
      <summary class="sidebar-title">Utilities</summary>
      ${utilitiesLinks}
    </details>
  </aside>
  
  <div class="layout-right">
    <header class="header">
      <a href="https://github.com/lumora-css/lumora-css" target="_blank" class="header-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        GitHub
      </a>
      <button class="theme-toggle" onclick="toggleTheme()" title="Toggle Dark Mode">
        <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      </button>
    </header>
    
    <main class="main-content container-fluid">
      ${content}
    </main>
  </div>
  
  <script>
    // Theme toggling logic
    const html = document.documentElement;
    const currentTheme = localStorage.getItem("theme") || "dark"; // Default to dark for premium feel
    html.setAttribute("data-theme", currentTheme);
    updateIcon(currentTheme);
    
    function toggleTheme() {
      const isDark = html.getAttribute("data-theme") === "dark";
      const newTheme = isDark ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateIcon(newTheme);
    }
    
    function updateIcon(theme) {
      const btn = document.querySelector('.theme-toggle');
      if (theme === 'dark') {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      } else {
        btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
      }
    }
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="/dist/lumora.js"></script>
</body>
</html>
  `;
}

serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    // Serve CSS and JS assets
    if (url.pathname.startsWith("/dist/")) {
      const filePath = join(import.meta.dir, url.pathname);
      try {
        const content = readFileSync(filePath);
        const headers = new Headers();
        if (filePath.endsWith(".css")) headers.set("Content-Type", "text/css");
        if (filePath.endsWith(".js")) headers.set("Content-Type", "application/javascript");
        return new Response(content, { headers });
      } catch (e) {
        return new Response("Not found", { status: 404 });
      }
    }

    // Determine which Markdown file to render
    let targetPath = url.pathname === "/" ? "intro.md" : `${url.pathname}.md`;
    const fullPath = join(DOCS_DIR, targetPath);

    try {
      let markdown = readFileSync(fullPath, "utf-8");

      // Strip frontmatter if exists (simple hack)
      if (markdown.startsWith("---")) {
        markdown = markdown.split("---").slice(2).join("---").trim();
      }

      const htmlContent = marked.parse(markdown);

      const titleMatch = markdown.match(/^#\s+(.*)/m);
      const title = titleMatch ? titleMatch[1] : "Documentation";

      const finalHTML = createHTML(title, htmlContent, url.pathname);
      return new Response(finalHTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });

    } catch (e) {
      console.error(e);
      return new Response("Page not found. Ensure the markdown file exists at " + targetPath, { status: 404 });
    }
  },
});

