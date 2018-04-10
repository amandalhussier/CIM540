var button1;
var button2;
var button3;
var button4;
var hitImage;

// hitzone variables
var hitZoneX = 260;
var hitZoneY = 800;

// keyPressed variable
var value = 0;


function preload(){
  img = loadImage("koala.jpg");
  hitImage = loadImage("ballons.png");
}

function setup() {
  createCanvas(1000,1000);
// Creating Buttons - Can I make the function a link to a donation page?
    button1 = createButton("Click here if you think we're cute");
    button1.position(50,900);
    button1.mousePressed(donatePage);
    button2 = createButton("Click here if you don't");
    button2.position(300,900);
    button2.mousePressed(donatePage);
    button3 = createButton("Click here if you want to donate");
    button3.position(550,900);
    button3.mousePressed(donatePage);
    button4 = createButton("Click here if you are breathing");
    button4.position(800,900);
    button4.mousePressed(donatePage);
// I want to turn this button function into a link

}

function donatePage() {
var val = random(255);
background(val);
//location.href="http://www.google.com";
}

function draw() {
      image(img,0,0);
// Temporary mousePressed function until link is figured out
      function mousePressed(){
        backgroundColor = "blue";
      }
      function mouseReleased(){
        backgroundColor = "red"
      }


// How do I get this hitzone to be whenever the cursor is over one of the buttons?
      strokeWeight(1);
      ellipse(hitZoneX, hitZoneY, 10, 10);
      var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);

// console.log(hitZoneDist);
      if (hitZoneDist < 10) {
        image(hitImage, hitZoneX - 100, hitZoneY - 100);
      }

// Attempt to making a mouseX and mouseY console.log
      if(mouseX > width/2){
        console.log("Side 1");
      }
      if(mouseX < width/2){
        console.log("Side 2");
      }
}
