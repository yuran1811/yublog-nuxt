---
title: Fireworks Visualization with Canvas - JavaScript
description: Visualize fireworks with pure Javascript from scratch
author: yuran1811
date: 2024-02-05T16:37:34Z
tags:
  - js
  - canvas
image: '/cover-imgs/javascript.jpg'
---

## Prerequisite

- HTML/CSS: not required
- Javascrip:t ES6 (class), Array methods (map, ...)

## Step 1 - HTML base

- The folder structure will look like this

```
fireworks
├── index.html
├── fireworks.js
```

- `index.html`

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

- `fireworks.js`

```js
const canvas = document.querySelector('#fireworks');
const ctx = canvas.getContext('2d');
```

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
