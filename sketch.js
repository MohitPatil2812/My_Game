var backgroundImage, backgroundSprite
var runner, runnerImage, runnerdead, runnerdeadsprite
var invisibleground
var obstaclesimage, obstacles, obstaclesGroup
var rip, ripimage



function preload(){
  backgroundImage=loadImage("back.jpg")
  runnerImage = loadImage("character.gif")
  runnerdead = loadImage("runnerdied.gif")
  obstaclesimage = loadImage("obstacles.gif")
  ripimage = loadImage("rip.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
 BackgroundSprite = createSprite(200,200,10,10)
 BackgroundSprite.addImage(backgroundImage)
  
  runner = createSprite(200,200,10,10)
  runner.addImage(runnerImage)
  runner.scale=0.4
  runner.y=350
  runner.x=100
  
  invisibleground = createSprite(250,385,500,10)
  invisibleground.visible=false
  
  
  
  runnerdeadsprite = createSprite(runner.x,runner.y,10,10)
  runnerdeadsprite.addImage(runnerdead)
  
  rip = createSprite(runner.x,340,10,10)
    rip.addImage(ripimage)
  
  rip.scale = 0.1
  rip.visible=false
  
  obstaclesGroup = new Group();
}

function draw() {
  background("white")
  
  BackgroundSprite.velocityX=-2
  runner.collide(invisibleground)
  if(BackgroundSprite.x==200){
    BackgroundSprite.x=400
  }
  
  
 if(keyDown("right")){
   runner.x=runner.x+5
   rip.velocityX=0
   rip.x=rip.x
 }
 if(keyDown("left")){
   runner.x=runner.x-5
   rip.velocityX=0
   rip.x=rip.x
 }

 if(runner.x>490){
   runner.x=10
   runner.velocityX=0
 }
 if(runner.x<10){
   runner.x=490
   runner.velocityX=0
 }
 obstacles1();
if(obstaclesGroup.isTouching(runner)){
   runner.destroy();
  rip.x=runner.x
  rip.visible=true
  rip.velocityX=0
 
 }
if(rip.visible==true){
  obstaclesGroup.destroyEach();
  BackgroundSprite.velocityX=0
}
  
  
   rip.x=rip.x
 drawSprites();
}

function obstacles1(){
   if(frameCount%250==0){
   obstacles = createSprite(500,0,10,10)
   obstacles.addImage(obstaclesimage)
   obstacles.collide(runner)
   obstacles.scale=0.5
   obstacles.debug = false
  obstacles.setCollider("rectangle",0,0,200,200);
   obstacles.velocityX=Math.round(random(-1,-10))
   obstacles.velocityY=Math.round(random(1,10))
   if(obstacles.x<0||obstacles.y>400){
   obstacles.destroy();
     
 }
  
  
   obstaclesGroup.add(obstacles) 
 
 }
  
}