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
	star.velocityY= 2

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {


  background(bgImg);
  fairy.velocityX=0
  fairy.velocityY=0
  star.x= starBody.position.x 
  star.y= starBody.position.y 

 
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(starBody,true);
	star.velocityY=2
}

//write code to move fairy left and right

if(star.y>470 && starBody.positionY > 470){
	Matter.Body.setStaticMatter.Body.setStatic(starBody,true);
}
console.log(star.y)

  drawSprites();

}



