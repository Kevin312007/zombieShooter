var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bulletsGroup,zombiesGroup;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  playerImage=loadAnimation("assets/player.png","assets/ezgif.com-gif-maker__4_-removebg-preview.png"
  ,"assets/ezgif.com-gif-maker__6_-removebg-preview.png","assets/ezgif.com-gif-maker__7_-removebg-preview.png")
  
  zombieImg=loadAnimation("assets/zombie copy.png","assets/zombie3.png")
  


  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  bulletsGroup=new Group()
  zombiesGroup=new Group()

  //adding the background image
  //bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
//bg.addImage(bgImg)
//bg.scale = 1.3
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addAnimation("p1",playerImage)
   player.scale = 0.7
   player.debug = true
   player.setCollider("rectangle",0,0,200,200)


}

function draw() {
  background(bgImg); 

 if(frameCount%60===0){
   zombies()
   
 }


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.mirrorX(-1)
  player.x = player.x+30
}

if(keyDown("LEFT_ARROW")||touches.length>0){
  player.mirrorX(1)
  player.x = player.x-30
}



//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  bullets()
 
}
  for(var i=0;i<zombieGroup.length;i++){
    
  }


drawSprites();

}

function zombies(){
  zombie=createSprite(windowWidth,random(windowHeight/8,windowHeight-100))
  zombie.addAnimation("creepy",zombieImg)
  zombie.velocityX=-3
  zombie.lifetime=windowWidth/3
  zombiesGroup.add(zombie)


}

function bullets(){
  bullet=createSprite(player.x+50,player.y-50,20,7)
  bullet.shapeColor="red"
  bullet.velocityX=4
  bullet.lifetime=windowWidth/4
  bulletsGroup.add(bullet)

}
