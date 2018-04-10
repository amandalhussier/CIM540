//Picture variables
var harpyeagle;
var ecotourism;
var everglades;
var scholarships;
var bgImage;
var imageSize;

//Poll choices - I am trying to make the button a picture
var choices = {
    "Harpy Eagles" : [30,50,75,harpyeagle],
    "The Ecotourism Contest" : [30,200,75,ecotourism],
    "Everglades Conservation" : [30,350,75,everglades],
    "Scholarships" : [30,500,75,scholarships],
};

//Preload pictures
function preload(){
  harpyeagle = loadImage("assets/harpyeagle.jpeg");
  ecotourism = loadImage("assets/ecotourism.JPG");
  everglades = loadImage("assets/everglades.jpg");
  scholarships = loadImage("assets/scholarships.jpg");
}

//Don't understand
function setup() {
  createCanvas(1000,1000);
  console.log(choices);
  console.log(choices["Harpy Eagles"]);
  console.log(choices["Harpy Eagles"][3]);
  for(keys in choices){
    console.log(keys + ":" + choices[keys]);
  }
}

//What is "for(keys in choices)"
//Is the ellipse the button? If yes, how do I make the button a picture instead
function draw() {
  for (keys in choices){
  fill(choices[keys][3]);
  ellipse(choices[keys][1],choices[keys][2], choices[keys][0],choices[keys][0]);
  fill(0);
  textAlign(CENTER);
  text(keys, choices[keys][1],choices[keys][2] - 20);
  text(choices[keys][0], choices[keys][1],choices[keys][2] + 100);
}
}

//Is this current distance giving the button boundaries?
function mousePressed(){
  for(keys in choices){
    var curDist = dist(mouseX, mouseY, choices[keys][1],choices[keys][2]);
    if(curDist < 20){
      choices[keys][0]++;
    }
  }
}
