# Container

The Container component is the most basic layout element in Lumora CSS. It is required when using the grid system and helps to center and pad your site's content.

## Responsive Container

The `.container` class provides a responsive fixed-width container. Its `max-width` changes at each breakpoint.

```html
<div class="container">
  <!-- Content here -->
</div>
```

## Fluid Container

Use `.container-fluid` for a full-width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  <!-- Content here -->
</div>
```

<div class="preview-block">
  <div class="container" style="background-color: var(--color-bg-alt); padding-top: 1rem; padding-bottom: 1rem; border: 1px dashed var(--color-border); text-align: center;">
    This is inside a .container
  </div>
  <br>
  <div class="container-fluid" style="background-color: var(--color-bg-alt); padding-top: 1rem; padding-bottom: 1rem; border: 1px dashed var(--color-border); text-align: center;">
    This is inside a .container-fluid
  </div>
</div>

*Check this container.md for usage code.*
