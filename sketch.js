var  rect1,rect2,rect3



function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400,300,50,50);
 rect3 = createSprite(200,300,50,50)
  rect1.debug = true;
  rect2.debug = true;
  rect1.velocityY = 3;
  rect2.velocityX = -3;
  rect3.velocityX = 3
}

function draw() {
  background(255,255,255);  
 
 
    if(isTouching(rect3,rect2)){
  rect3.shapeColor = "blue"
  rect2.shapeColor = "red"
  
  }else{
  rect3.shapeColor = "green"
  rect2.shapeColor = "green"
 
  }

  //bounceOff(rect3,rect2);


  drawSprites();
}

