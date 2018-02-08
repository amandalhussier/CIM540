var centerX = 200;
var centerY = 200;
var backgroundColor = "white";

var button;
var button2;

var noseColor = "black";

var sel;
var eyeColor = "black";

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(255);
  button = createButton("Click Me");
  button.mousePressed(changeBG);
  button2 = createButton("Red");
  button2.mousePressed(function(){

    //your code goes here
    noseColor = "red";

  });
 //below is how to create a drop down selection with eye color options
  sel = createSelect();
  sel.option("blue");
  sel.option("green");
  sel.option("brown");

  sel.changed(function(){
//these are how to change the eyes to the selected color value 
    eyeColor = sel.value();

  });
}

function draw() {
  // put drawing code here

  background(backgroundColor);
  centerX = mouseX;
  centerY = mouseY;
  stroke(0);
  strokeWeight(1);
  fill(eyeColor);
  rect(centerX-150,centerY-100,100,100);
  //eye1
  var xOffset = map(mouseX, 0, width, -20,20);
  var yOffset = map(mouseY, 0, height, -20,20);
  console.log("xOffset: " + xOffset + "yOffset: " + yOffset);
  ellipse(centerX-100 + xOffset, centerY-50 +yOffset, 50,50);
  rect(centerX+25,centerY-100,100,100);
  //eye2
  ellipse(centerX+75 + xOffset,centerY-50 +yOffset,50,75);

  stroke(125);
  strokeWeight(5);
  point(centerX,centerY);


  stroke(255,0,0);
  line(centerX-50,centerY+50,centerX+50,centerY+50);

  noStroke();
  fill(noseColor);
  //nose
  triangle(centerX,centerY,centerX+25,centerY+25,centerX-25,centerY+25);


}

function mousePressed(){
  backgroundColor = "blue";
}

function mouseReleased(){
  backgroundColor = "red";
}

function changeBG(){
  noseColor = "green";
}
