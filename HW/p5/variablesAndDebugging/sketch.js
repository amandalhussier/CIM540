var number1 = 1;
var number2 = 2;
var letter1 = 'a';
var letter2 = 'b';
var greeting = "hello";
var greeting2 = "goodbye";
var truthordare = true;
var truthordare2 = false;




function setup() {
  // console log is used to help you understand what your code is doing
  console.log("Hello World!");
  console.log(number1);
  console.log("The value of letter2: " + letter2)
  console.log(number1 + number2);
  console.log(number2 + letter2);

  console.log(number2 - letter2); // does not work

  var addNumber = number1 + number2;
  console.log(addNumber);
}

function draw() {
  // put drawing code here
  //console.log("mouseX: " + mouseX);
  //This will not work, addNumber is not in draw scope, console.log (addNumber);






}
