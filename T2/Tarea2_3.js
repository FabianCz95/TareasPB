let x = 400
let y = 200


function setup() {
  createCanvas(400, 400);
  frameRate(90);
}

function draw() {
  background(255);
  
  x = x -1
  y = y - 0.5
  
  if (x < -400) {
    x = 400;
  }
  if (y < -200) {
    y = 200;
  }

  fill(100)
  rectMode(CENTER)
  rect(200,200,x,x);
  fill(255)
  circle(200,200,y)
}