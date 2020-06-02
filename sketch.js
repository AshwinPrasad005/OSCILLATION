var engine,world,sling,stick1;

const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {

  engine = Engine.create();
  world = engine.World;

  createCanvas(400,400);

  //sling = new Oscillating()
  stick1 = new Stick(200,100,100,10);
}

function draw() {
  background(80,80,80);
  Engine.update(engine);
  stick1.display();  
  drawSprites();
}