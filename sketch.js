
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannon1, cannon_Base;
var cannon_ball;
var Mountain;

let engine, world;

function preload(){
  Mountain = loadImage("Mountain.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;
  cannon1 = new Cannon(width/8+25,height-85,150,100,angle)
  ground = new Ground(width/2,height-10,width,20)  
  rectMode(CENTER);
}


function draw() 
{
  background("#65cbe8");
  image(Mountain,400,200);
  ground.show();
  cannon1.display();
  Engine.update(engine);
}



