var bg, bgImage;
var frogPlayer, frogImage, frogHop;
var invisGround;
var bee, beeImage, beeGroup;
var flyGroup;
var fly, flyImage;
var bird1, bird1Image;
var bird2,bird2Image;

function preload(){
  bgImage = loadImage("bg2.JPG");
  frogImage = loadAnimation("frog/frog1.png");
  frogHop = loadAnimation("frog/hop1.png","frog/hop2.png","frog/hop3.png","frog/hop4.png","frog/hop5.png");

  flyImage = loadAnimation("bugs/fly1.png","bugs/fly2.png");

  beeImage = loadAnimation("bugs/bee1.png","bugs/bee2.png");

  bird1Image = loadAnimation("birds/bird1.png","birds/bird2.png")

  bird2Image = loadAnimation("birds/2bird1.png","birds/2bird2.png","birds/2bird3.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  bg = createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(bgImage);
  bg.scale = 1;

  frogPlayer = createSprite(250,600);
  //frogPlayer.addAnimation("standing",frogImage);
  frogPlayer.addAnimation("hopping",frogHop);
  frogPlayer.scale = 6;

  invisGround = createSprite(displayWidth/2,displayHeight - 200,displayWidth,20);
  invisGround.visible = false;

  flyGroup = new Group();
  beeGroup = new Group();
  bird1Group = new Group();
  bird2Group = new Group();
}

function draw() {
  background(255,255,255);

  if(keyDown("space")){
  frogPlayer.velocityY = -7;
  }

  if(keyDown("right_arrow")){
    frogPlayer.x = frogPlayer.x + 7;
  }

  if(keyDown("left_arrow")){
    frogPlayer.x = frogPlayer.x - 7;
  }
  if (frogPlayer.x>displayWidth){
    frogPlayer.x = 250;
  }

  if(frogPlayer.x<0){
   frogPlayer.x = 250;
  }

  frogPlayer.velocityY = frogPlayer.velocityY + 0.7;
  frogPlayer.collide(invisGround);

  fly1();
  flyGroup.bounceOff(invisGround);

  if(frogPlayer.isTouching(flyGroup)){
    flyGroup.destroyEach();
  }




  bee();
  beeGroup.bounceOff(invisGround);
  bird1();
  bird1Group.bounceOff(invisGround);
  bird2();
  bird2Group.bounceOff(invisGround);
  drawSprites();
}

  function fly1(){
    if(frameCount % 80 ===0){
      fly = createSprite(Math.round(random(0,displayWidth - 70)),400);
      fly.addAnimation("flying",flyImage);
      fly.scale = 0.1;
      fly.velocityY = Math.round(random(1,8));
      fly.velocityX = Math.round(random(3,10));
      flyGroup.add(fly);
      flyGroup.lifetime = displayWidth/5;
    }
  }

  function bee(){
    if(frameCount%100 === 0){
      bee1 = createSprite(Math.round(random(0,displayWidth-70)),400);
      bee1.addAnimation("flying",beeImage);
      bee1.scale = 0.1;
      bee1.velocityY = Math.round(random(1,8));
      bee1.velocityX = Math.round(random(3,10));
      beeGroup.add(bee1);
      beeGroup.lifetime = displayWidth/5;
    }
  }

  function bird1(){
    if(frameCount%130 === 0){
      bird = createSprite(Math.round(random(0,displayWidth-70)),400);
      bird.addAnimation("flying",bird1Image);
      bird.scale = 0.1;
      bird.velocityY = Math.round(random(1,8));
      bird.velocityX = Math.round(random(-3,-10));
      bird1Group.add(bird);
      bird1Group.lifetime = displayWidth/5;
    }
  }

  function bird2(){
    if(frameCount%130 === 0){
      Bird = createSprite(Math.round(random(0,displayWidth-70)),400);
      Bird.addAnimation("flying",bird2Image);
      Bird.scale = 0.3;
      Bird.velocityY = Math.round(random(1,8));
      Bird.velocityX = Math.round(random(3,10));
      bird2Group.add(Bird);
      bird2Group.lifetime = displayWidth/5;
    }
  }  