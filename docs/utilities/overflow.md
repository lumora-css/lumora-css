---
title: Overflow
---

Use these shorthand utilities for quickly configuring how content overflows an element.

<div class="preview-block">
  <div class="d-flex justify-content-around">
    <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
      This is an example of using <code>.overflow-auto</code> on an element with set width and height dimensions. By design, this content will vertically scroll.
    </div>
    <div class="overflow-hidden p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
      This is an example of using <code>.overflow-hidden</code> on an element with set width and height dimensions.
    </div>
  </div>
</div>

```html
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
<div class="overflow-visible">...</div>
<div class="overflow-scroll">...</div>
```
