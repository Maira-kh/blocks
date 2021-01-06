var rectM,rectF

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  rectF=createSprite(200,200,70,80);
  rectM=createSprite(250,200,50,50)
  rectF.shapeColor="orange";
  rectM.shapeColor="orange";
  rectM.debug=true;
  rectF.debug=true;

}

function draw() {
  background(0);  

  rectM.x=mouseX;
  rectM.y=mouseY;

  if (rectM.x - rectF.x < rectM.width/2 + rectF.width/2 && 
    rectF.x - rectM.x < rectM.width/2 + rectF.width/2 &&
    rectM.y - rectF.y < rectM.height/2 + rectF.height/2 && 
    rectF.y - rectM.y < rectM.height/2 + rectF.height/2){
    rectF.shapeColor="pink";
    rectM.shapeColor="pink";
  }
 else {
  rectF.shapeColor="orange";
  rectM.shapeColor="orange";
 }
 

  drawSprites();
}