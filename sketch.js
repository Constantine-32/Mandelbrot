'use strict';

const ite = 100
const zom = 0.00375

function setup() {
  createCenteredCanvas()
  noLoop()
}

function windowResized() {
  createCenteredCanvas()
  draw()
}

function createCenteredCanvas() {
  // const size =
  //   (windowWidth <= 540 || windowHeight <= 630) +
  //   (windowWidth <= 960 || windowHeight <= 800)
  // const w = [800, 600, 400][size]
  // const h = [600, 450, 300][size]
  createCanvas(800, 600).position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  )
}

function draw() {
  background(255, 0, 200)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let a = map(x, 0, width - 1, -width * zom / 3 * 2, width * zom / 3)
      let b = map(y, 0, height - 1, -height * zom / 2, height * zom / 2)
      let ac = a
      let bc = b
      let n = 0
      while (n < ite && (abs(a + b) < 1600000)) {
        let aa = a * a - b * b
        let bb = 2 * a * b
        a = aa + ac
        b = bb + bc
        n++
      }
      set(x, y, color(map(n, 0, ite, 0, 255)))
    }
  }
  updatePixels()
}
