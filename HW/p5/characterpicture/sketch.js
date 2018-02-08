var centerX = 200
var centerY = 200
var backgroundColor = "white";

var button;
var button2;

var sel;
var eyeColor = "black";

function setup() {
  createCanvas (600,600);
  background (230);
  button = createButton("Click Me");
  button.mousePressed(changeBG);

// If I tried to take any of these out, it would take away my whole picture
  button2 = createButton("Red");
  button2.mousePressed(function(){

    noseColor = "red";
// Anything above^

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
   //put drawing code here

  	 background (backgroundColor);		// Black
centerX=mouseX;
centerY=mouseY;
     //body
     noStroke();
	   fill (204);			// Light Gray
	   ellipse (centerY +5, -60, centerX, 200, 200);	// Light Gray Circle
	   fill (153);			// Medium Gray
	   ellipse (centerY +20, centerX, 200, 200);	// Medium Gray Circle
	   fill (102);			// Dark Gray
  	 ellipse (centerY + 90, centerX + 100, 200, 200);	// Dark Gray Circle
     fill (92);			// Darkest Gray
  	 ellipse (centerY + 190, centerX + 140, 200, 200);	// Darkest Gray Circle

     //antennae
     line(centerY + 200, centerX + 90, 320, 200); //left
     stroke(255);
     line(centerY + 200, centerX + 90, 380, 200); //middle
     stroke(255);
     line(centerY + 200, centerX + 90, 440, 200); //right
     stroke(255);

     //eyes
     fill(eyeColor);
     ellipse (centerY + 230, centerX + 130, 70, 65); //right eye
     ellipse (centerY + 250, centerX + 130, 25, 25) //right pupil
     ellipse (centerY + 170, centerX + 130, 70, 65) //left eye
     ellipse (centerY + 190, centerX + 130, 25, 25) //left pupil
     var xOffset = map(mouseX, 0, width, -20,20);
     var yOffset = map(mouseY, 0, height, -20,20);
     console.log("xOffset: " + xOffset + "yOffset: " + yOffset);
     strokeWeight(10)

     //mouth
     stroke(255,0,0);
     line(340, 390, 430, 400);
     strokeWeight(6)
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
