'use strict';

const col = 800;
const row = 600;
const ite = 100;
const zom = 0.00375;

let cnv

function centerCanvas() {
  let x = (windowWidth - width) / 2
  let y = (windowHeight - height) / 2
  cnv.position(x, y)
}

function setup() {
  cnv = createCanvas(col, row)
  centerCanvas()
  background(255, 0, 200)
  let a, b, ac, bc, aa, bb
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      a = map(x, 0, col - 1, -col * zom / 3 * 2, col * zom / 3)
      b = map(y, 0, row - 1, -row * zom / 2, row * zom / 2)
      ac = a
      bc = b
      let n = 0
      while (n < ite && (abs(a + b) < 1600000)) {
        aa = a * a - b * b
        bb = 2 * a * b
        a = aa + ac
        b = bb + bc
        n++
      }
      set(x, y, color(map(n, 0, ite, 0, 255)))
    }
  }
  updatePixels()
  noLoop()
}

function windowResized() {
  centerCanvas()
}