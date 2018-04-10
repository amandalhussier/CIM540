var targetPosX = [0,200,400,600];

var targetPosY = [0,200,400] //Added the "400" to give the second Y row?

var imageSize = 200;

var pics = [];

var outputText = "Find the soccer ball";

var currentBox = 0;

var startGame;

var sg = false; //What exactly does this mean, why did we put a var sg

function preload(){
  pics[0] = loadImage("assetsHW/Football.png");
  pics[1] = loadImage("assetsHW/basketball.png");
  pics[2] = loadImage("assetsHW/soccer.png");
  pics[3] = loadImage("assetsHW/baseball2.png");
  pics[4] = loadImage("assetsHW/golfball.png");
  pics[5] = loadImage("assetsHW/tennisball.png");
}

function setup(){
  createCanvas(1200,800);
  console.log("First position in targetPosX" + targetPosX[0]);
  console.log("3rd position in targetPosX" + targetPosX[2]);
//Thought maybe add the Y version of the console logs below
  console.log("First position in targetPosY" + targetPosY[0]);
  console.log("3rd position in targetPosY" + targetPosY[2]);
  startGame = createButton("Click to start");
  startGame.position(width/2, 300);
  startGame.mousePressed(function(){
    sg = true;
  });

}


function draw(){

background(255);
  if(sg == true){

  fill(0);
  rect(targetPosX[0], targetPosY[0], imageSize, imageSize); //football
  rect(targetPosX[1], targetPosY[0], imageSize, imageSize); //basketball
  rect(targetPosX[2], targetPosY[0], imageSize, imageSize); //soccer

//I think this will give me the second row
  fill(0);
  rect(targetPosX[0], targetPosY[1], imageSize, imageSize); //baseball
  rect(targetPosX[1], targetPosY[1], imageSize, imageSize); //field hockey
  rect(targetPosX[2], targetPosY[1], imageSize, imageSize); //sneakers

//Football
if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]) {
    console.log("Box 1");
    image(pics[0], targetPosX[0], targetPosY[0], imageSize, imageSize);
    currentBox = 1;
  }

//Basketball
if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]) {
    console.log("Box 2");
    image(pics[1], targetPosX[1], targetPosY[0], imageSize, imageSize);
    currentBox = 2;
}

//Soccer
if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[0] && mouseY < targetPosY[1]) {
    console.log("Box 3");
    image(pics[2], targetPosX[2], targetPosY[0], imageSize, imageSize);
    currentBox = 3;
  }


//I think these next sets of if's can be with the next 3 boxes ... I changed the #s in the boxes
//Baseball
if(mouseX >= targetPosX[0] && mouseX < targetPosX[1] && mouseY >= targetPosY[1] && mouseY < targetPosY[2]) {
    console.log("Box 4");
    image(pics[3], targetPosX[0], targetPosY[1], imageSize, imageSize);
    currentBox = 4;
  }

//Field Hockey
if(mouseX >= targetPosX[1] && mouseX < targetPosX[2] && mouseY >= targetPosY[1] && mouseY < targetPosY[2]) {
    console.log("Box 5");
    image(pics[4], targetPosX[1], targetPosY[1], imageSize, imageSize);
    currentBox = 5;
}

//Sneakers
if(mouseX >= targetPosX[2] && mouseX < targetPosX[3] && mouseY >= targetPosY[1] && mouseY < targetPosY[2]) {
    console.log("Box 6");
    image(pics[5], targetPosX[2], targetPosY[1], imageSize, imageSize);
    currentBox = 6;
  }


}
textSize(32);
text(outputText, 600,250);

if(currentBox == 3){  //What exactly does == mean again?
  console.log("You Won!");
  outputText = "You Win!!"
}else if (currentBox == 1 || currentBox == 2 || currentBox == 4 || currentBox == 5 || currentBox == 6){
  console.log("You Lose!");
  outputText = "You Lose!!"
}

}
