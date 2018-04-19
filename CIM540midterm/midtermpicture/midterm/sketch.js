var mouseX;
var mouseY;

var cheetah;
var harpy;
var scholar;
var map;

var donateB;
var donate;

var imageSize = 100;
var bgImageSize = 1000;
var blurbSize = 200;



function preload(){
  cheetah = loadImage("Chetah.png");
  harpy = loadImage("Harpy.png");
  scholar = loadImage("Scholarship.png");
  map = loadImage("Map.png");
}

function setup(){

  createCanvas(1000,1000);

  donateB = createButton("Learn More");
  donateB.position(500, 100);

  donateB.mousePressed(function(){
    window.open("https://donate.zoomiami.org/campaign/ron-magill-conservation-endowment-fund/c158114");
});


    donate = createButton("Donate");
    donate.position(600, 100);

    donate.mousePressed(function(){
      window.open("https://donate.zoomiami.org/give/158114/#!/donation/checkout")
});

}

function draw(){
  image(map, 0, 0, bgImageSize, bgImageSize);
  image(cheetah, 530, 770, imageSize, imageSize); //cheetah
  image(harpy, 130, 520, imageSize, imageSize); //harpy
  image(scholar, 170, 380, imageSize, imageSize); //scholar

//Cheetah Blurb
if(mouseX >= 430 && mouseX < 630 && mouseY >= 670 && mouseY < 870) {
    console.log("Cheetah");
    fill(255);
    rect(530, 770, blurbSize, blurbSize);
    fill(0);

    text("Sponsorship of Anatolian Shepherd dogs in South Africa through the nonprofit Cheetah Outreach. These dogs are bred to protect livestock from cheetah attacks with a success rate of over 85% and have reduced the number of cheetah casualties that arise from the human-wildlife conflict.", 550, 800, 150, 150);
  }

//Harpy Blurb
if(mouseX >= 80 && mouseX < 180 && mouseY >= 420 && mouseY < 620) {
    console.log("Harpy");
    fill (255);
    rect(130, 520, blurbSize, blurbSize);
    fill(0);

    text("Harpy eagle conservation project in Panama. This project spurred the 2002 law that designated the harpy eagle as the official bird of Panama.", 150, 550, 150, 150);
  }

//Scholarship Blurb
if(mouseX >= 120 && mouseX < 220 && mouseY >= 330 && mouseY < 430) {
    console.log("Scholarship");
    fill (255);
    rect(170, 380, blurbSize, blurbSize);
    fill(0);
    text("An annual $5,000 scholarship to a graduate student in the Department of Wildlife Ecology and Conservation at the University of Florida. This scholarship reflects Ron's deep commitment to training the next generation of conservationists.", 190, 410, 150, 150);
  }

}
