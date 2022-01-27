var cat;
var mouse;
var bg;

function preload() {
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");
    bg = loadImage("images/garden.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",cat1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",mouse1);
    jerry.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x<(tom.width-jerry.width)/2){
       tom.velocityX=0;
       tom.addAnimation("tomLastImg",cat4);
       tom.x = 300;
       tom.scale=0.2;
       tom.changeAnimation("tomLastImg");

       jerry.addAnimation("jerryLastImg",mouse4);
       jerry.scale=0.2;
       jerry.changeAnimation("jerryLastImg");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
       tom.velocityX = -5;
       tom.addAnimation("tomRunning", tomImg2); 
       tom.changeAnimation("tomRunning"); 
       jerry.addAnimation("jerryTeasing", jerryImg2); 
       jerry.frameDelay = 25; 
       jerry.changeAnimation("jerryTeasing");
     }

}
