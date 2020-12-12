
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(300,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1, gameObject2, gameObject3, gameObject4
  
  gameObject1 = createSprite(400,200,80,30);
  gameObject1.shapeColor = "blue";
  gameObject1.debug = true;

  gameObject2 = createSprite(500,200,80,30);
  gameObject2.shapeColor = "blue";
  gameObject2.debug = true;

  gameObject3 = createSprite(600,200,80,30);
  gameObject3.shapeColor = "blue";
  gameObject3.debug = true;

  gameObject4 = createSprite(700,200,80,30);
  gameObject4.shapeColor = "blue";
  gameObject4.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect, gameObject1)) {
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{
 movingRect.shapeColor = "green";
  gameObject1.shapeColor = "blue";
}
  drawSprites();
}


function isTouching(object1, object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
 return false;
}
}