---
title: Interactions
---

Utility classes that change how users interact with contents of a website.

### Pointer events

<div class="preview-block">
  <p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
  <p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
</div>

```html
<p><a href="#" class="pe-none" tabindex="-1" aria-disabled="true">This link</a> can not be clicked.</p>
<p><a href="#" class="pe-auto">This link</a> can be clicked (this is default behavior).</p>
```

### Text selection

<div class="preview-block">
  <p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
  <p class="user-select-auto">This paragraph has default select behavior.</p>
  <p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
</div>

```html
<p class="user-select-all">This paragraph will be entirely selected when clicked by the user.</p>
<p class="user-select-auto">This paragraph has default select behavior.</p>
<p class="user-select-none">This paragraph will not be selectable when clicked by the user.</p>
```
