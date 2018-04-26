/* -----------
Leaflet Demo with OSM
Visualizing 45,716 Meteorite Landings.
Data from NASA's Open Data Portal.(https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh)
----------- */

// Options for map
var options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

// Create an instance of Leaflet
var mappa = new Mappa('Leaflet');
var myMap;

var canvas;
var meteorites;

var imageSize = 30;

var cheetah;
var harpy;
var scholar;




//Whenever I input this, the code breaks.

function preload(){
  cheetah = loadImage("images/Chetah.png");
  // harpy = loadImage("Harpy.png");
  // scholar = loadImage("Scholarship.png");


}

function setup() {
  canvas = createCanvas(800, 700);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  // Load the data
  meteorites = loadTable('animals.csv', 'csv', 'header');

  // Only redraw the meteorites when the map change and not every frame.
  myMap.onChange(drawMeteorites);

  fill(70, 203,31);
  stroke(100);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}

function drawMeteorites() {
  // Clear the canvas
  clear();

  for (var i = 0; i < meteorites.getRowCount(); i++) {
    // Get the lat/lng of each meteorite
    var latitude = Number(meteorites.getString(i, 'reclat'));
    var longitude = Number(meteorites.getString(i, 'reclong'));

    // Only draw them if the position is inside the current map bounds. We use a
    // Leaflet method to check if the lat and lng are contain inside the current
    // map. This way we draw just what we are going to see and not everything. See
    // getBounds() in http://leafletjs.com/reference-1.1.0.html
    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      // Transform lat/lng to pixel position
      var pos = myMap.latLngToPixel(latitude, longitude);
      var textInfo = meteorites.getString(i, 'text');
      var name = meteorites.getString(i, 'name');
      // Get the size of the meteorite and map it. 60000000 is the mass of the largest
      // meteorite (https://en.wikipedia.org/wiki/Hoba_meteorite)
      //var size = meteorites.getString(i, 'mass (g)');
      //size = map(size, 558, 60000000, 1, 25) + myMap.zoom();
      ellipse(pos.x, pos.y, 20, 20);


      var cityDist  = dist(mouseX,mouseY, pos.x, pos.y);

      if(cityDist < 20){
        text(textInfo, pos.x, pos.y);
      }



//UM Scholarships, Miami
      if(name == "Miami"){
        image(cheetah, pos.x, pos.y, imageSize, imageSize); //scholar
        console.log(name);
      }

//Harpy Eagle,
      if(name == "Panama"){
image(harpy, imageSize, imageSize); //harpy
        console.log(name);
      }

//Cheetah,
      if(name == "South Africa"){
image(cheetah, imageSize, imageSize); //cheetah
        console.log(name);
      }

//UF Scholarships, Gainsville
      if(name == "Miami"){
        //show image
        console.log(name);
      }
//Elephant,
      if(name == "Miami"){
        //show image
        console.log(name);
      }
    }
  }
}

function mousePressed(){
  drawMeteorites()
}
