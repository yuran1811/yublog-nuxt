---
title: Fireworks Visualization with Canvas - JavaScript
description: Visualize fireworks with pure Javascript from scratch
author: yuran1811
date: 2023-03-16T11:37:34.000Z
tags:
  - js
  - canvas
series:
  - graphics
image: /cover-imgs/javascript.jpg
seo:
  title: Fireworks Visualization with Canvas - JavaScript
  description: Visualize fireworks with pure Javascript from scratch
---

## Prerequisite

- Basic knowledge of JavaScript and HTML5 canvas.
- Familiarity with JavaScript classes and functions.
- A code editor (e.g., Visual Studio Code) and a web browser (e.g., Chrome, Firefox) for testing.

## Step 1 - HTML and JS files preparation

- The folder structure will look like this

```text
fireworks/
├── index.html
└── fireworks.js
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
<canvas id="root"></canvas>
<script src="./fireworks.js"></script>
```

#tab2
```js
const canvas = document.querySelector('#root');
canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const c = canvas.getContext('2d');
const colors = ['#ffa400', '#3D6EF7', '#ff6bcb', '#e74c3c', '#20E3B2'];
const numParticles = 30;
const particles = [];

class Particle {
  constructor(x, y, radius, color, velocity) {

  }

  draw() {

  }

  update() {

  }
}

const getRandColor = (colors) => colors[Math.floor(Math.random() * colors.length)];

const init = () => {

};

const generate = () => {

};

const animate = () => {

};

init();
animate();
generate();
```
::

## Step 2 - Event listeners

- We need to add event listeners to the canvas for mouse movements and clicks. The mouse position will be used to determine where the fireworks will be generated.


```js [fireworks.js] {3-6,10-13}
const canvas = ...

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const mouse = { ... };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;  
});
```

## Step 3 - Particle class implementation

- We need to implement the `Particle` class to represent each firework particle. This class will have properties for position, radius, color, and velocity. It will also have methods to draw and update the particle's position.

- The `draw` method will use the `canvas` context to draw the particle on the screen, and the `update` method will update the particle's position based on its velocity.

```js [fireworks.js] {3-8,12-16,20-23}
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.ttl = 200;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl--;
  }
}
```

## Step 4 - Particle generation

- We need to implement the `generate` function to create a new particle when the mouse is clicked. This function will create a new `Particle` object with random properties and add it to the `particles` array.

```js [fireworks.js] {2-12}
const generate = () => {
  setTimeout(generate, 200);
  for (let idx = 0; idx < numParticles; idx++) {
    const radians = (Math.PI * 2) / numParticles;
    const x = mouse.x;
    const y = mouse.y;
    const velocity = {
      x: Math.cos(radians * idx),
      y: Math.sin(radians * idx),
    };
    particles.push(new Particle(x, y, 5, getRandColor(colors), velocity));
  }
};
```

## Step 5 - Animation loop

- We need to implement the `animate` function to create an animation loop that will update and draw each particle on the canvas. This function will also clear the canvas before drawing the particles.

```js [fireworks.js] {2-10}
const animate = () => {
  requestAnimationFrame(animate);

  c.fillStyle = 'rgba(0, 0, 0, 0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((item, index) => {
    item.ttl === 0 && particles.splice(index, 1);
    item.update();
  });
};
```

## Step 6 - Initialization

- We need to implement the `init` function to initialize the canvas and set up the event listeners. This function will also call the `generate` and `animate` functions to start the animation.

```js [fireworks.js] {2-11}
const init = () => {
  for (let idx = 0; idx < numParticles; idx++) {
    const radians = (Math.PI * 2) / numParticles;
    const x = innerWidth / 2;
    const y = innerHeight / 2;
    const velocity = {
      x: Math.cos(radians * idx),
      y: Math.sin(radians * idx),
    };
    particles.push(new Particle(x, y, 5, getRandColor(colors), velocity));
  }
};
```

## Step 7 - Final code

- The final code will look like this:

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
<canvas id="root"></canvas>
<script src="./fireworks.js"></script>
```

#tab2
```js
const canvas = document.querySelector('#root');
canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;  
});

const c = canvas.getContext('2d');
const colors = ['#ffa400', '#3D6EF7', '#ff6bcb', '#e74c3c', '#20E3B2'];
const numParticles = 30;
const particles = [];

class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.ttl = 200;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl--;
  }
}

const getRandColor = (colors) => colors[Math.floor(Math.random() * colors.length)];

const init = () => {
  for (let idx = 0; idx < numParticles; idx++) {
    const radians = (Math.PI * 2) / numParticles;
    const x = innerWidth / 2;
    const y = innerHeight / 2;
    const velocity = {
      x: Math.cos(radians * idx),
      y: Math.sin(radians * idx),
    };
    particles.push(new Particle(x, y, 5, getRandColor(colors), velocity));
  }
};

const generate = () => {
  setTimeout(generate, 200);
  for (let idx = 0; idx < numParticles; idx++) {
    const radians = (Math.PI * 2) / numParticles;
    const x = mouse.x;
    const y = mouse.y;
    const velocity = {
      x: Math.cos(radians * idx),
      y: Math.sin(radians * idx),
    };
    particles.push(new Particle(x, y, 5, getRandColor(colors), velocity));
  }
};

const animate = () => {
  requestAnimationFrame(animate);

  c.fillStyle = 'rgba(0, 0, 0, 0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((item, index) => {
    item.ttl === 0 && particles.splice(index, 1);
    item.update();
  });
};

init();
animate();
generate();
```
::

## Demo

<iframe src="https://yuran1811.github.io/Canvas-Collection/src/Inspire/Fireworks/Ver2/" width="100%" height="480px" frameborder="0"></iframe>

## Conclusion

- In this tutorial, we learned how to create a fireworks visualization using pure JavaScript and the HTML5 canvas. 
- This project can be further enhanced by adding more features, such as different firework shapes, colors, and sounds. You can also experiment with different particle behaviors and animations to create unique effects. The possibilities are endless!
- I hope you enjoyed this tutorial and found it helpful. Happy coding!
