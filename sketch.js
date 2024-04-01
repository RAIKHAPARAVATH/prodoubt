
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bg
var helicopter
var girl1
var girl
function preload(){
  bg=loadImage("FLOOdbg.jpg")
  girl1=loadImage("FLOOdbg.jpg")
}




function setup() {
  createCanvas(900,600);

  engine = Engine.create();
  world = engine.world;
  girl=createSprite(400,200)
  
}


function draw() 
{
  background(bg);
  Engine.update(engine);
  drawSprites()
}

