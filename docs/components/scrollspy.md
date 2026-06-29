---
title: Scrollspy
---

Automatically update Bootstrap navigation or list group components based on scroll position to indicate which link is currently active in the viewport.

<div class="preview-block">
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" style="height: 200px; overflow-y: scroll;" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted.</p>
        <div style="height: 100px;"></div>
        <h4 id="list-item-2">Item 2</h4>
        <p>This is some placeholder content for the scrollspy page.</p>
        <div style="height: 100px;"></div>
        <h4 id="list-item-3">Item 3</h4>
        <p>This is some placeholder content for the scrollspy page.</p>
        <div style="height: 150px;"></div>
      </div>
    </div>
  </div>
</div>
