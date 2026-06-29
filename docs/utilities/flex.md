---
title: Flex
---

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.

### Direction

<div class="preview-block">
  <div class="d-flex flex-row mb-3 bg-light p-2">
    <div class="p-2 bg-primary text-white border border-dark">Flex item 1</div>
    <div class="p-2 bg-primary text-white border border-dark">Flex item 2</div>
    <div class="p-2 bg-primary text-white border border-dark">Flex item 3</div>
  </div>
  <div class="d-flex flex-row-reverse bg-light p-2">
    <div class="p-2 bg-primary text-white border border-dark">Flex item 1</div>
    <div class="p-2 bg-primary text-white border border-dark">Flex item 2</div>
    <div class="p-2 bg-primary text-white border border-dark">Flex item 3</div>
  </div>
</div>

```html
<div class="d-flex flex-row">...</div>
<div class="d-flex flex-row-reverse">...</div>
```

### Justify content

<div class="preview-block">
  <div class="d-flex justify-content-start bg-light mb-3">
    <div class="p-2 bg-primary text-white border">Item</div>
  </div>
  <div class="d-flex justify-content-center bg-light mb-3">
    <div class="p-2 bg-primary text-white border">Item</div>
  </div>
  <div class="d-flex justify-content-end bg-light mb-3">
    <div class="p-2 bg-primary text-white border">Item</div>
  </div>
  <div class="d-flex justify-content-between bg-light">
    <div class="p-2 bg-primary text-white border">Item 1</div>
    <div class="p-2 bg-primary text-white border">Item 2</div>
  </div>
</div>

```html
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-between">...</div>
```
