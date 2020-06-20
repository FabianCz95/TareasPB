let xPos = 60;
let yPos = 340;


function setup() {
  createCanvas(400, 400);
  // setup() runs once
  frameRate(50);
}
function draw() {
  background(204);
  rectMode(CENTER)
  fill(255)
  rect(200,200,380,380)
  // draw() loops forever, until stopped
  //circle1
  xPos = xPos + 1;
  yPos = yPos - 1;

  if (xPos > 340) {
    xPos = 60;
  } else {
    xPos = xPos + 1;
  }
  if (yPos < 60) {
    yPos = 340;
  } else {
    yPos = yPos - 1;
  }
  fill(204)
  circle(xPos, xPos, 100);
  circle(yPos, yPos, 100);
  circle(xPos, yPos, 100);
  circle(yPos, xPos, 100);
}