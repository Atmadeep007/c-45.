var ground,moon,moon1,moon2,moon3,moon4,moon5;
var moonImg,backImg,mcImg;
var trex,i=15,j=0;
var wall1,wall2,wall3;
var gameState=0,s;
var highScore=0, score=0;

function preload(){
  moonImg = loadImage("images/moon.png");
  backImg = loadImage("images/back1.jpg");
  mcImg = loadImage("images/spaceship.jpg");
}

function setup() {
  createCanvas(1200,800);
  //moon = createSprite(1000, 100, 50, 50);
  //moon.addImage("moon",moonImg);
  ground = createSprite(600,750,1200,10);  
  ground.visible = false;
  trex = createSprite(500,715,25,55);
  trex.addImage(mcImg);
  trex.scale = 0.2;
  wall1 = createSprite(10,400,10,800);
  wall1.visible = false;
  wall3 = createSprite(600,20,1200,10);
  wall3.visible = false;
  wall2 = createSprite(1190,400,10,800);
  wall2.visible = false;
  moon = createSprite(1200,0,0,0);  
  moon.visible = false;  
  moon1 = createSprite(0,0,0,0);  
  moon1.visible = false;
  moon2 = createSprite(200,0,0,0);  
  moon2.visible = false;
  moon3 = createSprite(400,0,0,0);  
  moon3.visible = false;
  moon4 = createSprite(800,0,0,0);  
  moon4.visible = false;
  moon5 = createSprite(0,200,0,0);  
  moon5.visible = false;
}

function draw() {
  background(backImg)

  if(frameCount%2===0)
  {
    fill(random(0,255),random(0,255),random(0,255));
  }

  //pregame
  if (gameState===0)
  {
    trex.visible = true;
    trex.x=500;
    trex.y=715;

    textSize(50);
    text("Welcome to the Game", 300,100);

    textSize(30);
    text("press space to start the Game", 350,200);

    text("Highest Score: "+highScore, 900,50);

    if (keyDown("space"))
    {
      gameState=1;
    }
  }

  console.log(gameState);

  //gameState=1
  if(gameState===1)
  {
    //score
    score++;
    textSize(30);    
    text("Score: "+score,900,50);

      if(keyDown("d"))
    {
      trex.x+=15;
    }

    if(keyDown("a"))
    {
      trex.x-=15;
    }

    if(keyDown("w"))
    {
      trex.y-=15;
    }

    if(keyDown("s"))
    {
      trex.y+=15;
    }
    s = Math.round(random(1,2));
    //console.log(s);

    //horizontal moons
    if(frameCount%75===0)
    {
      i++;
      
      if(s===1)
      {
        moon = createSprite(0,random(50,250),50,50);
        moon.addImage(moonImg);
        moon.scale=0.2;
        moon.lifetime = 75; 
        moon.velocityX=i;
        
        moon2 = createSprite(0,random(275,500),50,50);
        moon2.addImage(moonImg);
        moon2.scale=0.2;
        moon2.lifetime = 75; 
        moon2.velocityX=i;  

        moon4 = createSprite(0,random(550,750),50,50);
        moon4.addImage(moonImg);
        moon4.scale=0.2;
        moon4.lifetime = 75; 
        moon4.velocityX=i;  
        
        //moon.velocityX+=20;
      }
      else
      {
        moon = createSprite(1200,random(50,250),50,50);
        moon.addImage(moonImg);
        moon.scale=0.2;
        moon.lifetime = 75;
        moon.velocityX=-i;        

        moon2 = createSprite(1200,random(275,500),50,50);
        moon2.addImage(moonImg);
        moon2.scale=0.2;
        moon2.lifetime = 75; 
        moon2.velocityX=-i;  

        moon4 = createSprite(1200,random(550,750),50,50);
        moon4.addImage(moonImg);
        moon4.scale=0.2;
        moon4.lifetime = 75; 
        moon4.velocityX=-i; 
        //moon.velocityX-=20;
      }     
      
    }

    //vertical moons
    if(frameCount%100===0)
    {      
      
      if(s===1)
      {
        moon1 = createSprite(random(25,400),0,50,50);
        moon1.addImage(moonImg);
        moon1.scale=0.2;
        moon1.lifetime = 99; 
        moon1.velocityY=i; 

        moon3 = createSprite(random(450,775),0,50,50);
        moon3.addImage(moonImg);
        moon3.scale=0.2;
        moon3.lifetime = 99; 
        moon3.velocityY=i;

        moon5 = createSprite(random(825,1175),0,50,50);
        moon5.addImage(moonImg);
        moon5.scale=0.2;
        moon5.lifetime = 99; 
        moon5.velocityY=i;
        //moon.velocityX+=20;
      }
      else
      {
        moon1 = createSprite(random(25,400),800,50,50);
        moon1.addImage(moonImg);
        moon1.scale=0.2;
        moon1.lifetime = 99; 
        moon1.velocityY=-i;

        moon3 = createSprite(random(450,775),800,50,50);
        moon3.addImage(moonImg);
        moon3.scale=0.2;
        moon3.lifetime = 99; 
        moon3.velocityY=-i;

        moon5 = createSprite(random(825,1175),800,50,50);
        moon5.addImage(moonImg);
        moon5.scale=0.2;
        moon5.lifetime = 99; 
        moon5.velocityY=-i;
        //moon.velocityX-=20;
      }     
      
    }    

    trex.collide(wall1);
    trex.collide(wall2);
    trex.collide(ground);
    
  }

  if(trex.isTouching(moon))
  {
    gameState=2;
  }    

  if(trex.isTouching(moon1))
  {
    gameState=2;
  }

  if(trex.isTouching(moon2))
  {
    gameState=2;
  }

  if(trex.isTouching(moon3))
  {
    gameState=2;
  }

  if(trex.isTouching(moon4))
  {
    gameState=2;
  }

  if(trex.isTouching(moon5))
  {
    gameState=2;
  }

  //endgame
  if(gameState===2)
  {
    textSize(50);
    text("GAME OVER",450,250);
    textSize(30);
    text("Press r to restart",475,400);
    text("Score: "+score,525,500);

    if(score>highScore)
    {
      highScore = score;
    }
  }

  if (gameState===2)
  {
    trex.visible=false;

    if(keyDown("r"))
    {
      gameState=0;
      score = 0;
    }
  }
  
  drawSprites();
}