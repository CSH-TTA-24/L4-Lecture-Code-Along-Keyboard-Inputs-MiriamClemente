let xPos = 250;
let yPos = 250;

function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}

function draw() {
  background(0);
  fill('orange');
  
   rect(xPos, yPos, 50, 50)

  
  if (keyIsDown(UP_ARROW)){
    yPos -= 3;
  }
if (keyIsUp(DOWN_ARROW()){
  yPos +=3;
}

  
}

