---
title: Fireworks Visualization with Canvas - JavaScript
description: Visualize fireworks with pure Javascript from scratch
author: yuran1811
date: 2023-03-16T16:37:34.000Z
tags:
  - js
  - canvas
image: /cover-imgs/javascript.jpg
seo:
  title: Fireworks Visualization with Canvas - JavaScript
  description: Visualize fireworks with pure Javascript from scratch
---

## Prerequisite

- HTML/CSS: not required
- Javascript ES6 (class), Array methods (map, ...)

## Step 1 - HTML base

- The folder structure will look like this

```text
fireworks
├── index.html
├── fireworks.js
```

::code-tab
---
tabs:
  - index.html
  - fireworks.js
---
#tab1
```html
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
<canvas id="fireworks"></canvas>
<script src="index.js"></script>
```

#tab2
```js
const canvas = document.querySelector('#fireworks');
const ctx = canvas.getContext('2d');
```
::

## Step 2 - Particle Class

- In `fireworks.js`

```diff
const canvas = document.querySelector('#fireworks');
const ctx = canvas.getContext('2d');

+  class Particle {
+    constructor(x, y, radius, color, velocity) {
+      this.x = x;
+      this.y = y;
+      this.radius = radius;
+      this.color = color;
+      this.velocity = velocity;
+  }
}
```
