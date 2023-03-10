// quick touch event demo
// ben grosser
// ARTS 444 @ univ. of illinois

let bg = 0;
let sat = 50;
let touchended = false;
let touchstarted = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB);
  textAlign(CENTER);
  pixelDensity(displayDensity());
  textSize(32);
}

function draw() {
  
  //background(bg,sat,100);
   //ellipse(mouseX, mouseY, 80, 80);
  
  // for every touch event in the touches[], draw an ellipse
  // (IOW draw a circle for every finger tip touching screen)
  // do this first so info text goes *over* the ellipses
  for(let i = 0; i < touches.length; i++) {
    ellipse(mouseX,mouseY,250, 250);
    var HeartSize=6
    fill(color((int(random(0,255))),(int(random(0,255))),(int(random(0,255)))));
  beginShape();
  for (t=0; t<=2*PI; t+=0.0001){
  vertex((-16*HeartSize*pow(sin(t), 3))+mouseX, (-(13*HeartSize*cos(t)-5*HeartSize*cos(2*t)-2*HeartSize*cos(3*t)-HeartSize*cos(4*t)-mouseY)))
  }
  endShape();
  }
  
  // if no touches but touchstarted == true, then it's a regular
  // mouse interaction, so draw an ellipse for the mouse location
  if(touches.length == 0 && touchstarted){
     ellipse(mouseX,mouseY, 100, 100);
    var HeartSize=2
    fill(color((int(random(0,255))),(int(random(0,255))),(int(random(0,255)))));
  beginShape();
  for (t=0; t<=2*PI; t+=0.0001){
  vertex((-16*HeartSize*pow(sin(t), 3))+mouseX, (-(13*HeartSize*cos(t)-5*HeartSize*cos(2*t)-2*HeartSize*cos(3*t)-HeartSize*cos(4*t)-mouseY)))
  }
  endShape();
  }
     
  
  
  // notify when touch event has ended
  if(touchended & false) text("touch is NO", width/2,height/2);
  
  // if we're in a touch event, give some info
  if(touchstarted & false) {
    text("touch is YES", width/2,height/2);
    text("X,Y: "+mouseX+","+mouseY, width/2, height/2+30);
    text("HUE: "+Math.round(bg)+", SAT: "+Math.round(sat), width/2, height/2+60);
    text("touches detected: "+touches.length, width/2, height/2+90);
  }
  
  
  
}


// called at the beginning of a touch event
// here I'm using it to track beginning and end of touches
function touchStarted() {
  touchstarted = true;
  touchended = false;
  return false;
}

// called whenever a touch is moving (like mouseMoved())
function touchMoved() {
	handleMouseAndTouch();
  return false;
}

// use same functionality if no touch and only mouse
function mouseMoved() {
	 handleMouseAndTouch();
}

// this gets called from mouseMoved and touchMoved
// so that this happens either way (I made up this function--
// it's not from p5)
function handleMouseAndTouch() {
  bg = map(mouseX,0,width,0,360);
  sat = map(mouseY,0,height,0,100);
}

// called whenever a touch event ends. 
// I test touches.length to make sure *all*
// touches are done before changing values
function touchEnded() {
  if(touches.length == 0) {
    touchended = true;
    touchstarted = false;
  }
}