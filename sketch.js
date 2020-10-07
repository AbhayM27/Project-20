var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  
  // weight and speed
  speed = random(55,90);
  weight = random(400,1500);

  // car sprite
  car = createSprite(50, 200, 50, 50); 
  car.velocityX = speed;

  //wall sprite
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = 80,80,80;
  
  
}

function draw() {
  background(255,255,255);  
  
  // to detect collision 
  if(wall.x-car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
  
  // to calculate damage
  var deformation = 0.5 * weight* speed * speed/22509
  
  // to assign colors to the amount of damage
  if(deformation > 180) {
    car.shapeColor = color(255,0,0);
  }

  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }
  
  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }
  
  }
  
  
  
  
  
  drawSprites();
}