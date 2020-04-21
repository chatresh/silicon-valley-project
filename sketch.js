var player , playerimg;
var backgroundimg;
var maze1,maze2,maze3,maze4,maze5,maze6,maze7;
var bg;

function preload(){
backgroundimg = loadImage("images/grass.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);

 player =  createSprite(650,displayHeight/2 + 200, 40, 40);

  maze1 = createSprite(620,displayHeight/2 + 180 , 10, 70);
  maze2 = createSprite(680,displayHeight/2 + 180 , 10, 70);
  maze3 = createSprite(320,displayHeight/2 + 150 , 600,10);
  maze4 = createSprite(1000,displayHeight/2 + 150 , 630,10);
  maze5 = createSprite(1320,displayHeight/2 -60 , 10, 425);
  maze6 = createSprite(20,displayHeight/2 - 90  ,10,  500);
  maze7 = createSprite(670,40,1300,10);

  middle1 = createSprite(670,100,150,10);
  middle2 = createSprite(600,170,10,150);
  middle3 = createSprite(750,170,10,150);
  middle4 = createSprite(470,280,150,10);
  middle5 = createSprite(890,280,150,10);
  middle6 = createSprite(400,330,10,100);
  middle7 = createSprite(960,330,10,100);
  middle8 = createSprite(890,380,150,10);
  middle9 = createSprite(480,380,150,10);

  outmaze = createSprite(970,450,300,10);
  outmaze1 = createSprite(1111,350,10,200);
  outmaze2 = createSprite(600,330,200,10);
  outmaze3 = createSprite(150,400,250,10);
  outmaze4 = createSprite(270,330,250,10);
  outmaze5 = createSprite(150,260,250,10);
  outmaze6 = createSprite(280,190,250,10);
  outmaze7 = createSprite(150,120,250,10);
  outmaze8 = createSprite(450,180,10,190);
  outmaze9 = createSprite(1160,360,200,10);
  outmaze10 = createSprite(1200,210,10,290);
  outmaze11 = createSprite(1050,60,300,10);
  outmaze12 = createSprite(900,140,10,150);
   }

function draw() {
 
  background(backgroundimg);  
  if(keyDown(UP_ARROW)){
    setDir(0,-4);
  } else 

  if(keyDown(RIGHT_ARROW)){
    setDir(4,0);
  }else 

  if(keyDown(LEFT_ARROW)){
     setDir(-4,0);
  }else
  if(keyDown(DOWN_ARROW)){
    setDir(0,4);
  }
 
   player.bounceOff(maze1);
   player.bounceOff(maze2);
   player.bounceOff(maze3);
   player.bounceOff(maze4);
   player.bounceOff(maze5);
   player.bounceOff(maze6);
   player.bounceOff(maze7);

   player.bounceOff(middle1);
   player.bounceOff(middle2);
   player.bounceOff(middle3);
   player.bounceOff(middle4);
   player.bounceOff(middle5);
   player.bounceOff(middle6);
   player.bounceOff(middle7);
   player.bounceOff(middle8);
   player.bounceOff(middle9);

   player.bounceOff(outmaze);
   player.bounceOff(outmaze1);
   player.bounceOff(outmaze2);   
   player.bounceOff(outmaze3);
   player.bounceOff(outmaze4);
   player.bounceOff(outmaze5);
   player.bounceOff(outmaze6);
   player.bounceOff(outmaze7);
   player.bounceOff(outmaze8);
   player.bounceOff(outmaze9);
   player.bounceOff(outmaze10);
   player.bounceOff(outmaze11);
   player.bounceOff(outmaze12);
  drawSprites();
}
function setDir(x,y){
   player.x = player.x + x;
   player.y = player.y + y;
}