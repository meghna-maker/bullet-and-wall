
var bullet,Wall,rect1,Speed,Weight,thickness;

function setup() {
  createCanvas(1600,400);

  Speed = random(223,321);
  Weight = random(30,52);
  thickness = random(22,83);

  rect1 = createSprite(300,100,300,80);
  rect1.shapeColor = "black";

  bullet = createSprite(170,100,15,10);
  bullet.shapeColor = "white";

  Wall = createSprite(1200,200,thickness,height/2);
  Wall.shapeColor = "grey";

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
 
  if(Wall.x-bullet.x<((bullet.width+wall.width)/2)){
    bullet.velocityX =0;
    var damage = (0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thicknessOfWall*thicknessOfWall*thicknessOfWall);
    console.log(bullet.velocityX);
    bullet.collide(wall);
    if(damage>=3.68){
      wall.shapeColor = "green";
    }if(damage>10){
      wall.shapeColor = "yellow";
    }if(damage>12){
      wall.shapeColor = "red";
    }
 }
  
  
  drawSprites();
}