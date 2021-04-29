var redhat, enemy;
var redhatimg ,enemyimg;
var background, backgroundimg;


function preload(){
  backgroundimg=loadImage("backg.png");
redhatimg = loadAnimation("run1.png","run2.png");
enemyimg  = loadAnimation("attack(1).png","attack(2).png","attack(3).png");

}


function setup() {
  createCanvas(400, 200);

  background=createSprite(0,0,400,400);
  background.addImage(backgroundimg);
  background.scale=2.5;

  redhat = createSprite(10,150,10,10);
  redhat.addAnimation("jump",redhatimg);
  redhat.scale = 0.2;
  enemy  = createSprite(320,150,20,20);
  enemy.addAnimation("attack",enemyimg);
  enemy.scale = 0.2;
  
  
}

function draw() {
  background.velocityX = -3 

  if (background.x < 0){
    background.x = background.width/2;
  }
  
  drawSprites();
  
}