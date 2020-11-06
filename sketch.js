var PLAY=1;
var END=0;
var ghost;
var climber,climber_image;
var tower,tower_image;
var door,door_image;
var ghost_jumping;
var ghost_standing;
var climber_image;
var spooky;
var climberGroup;
var doorGroup;
var invisibleGroup;
var gameState=PLAY;

function preload(){
  ghost_standing=loadImage("ghost-standing.png");
  ghost_jumping=loadImage("ghost-jumping.png");
  tower_image=loadImage("tower.png");
  door_image=loadImage("door.png");
  climber_image=loadImage("climber.png");
  spooky=loadSound("spooky.wav");
}
function setup(){
  createCanvas(600,600);
  spooky.loop();
  tower=createSprite(300,300);
  tower.addImage(tower_image);
  tower.velocityY=2;
  ghost=createSprite(300,300);
  ghost.addImage(ghost_standing);
  ghost.scale=0.4;
  climberGroup=new Group();
  doorGroup=new Group();
  invisibleGroup=new Group();
  

}
function draw(){
  if(gameState===PLAY){
if(keyDown("space")){
    ghost.velocityY=-6
  }
  if(keyDown("a")){
    ghost.x=ghost.x-4
  }
  if(keyDown("d")){
    ghost.x=ghost.x+4
  }
  if(tower.y>300){
    tower.y=200
    
  }
    ghost.velocityY=ghost.velocityY+0.5
  spawndoor();
    if(invisibleGroup.isTouching(ghost)){
      gameState=END;
      ghost.destroy();
  }
    drawSprites();
  }
  else
    if(gameState===END){
  background(0);
     textSize(30)
    text("gameover",300,300);  
      
      
    
  }
  
  
  
  
  
}
function spawndoor(){
  if (frameCount % 300 === 0) {
    door=createSprite(200,-50)
    door.addImage(door_image)
    door.velocityY=4;
    climber=createSprite(200,10);
    climber.addImage(climber_image);
    climber.velocityY=4
    invisiblebox=createSprite(200,20,100,20)
    invisiblebox.visible=false;
    invisiblebox.velocityY=4;
    door.x=Math.round(random(120,400));
     climber.x=door.x;
    invisiblebox.x=door.x;
    climberGroup.add(climber);
    doorGroup.add(door);
   invisibleGroup.add(invisiblebox);
    door.lifetime=610;
    climber.lifetime=610;
    invisiblebox.lifetime=610;
    
  }
}
