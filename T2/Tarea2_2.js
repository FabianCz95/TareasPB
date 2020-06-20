let c = 0
let d = 400

function setup() {
  createCanvas(400, 400);
  frameRate(50);
}

function draw() {
  background(204);
  strokeWeight(2)
  
  c = c + 1
  d = d - 1
  
  if (c > 400) {
    c = 0;
  }
  
  
  if (d < 0) {
    d = 400;
  }

  line(200, 200, 200, c);
  line(200, 200, d, d);
  line(200, 200, c,d);

}