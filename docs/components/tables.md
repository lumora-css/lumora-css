---
title: Tables
---

Responsive tables with light and dark mode support.

### Standard Table
Add `.table` for the base styling. Enhance it with `.table-striped`, `.table-hover`, and `.table-bordered`. Always wrap the table in `.table-responsive` so it scrolls horizontally on smaller devices.

<div class="preview-block">
  <div class="table-responsive">
    <table class="table table-striped table-hover table-bordered mb-0">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><span class="badge badge-success">Active</span></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td><span class="badge badge-warning">Pending</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>Bird</td>
          <td><span class="badge badge-danger">Banned</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```html
<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td><span class="badge badge-success">Active</span></td>
      </tr>
  </table>
</div>
```

### Contextual Tables
Use contextual classes to color tables, table rows or individual cells. Available classes include `.table-primary`, `.table-success`, `.table-danger`, etc.

<div class="preview-block">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Class</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-primary">
        <th scope="row">Primary</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-success">
        <th scope="row">Success</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-danger">
        <th scope="row">Danger</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr class="table-warning">
        <th scope="row">Warning</th>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<!-- On rows -->
<tr class="table-primary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
```

### Dark Tables
Use `.table-dark` to invert the colors of the table for dark backgrounds.

<div class="preview-block">
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-dark table-striped">
  ...
</table>
```

### Small Tables
Add `.table-sm` to make tables more compact by cutting cell padding in half.

<div class="preview-block">
  <table class="table table-sm">
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-sm">
  ...
</table>
```
