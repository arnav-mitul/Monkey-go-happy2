var monkey,ming;
var jungle,jimg;
var banana,bimg;
var stone,simg;
var ground,gimg;
var inn;
var score;
var fr,st;
var ground,gimg;


function preload(){
  ming=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bimg=loadImage("Banana.png");
  jimg=loadImage("jungle.jpg");
  simg=loadImage("stone.png");
  gimg=loadImage("ground.jpg");
}


function setup() {
  createCanvas(600,300);
    jungle=createSprite(300,10,20,20);
  jungle.scale=1.1;
  jungle.addImage(jimg);
   jungle.velocityX=-9
  monkey=createSprite(50,220,10,10);
  monkey.scale=0.1;
  monkey.addAnimation("run",ming);
  monkey.velocityY=monkey.velocityY+0.8; 
  inn=createSprite(300,290,1200,10);
  inn.visible=false;
  score=0;
  fr=new Group();
  st=new Group();
  ground=createSprite(300,350,1200,10);
  ground.scale=0.01
  ground.addImage("fh",gimg);
}


function draw(){
  background(255); 
 uio();
monkey.velocityX=0
  fruits();
  stones();
  if(jungle.x<150){
    jungle.x=jungle.width/2;
 }
  monkey.velocityY=0;
  monkey.velocityY=monkey.velocityY+3
  monkey.collide(inn);
  if(keyDown("space") && monkey.y>250){
    monkey.velocityY=-120;
  }
  
  if(monkey.isTouching(fr)){
       score=score+10 ;
      fr.destroyEach();
    monkey.scale=monkey.scale+0.01;
     }
     if(monkey.isTouching(st)){
       score=score-5
       st.destroyEach();
       monkey.scale=monkey.scale-0.02;
     }
  drawSprites();
  
    text("SCORE " + score,500,20);
  if(score>500){
   
    text("YOU HAVE REACHED 500 POINTS ANS YOU WIN",100,100);
    
    
  }
  
}

function fruits(){
  if(frameCount%50===0){
      banana=createSprite(560,150,10,10);
  banana.scale=0.04;
  banana.addImage(bimg);
    banana.x=random(200,390);
    banana.velocityX=-(5+2*score/50);
    banana.lifetime=80;
    fr.add(banana);
  }
}

function stones(){
  if(frameCount%60===0){
       stone=createSprite(560,280,10,10);
  stone.scale=0.1;
  stone.addImage(simg);
    stone.velocityX=-(4+2*score/50);
    stone.x=random(200,380);
    stone.lifetime=80;
    st.add(stone);
  } 
}


function uio(){
  if(score%50===0){
 var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: monkey.scale+0.2
              break;
      case 2: monkey.scale+0.3
              break;
      case 3: monkey.scale+0.4
              break;
      case 4: monkey.scale+0.5;
              break;
      case 5:monkey.scale+0.6
              break;
      case 6: monkey.scale+0.7
              break;
      //default: break;
    }

  }






}