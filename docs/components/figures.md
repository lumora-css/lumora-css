---
title: Figures
---

Documentation and examples for displaying related images and text with the figure component in Lumora.

### Usage
Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`.

Use the included `.figure`, `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements.

<div class="preview-block">
  <figure class="figure">
    <img src="https://via.placeholder.com/400x300" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
    <figcaption class="figure-caption">A caption for the above image.</figcaption>
  </figure>
</div>

```html
<figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```
