const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var dustbin;
var ground;




function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  


	ground1 = new Ground(600,height,1200,20);
	dustbin1 = new Dustbin();


  paperObject = new Paper(250,200);

}

function draw() {
  rectMode(CENTER);
  background(150);
  Engine.update(engine)
 
 
  ground1.display();
  paperObject.display();
  dustbin1.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-40});

  }
}



