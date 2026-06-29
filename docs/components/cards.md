---
title: Cards
---

Cards are flexible containers for content, complete with headers, footers, and various styles.

### Standard Card
Use the `.card` wrapper. Inside, you can use `.card-image`, `.card-header`, `.card-body`, and `.card-footer` to structure your content.

<div class="preview-block">
  <div class="card" style="max-width: 400px">
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Tech Setup" class="card-image" />
    <div class="card-body">
      <h3 class="card-title">Standard Card</h3>
      <p class="card-text" style="margin-top: 1rem">This is a versatile standard card design with shadow and hover effects.</p>
    </div>
    <div class="card-footer d-flex justify-content-end gap-2">
      <button class="btn btn-outline-secondary">Cancel</button>
      <button class="btn btn-primary">Read More</button>
    </div>
  </div>
</div>

```html
<div class="card">
  <img src="..." alt="..." class="card-image" />
  <div class="card-body">
    <h3 class="card-title">Standard Card</h3>
    <p class="card-text">This is a versatile standard card design...</p>
  </div>
  <div class="card-footer d-flex justify-content-end gap-2">
    <button class="btn btn-outline-secondary">Cancel</button>
    <button class="btn btn-primary">Read More</button>
  </div>
</div>
```

### Background Card
You can mix layout colors like `.bg-primary` with cards for full-colored blocks.

<div class="preview-block">
  <div class="card bg-primary" style="max-width: 400px; border: none">
    <div class="card-header" style="border-bottom-color: rgba(255">
      <h3 class="card-title text-white">Primary Background Card</h3>
    </div>
    <div class="card-body">
      <p class="card-text text-white">You can use background utilities directly on cards!</p>
    </div>
    <div class="card-footer" style="background: rgba(0; border-top: none">
      <button class="btn btn-light w-100">Action</button>
    </div>
  </div>
</div>

```html
<div class="card bg-primary" style="border: none;">
  <div class="card-header" style="border-bottom-color: rgba(255,255,255,0.2);">
    <h3 class="card-title text-white">Primary Background Card</h3>
  </div>
  <div class="card-body">
    <p class="card-text text-white">You can use background utilities directly on cards!</p>
  </div>
  <div class="card-footer" style="background: rgba(0,0,0,0.1); border-top: none;">
    <button class="btn btn-light w-100">Action</button>
  </div>
</div>
```
