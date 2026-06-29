import { rm } from 'fs/promises';
import * as sass from 'sass';

async function build() {
  // Clean dist directory first
  await rm('./dist', { recursive: true, force: true });

  if (typeof Bun !== 'undefined') {
    const resultUnmin = await Bun.build({
      entrypoints: ['./src/js/index.js'],
      outdir: './dist',
      minify: false,
      naming: 'lumora.[ext]'
    });

    const resultMin = await Bun.build({
      entrypoints: ['./src/js/index.js'],
      outdir: './dist',
      minify: true,
      naming: 'lumora.min.[ext]'
    });

    if (!resultUnmin.success || !resultMin.success) {
      console.error("JS Build failed:");
      if (!resultUnmin.success) resultUnmin.logs.forEach(msg => console.error(msg));
      if (!resultMin.success) resultMin.logs.forEach(msg => console.error(msg));
    } else {
      console.log("✅ JS Build successful (minified & unminified)!");
      for (const output of [...resultUnmin.outputs, ...resultMin.outputs]) {
        console.log(`- ${output.path} (${(output.size / 1024).toFixed(2)} KB)`);
      }
    }
  } else {
    console.log("Bun not found, falling back to basic JS copy...");
    try {
      const { mkdir, cp } = await import('fs/promises');
      await mkdir('./dist', { recursive: true });
      await cp('./src/js/index.js', './dist/lumora.js');
      await cp('./src/js/index.js', './dist/lumora.min.js'); // simple copy for fallback
      console.log("✅ JS Build (copy) successful!");
    } catch (e) {
      console.error("JS fallback copy failed:", e);
    }
  }
    
  // Compile SCSS
  try {
    const sassResult = sass.compile('./src/scss/index.scss', { style: 'expanded' });
    await import('fs/promises').then(m => m.writeFile('./dist/lumora.css', sassResult.css));
    console.log(`- ./dist/lumora.css (${(sassResult.css.length / 1024).toFixed(2)} KB)`);

    const sassResultMin = sass.compile('./src/scss/index.scss', { style: 'compressed' });
    await import('fs/promises').then(m => m.writeFile('./dist/lumora.min.css', sassResultMin.css));
    console.log(`- ./dist/lumora.min.css (${(sassResultMin.css.length / 1024).toFixed(2)} KB)`);
  } catch (e) {
    console.error("SCSS compilation failed:", e);
    return;
  }
    // Generate scoped CSS for Docusaurus previews
    try {
      const cssPath = './dist/lumora.css';
      let cssContent = await import('fs/promises').then(m => m.readFile(cssPath, 'utf8'));
      
      // Extract @import rules (must be at top level outside @scope)
      let imports = '';
      cssContent = cssContent.replace(/@import\s+(?:url\([^)]+\)|"[^"]+"|'[^']+')([^;]*);/g, match => {
        imports += match + '\n';
        return '';
      });

      // Map global targets to the scoping container (.preview-block)
      cssContent = cssContent.replace(/:root/g, ':scope');
      cssContent = cssContent.replace(/\[data-theme="dark"\]/g, 'html[data-theme="dark"] :scope');
      cssContent = cssContent.replace(/\bbody\s*\{/g, ':scope{');

      const scopedCss = `${imports}\n@scope (.preview-block) {\n${cssContent}\n}`;
      await import('fs/promises').then(m => m.writeFile('./dist/lumora-scoped.css', scopedCss));
      console.log("- ./dist/lumora-scoped.css (scoped for docs)");
    } catch (e) {
      console.error("Failed to generate scoped CSS:", e);
    }
    
    // Copy for GitHub Pages
    try {
      const { rm, cp } = await import('fs/promises');
      await rm('./docs/static/dist', { recursive: true, force: true }).catch(() => {});
      await cp('./dist', './docs/static/dist', { recursive: true });
      console.log("✅ Copied dist to docs/static/dist for GitHub Pages");
    } catch(e) {
      console.error("Failed to copy dist to docs:", e);
    }
}

build().catch(console.error);
