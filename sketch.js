var bg,sleep,brush,gym,eat,drink,move
var astronaut

function preload(){
	bg= loadImage("images/iss.png");
	sleep = loadAnimation("images/sleep.png")
	brush = loadAnimation("image/brush.png")
	gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11","images/gym12.png")
	eat = loadAnimation("images/eat1.png","images/eat2.png")
  drink = loadAnimation("images/drink1.png","images/drink2.png")
  move = loadAnimation("images/move.png","images/move1.png")
 bath = loadAnimation("images/bath2.png","images/bath2.png")
	
}


function setup() {
  createCanvas(400,400)
  
  astronaut = createSprite(300,230,50,50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1
  
  //
 
}



function draw() {
  background(220);
  text("Instruction",20,20)
  text("UP ARROW : Brush",30,30)
  text("DOWN ARROW : EATING",40,40)
  text("LEFT ARROW: GYMMING",50,50)
  text("RIGHT ARROW : BATHING",60,60)
  text("M : MOVING",80,120)
  if(keyDown("UP_ARROW")){
    astronaut,addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut,addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut,addAnimation("eating",eat)
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut,addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("SPACE")){
    astronaut,addAnimation("moving",move)
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  


  
  drawSprites();

}