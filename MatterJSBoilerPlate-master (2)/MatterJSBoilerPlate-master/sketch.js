
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(340,470,20,20);
	bob2 = new bob(380,470,20,20);
	bob3 = new bob(420,470,20,20);
	bob4 = new bob(460,470,20,20);
	bob5 = new bob(500,470,20,20);
    roof = new roof(370,200,300,10);

	
	rope1=new rope(bob1.body,roof.body,-40*2, 0)
    rope2=new rope(bob2.body,roof.body,-20*1, 0)
	rope3=new rope(bob3.body,roof.body,-0*2, 0)
	rope4=new rope(bob4.body,roof.body,20*1, 0)
	rope5=new rope(bob5.body,roof.body,40*2, 0)

	

	Engine.run(engine);
  
}





function draw() {
  rectMode(CENTER);
  background(255);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  
  drawSprites();
 
}
function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -50, y:-45});
	}
}



