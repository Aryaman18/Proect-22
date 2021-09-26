var starImg, fairyImg, bgImg;
var fairy , fairySound;
var star, starBody;
//create variable for fairy sprite and fairyImg


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairySound = loadSound("JoyMusic.mp3");
//load animation for fairy here
}

function setup() {
	createCanvas(800, 600);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	fairySound.play();

	
	fairy = createSprite(300, 490);
	fairy.addAnimation("k",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {


  background(bgImg);
  star.x= starBody.position.x 
  star.y= starBody.position.y 

 
 

//write code to move fairy left and right

if(star.y>470 && starBody.positionY > 470){
	Matter.Body.setStatic(starBody,true);
}


  drawSprites();

}
function keyPressed(){
	if(keyDown(RIGHT_ARROW)){ 
		fairy.x = fairy.x+20
	} 
	if(keyDown(LEFT_ARROW)){ 
	   fairy.x = fairy.x-20
	} 
	if(keyDown(DOWN_ARROW)){
	   Matter.Body.setStatic(starBody,false); 
	   }
}




