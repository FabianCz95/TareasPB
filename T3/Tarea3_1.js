var azar;

function setup() {
  createCanvas(200, 200);
  //azar = int(random(1,7))
  //azar = 3
}

function draw() {
  background(220);

  if (azar == 1){
    fill(255);
    rect(0,0,200,200);
    fill(0);
    circle(100,100,40);
  } else if (azar == 2){
    fill(255);
    rect(0,0,200,200);
    fill(0);
    circle(50,50,40);
    circle(150,150,40);
  } else if (azar == 3){
    fill(255);
    rect(0,0,200,200);
    fill(0);
    circle(50,50,40);
    circle(100,100,40);
    circle(150,150,40);
  } else if (azar == 4){
    fill(255);
    rect(0,0,200,200);
    fill(0)
    circle(50,50,40);
    circle(150,50,40);
    circle(50,150,40);
    circle(150,150,40);
  } else if (azar == 5){
    fill(255);
    rect(0,0,200,200);
    fill(0)
    circle(50,50,40);
    circle(150,50,40);
    circle(100,100,40);
    circle(50,150,40);
    circle(150,150,40);
  } else if (azar == 6){
    fill(255);
    rect(0,0,200,200);
    fill(0)
    circle(50,50,40);
    circle(150,50,40);
    circle(50,100,40);
    circle(50,150,40);
    circle(150,100,40);
    circle(150,150,40);
  }
}

function mousePressed(){
  azar = int(random(1,7))
  console.log(azar)
}

