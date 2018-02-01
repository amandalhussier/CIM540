var centerX = 200
var centerY = 200



function setup() {
  createCanvas (600,600);
  background (230);
}

function draw() {

  	 background (0);		// Black

     //body
     noStroke();
	   fill (204);			// Light Gray
	   ellipse (centerX, 110, 200, 200);	// Light Gray Circle
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
     ellipse (centerY + 230, centerX + 130, 70, 65); //right eye
     ellipse (centerY + 250, centerX + 130, 25, 25) //right pupil
     ellipse (centerY + 170, centerX + 130, 70, 65) //left eye
     ellipse (centerY + 190, centerX + 130, 25, 25) //left pupil
     strokeWeight(10)

     //mouth
     stroke(255,0,0);
     line(340, 390, 430, 400);
     strokeWeight(6)
}
