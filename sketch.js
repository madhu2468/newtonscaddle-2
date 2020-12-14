const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;



var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;

bob1 = new Bob(400,390);
bob2 = new Bob(360,390);
bob3 = new Bob(320,390);
bob4 = new Bob(440,390);
bob5 = new Bob(480,390);
rope1 = new Rope({x:400,y:190},bob1.body)
rope2 = new Rope({x:360,y:190},bob2.body)
rope3 = new Rope({x:320,y:190},bob3.body)
rope4 = new Rope({x:440,y:190},bob4.body)
rope5 = new Rope({x:480,y:190},bob5.body)

	Engine.run(engine);
  
}


function draw() {
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
}

function mouseDragged(){

	Matter.Body.setPosition(bob5.body,{x:mouseX , y:mouseY});
	
	}
	







