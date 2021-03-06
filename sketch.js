
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 50
	//Create the Bodies Here.

	roof = new Roof (400, 200);

	bob1 = new Bob (300, 500);
	bob2 = new Bob (350, 500);
	bob3 = new Bob (400, 500);
	bob4 = new Bob (450, 500);
	bob5 = new Bob (500, 500);
	
	rope1 = new Rope (bob1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope (bob2.body, roof.body, -bobDiameter*1, 0);
	rope3 = new Rope (bob3.body, roof.body, 0, 0);
	rope4 = new Rope (bob4.body, roof.body, bobDiameter*1, 0);
	rope5 = new Rope (bob5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display ();
  bob2.display ();
  bob3.display ();
  bob4.display ();
  bob5.display ();

  rope1.display ();
  rope2.display ();
  rope3.display ();
  rope4.display ();
  rope5.display ();

  drawSprites();

}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:660, y:355}); 
	}
}




