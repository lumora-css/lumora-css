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
      const { mkdir, readFile, writeFile } = await import('fs/promises');
      await mkdir('./dist', { recursive: true });
      
      const jsFiles = [
        'theme.js', 'sidebar.js', 'accordion.js', 'dropdown.js', 
        'modal.js', 'alert.js', 'tab.js', 'carousel.js', 'collapse.js', 
        'offcanvas.js', 'popover.js', 'scrollspy.js', 'toast.js', 'tooltip.js'
      ];
      
      let combinedJS = '';
      for (const file of jsFiles) {
        try {
          combinedJS += await readFile('./src/js/' + file, 'utf-8') + '\n\n';
        } catch (err) {
          console.warn(`Warning: Could not read ./src/js/${file}`);
        }
      }
      
      await writeFile('./dist/lumora.js', combinedJS);
      await writeFile('./dist/lumora.min.js', combinedJS); // simple copy for fallback
      console.log("✅ JS Build (fallback bundler) successful!");
    } catch (e) {
      console.error("JS fallback bundle failed:", e);
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
    // Generate scoped CSS for Docusaurus previews removed since it is not used in docs
    

}

build().catch(console.error);
