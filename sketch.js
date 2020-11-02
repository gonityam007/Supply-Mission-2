var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxa,boxb,boxc;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

boxb=createSprite(485,585,20,150);
boxb.shapeColor="red";

boxa=createSprite(width/2,650,150,20);
boxa.shapeColor="red";

boxc=createSprite(315,585,20,150);
boxc.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

box1 = Bodies.rectangle(width/2,650,150,20,{restitution:0.2,isStatic:true});
World.add(world,box1);
	
box2 = Bodies.rectangle(485,585,20,150,{isStatic:true});
World.add(world,box2);

box3 = Bodies.rectangle(315,585,20,150,{isStatic:true});
World.add(world,box3);


Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Matter.Engine.update(engine); 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 boxa.x=box1.position.x
 boxa.y=box1.position.y

 boxb.x=box2.position.x
 boxb.y=box2.position.y

 boxc.x=box3.position.x
 boxc.y=box3.position.y
 
  keyPressed();
  drawSprites();
console.log(box1.position.x,box1.position.y);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
packageBody.velocityY=-1;    
Matter.Body.setStatic(packageBody,false);
}
}



