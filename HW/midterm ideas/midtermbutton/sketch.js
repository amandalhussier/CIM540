//Picture and button variables
var harpyeagle;
var ecotourism;
var everglades;
var scholarships;
var bgImage;
var button1;
var button2;
var button3;
var button4;
var backgroundColor = "white";

//Preload pictures
function preload(){
  harpyeagle = loadImage("assets/harpyeagle.jpeg");
  ecotourism = loadImage("assets/ecotourism.JPG");
  everglades = loadImage("assets/everglades.jpg");
  scholarships = loadImage("assets/scholarships.jpg");
}


function setup() {
  createCanvas(1000,1000);
  background(255);

//Loading pictures- I believe the orange is placement, but I cannot see the pictures to know where to move them.
    loadImage('assets/harpyeagle.jpeg', function(img) {
      image(img, 0, 0);
    });
    loadImage('assets/ecotourism.JPG', function(img) {
      image(img, 0, 0);
    });
    loadImage('assets/everglades.jpg', function(img) {
      image(img, 0, 0);
    });
    loadImage('assets/scholarships.jpg', function(img) {
      image(img, 0, 0);
    });

//Creating Buttons - Can I make the function a link to a donation page?
  button1 = createButton("Donate to the Harpy Eagles");
  button1.position(10,500);
  button1.mousePressed(donatePage);
  button2 = createButton("Donate to the Ecotourism Contest");
  button2.position(210,500);
  button2.mousePressed(donatePage);
  button3 = createButton("Donate to Everglades Conservation");
  button3.position(410,500);
  button3.mousePressed(donatePage);
  button4 = createButton("Donate to Scholarship Funds");
  button4.position(610,500);
  button4.mousePressed(donatePage);
}
//I want to make this function go to a link. This is just the example from p5js.org.
function donatePage(){
  var val = random(255);
  background(val);
}

//Trying to make the button do something to show it was clicked
  function draw() {
background(backgroundColor);
    function mousePressed(){
      backgroundColor = "blue";
    }
  }
