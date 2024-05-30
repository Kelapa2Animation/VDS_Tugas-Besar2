let P = [];
let t = [];
let r;
let K;
let dt = 0.1;
let tMax = 100;

let sketch;

function setup() {
  sketch = new Sketch(document.getElementById('chart-container'));

  solve();
}

function draw() {
  sketch.draw();
}

function solve() {
  let P0 = parseFloat(document.getElementById('initial-population').value);
  r = parseFloat(document.getElementById('growth-rate').value);
  K = parseFloat(document.getElementById('carrying-capacity').value);

  P[0] = P0;
  t[0] = 0;
  let iterNum = int(tMax / dt);

  for (i = 0; i < iterNum; i++) {
    P[i + 1] = P[i] + dt * r * P[i] * (1 - P[i] / K);
    t[i + 1] = (i + 1) * dt;
  }

  sketch.setData(t, P);
}