

var gameState = "no";
var canvas,truck1,truck2,truck3,truck4,truck5,ground,groundImg,car,puddle,logo1,logo2;
var misses = 0;
var score=0;
var puddleImg,carsGroup,puddleGroup,player,playerImg,nameForm;


function preload(){
  truck1 = loadImage ("sprites/truck1.png");
  truck2 = loadImage ("sprites/truck2.png");
  truck3 = loadImage ("sprites/truck3.png");
  truck4 = loadImage ("sprites/truck4.png");
  puddleImg = loadImage ("sprites/pic.png");
  groundImg = loadImage("sprites/Capture.PNG");
 playerImg=loadAnimation("sprites/adventurer-crnr-grb-00.png","sprites/adventurer-crnr-grb-01.png","sprites/adventurer-crnr-grb-02.png","sprites/adventurer-crnr-grb-04.png");
logo1 = loadImage("sprites/Icon1.png");

}

function setup(){
 canvas=createCanvas(1350,950);
   
/* ground=createSprite(675,475);
 ground.addImage("ground",groundImg);
 ground.scale=3;
 ground.y=ground.height/2;*/
 
  carsGroup=new Group();
  puddleGroup=new Group();

}


function draw() {

 background("white");
 nameForm = new NAMEform();



/*if(player.collide(puddle)){
score= score+1;
misses=misses-1;
puddle.visible = false;
}
if(puddle.y< 955){
  misses= misses+1
}*/
/*if(puddleGroup.collide(player)){
   
  puddle.visible=false;
  score+=1;
}

if(puddle.position.y< 955){
  misses= misses+1
}


if(carsGroup.collide(player)){
  gameState = "end";
}*/





nameForm.display();
 
 
 textSize(20);
 
 fill("ORANGE")
 text("SCORE: "+score,150,20);
 text("MISSES: "+misses,150,50);

 
  
 if (gameState==="play"){
   
 run();
  spawnCars();
  spawnPuddles();
  ///ground.velocity.y=5;

  /*if (ground.y >400){
    ground.y = ground.height/2;

  }*/
     
 
}  
else if(gameState==="end"){
 
 // ground.velocity.y=0;
  textSize(30);
  text("Game Over",250,200);

}

 



  drawSprites();
}
function run(){
  player=createSprite(475,800,100,150);
  player.addAnimation("player",playerImg);
  player.scale=8;
}

function move(){
  if(player.position.x===75 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = 475;
  }
  else if(player.position.x===875 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = 1275;
  }
  
  else if(player.position.x===475 && keyDown("RIGHT_ARROW") && gameState==="play"){
    player.position.x = 875;
  }
  
  if(player.position.x===1275 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = 875;
  }
  else if(player.position.x===875 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = 475;
  }
  
  else if(player.position.x===475 && keyDown("LEFT_ARROW") && gameState==="play"){
    player.position.x = 75;
  }
}




function spawnCars (){
  if (frameCount % 60===0){
    
    var rnd1=Math.round(random(1,4));
    car= createSprite(rnd1*400 -325,0);
    
     var rnd = Math.round(random(1,4));
      switch(rnd){
         case 1:car.addImage(truck1);
         car.scale=1.5;
         break;
         case 2:car.addImage(truck2);
         car.scale=1.5;
         break;
         case 3:car.addImage(truck3);
         car.scale=1.5;
         break;
         case 4:car.addImage(truck4);
         car.scale=1.5;
         break;
         
         
         default:break;
     }
   
   
     car.velocity.y=5;
 

   
     car.lifetime=1390;
      
     carsGroup.add(car);
   }
 
}

function spawnPuddles(){

  if (frameCount % 60===0){
    
    var r=Math.round(random(1,4)); 
    puddle= createSprite(r*400 -325,0);
   // puddle.addImage(puddleImg);
    puddle.velocity.y=5;
   
    puddle.lifetime=1380;
    puddleGroup.add(puddle);



  }

}