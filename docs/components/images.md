---
title: Images
---

Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and adding lightweight styles to them—all via classes.

### Responsive images
Images in Lumora are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent element.

<div class="preview-block">
  <img src="https://via.placeholder.com/800x400" class="img-fluid" alt="Responsive image">
</div>

```html
<img src="..." class="img-fluid" alt="...">
```

### Image thumbnails
In addition to our border-radius utilities, you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<div class="preview-block">
  <img src="https://via.placeholder.com/200x200" class="img-thumbnail" alt="Thumbnail image">
</div>

```html
<img src="..." class="img-thumbnail" alt="...">
```
