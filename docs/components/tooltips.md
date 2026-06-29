---
title: Tooltips
---

Custom, CSS-only tooltips for quick additional information.

### Standard Tooltip
Add the `.tooltip-trigger` class to any element, and define the tooltip content using the `data-tooltip="content"` attribute. The tooltip appears automatically on hover, centered above the element.

<div class="preview-block d-flex gap-4 p-5 align-items-center justify-content-center">
  <button class="btn btn-primary tooltip-trigger" data-tooltip="This is a top tooltip!">Hover Me</button>
  <button class="btn btn-outline-secondary tooltip-trigger" data-tooltip="Additional info here!">Hover Me Too</button>
</div>

```html
<!-- Tooltips rely on the .tooltip-trigger class and data-tooltip attribute -->
<button class="btn btn-primary tooltip-trigger" data-tooltip="This is a top tooltip!">
  Hover Me
</button>

<button class="btn btn-outline-secondary tooltip-trigger" data-tooltip="Additional info here!">
  Hover Me Too
</button>
```
