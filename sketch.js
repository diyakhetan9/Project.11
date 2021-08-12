var trackImage, track;
var runner_running, runner;
var rightWall;
var leftWall;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //create track
  track = createSprite(200,200);
  track.addImage(trackImage);
  track.velocityY = 4
  track.scale = 1.2;

  if(track.y > 400){
    track.y = height/2;
  }
  
  //create runner
  runner = createSprite(300,300,50,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1;

  //create invisible walls
  rightWall = createSprite(390,200,10,400);
  rightWall.visible = false;
  leftWall = createSprite(10,200,10,400);
  leftWall.visible = false;

}

function draw() {
  background(0);

  runner.x = World.mouseX;
  runner.collide(rightWall);
  runner.collide(leftWall);

  drawSprites();

}
