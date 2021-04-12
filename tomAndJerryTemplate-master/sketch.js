var Cat, Mouse, CatImg, MouseImg, Bg, BgImg, Cat2Img, Cat2, Mouse2Img, Mouse2, Mouse3Img, Cat3Img;


function preload() {
    //load the images here
    BgImg= loadImage("images/garden.png");
MouseImg=loadImage("images/mouse1.png");
CatImg=loadImage("images/cat1.png");

Cat2Img=loadAnimation("images/cat2.png", "images/cat3.png");
Mouse2Img = loadAnimation("images/mouse2.png", "images/mouse3.png");

Cat3Img = loadImage("images/cat4.png")
Mouse3Img = loadImage("images/mouse4.png");
}
    




function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    Cat = createSprite(750, 680);
    Cat.addImage("Cat", CatImg);
    Cat.scale = 0.2

    Mouse = createSprite(100, 650);
    Mouse.addImage("Mouse", MouseImg);
    Mouse.scale = 0.2
}

function draw() {

    background(BgImg);

    //Write condition here to evalute if tom and jerry collide
   if(Cat.x - Mouse.x < Mouse.width/100 + Cat.width
    && Mouse.x - Cat.x < Mouse.width/100 + Cat.width){
       Mouse.addAnimation("Mouse3Img");
       Cat.addAnimation("Cat3Img");
       Cat.velocityX = 0;
      
   }


       Cat.debug = true
       Mouse.debug = true
       
   

    drawSprites();
}


function keyPressed(){
    
  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    Mouse.addImage("Mouse", Mouse3Img);
    Mouse.framDelay = 25;
    Cat.addImage("Cat", Cat3Img);

   
}

   if(keyCode === LEFT_ARROW){
       Mouse.addAnimation("Mouse", Mouse2Img);
       Mouse.framDelay = 25;
       Cat.addAnimation("Cat", Cat2Img);
       Cat.velocityX = -4
   }


}
