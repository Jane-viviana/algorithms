var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
speed=random(40,80);
weight=random(1200,900);

 car = createSprite(50, 500, 50, 50);
 car.shapeColor="white";
 car.velocityX= speed;

 wall = createSprite(900,200,60,height/2);
 wall.shapeColor="white";
}

function draw() {
  background(0);  
  drawSprites();
}