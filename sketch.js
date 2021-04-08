var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

car= createsprite(50,200,50,50);
wall= createsprite(1200,200,60,100);

speed=random(55,90);
weight=random(400,1500);

car.velocityX=speed;

}

function draw() {
  background("black");
  
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/2250;

    if (deformation>180){
      car.shapecolor="red";
    }
    if (deformation<180 &&deformation>100){
      car.shapecolor="yellow";
    }
    if (deformation>100){
      car.shapecolor="green";
    }

  }
  drawSprites();
}