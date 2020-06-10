var engine,world,sling,stick1,ball1;

const Engine = Matter.Engine;
const Constraints = Matter.Constraint;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {

  engine = Engine.create();
  world = engine.world;

  createCanvas(400,400);

   stick1 = new Stick(200,100,100,10);
   ball1 = new Ball(200,200,30);
   sling = new Oscillating(stick1,ball1)
}

function draw() {
  background(80,80,80);
  Engine.update(engine);
  stick1.display(); 
  ball1.display(); 
  sling.display();
  drawSprites();
}