const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine;
let world;
let canvas;
let bg;
let bgImg;
let ground;
let platform;
let box1,box2,box3,box4,box5;

function preload(){
    getBackgroundImg();

}

function setup(){
    canvas = createCanvas(1200,400);
    canvas.position(15,70);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground (150,305,300,170);

    //primeiro andar
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    //segundo andar
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    //teto
    box5 = new Box(810,100,70,70);

}

function draw (){
    background(backgroundImg);

    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();

    box5.display();
    
    platform.display();
}

function getBackgroundImg(){
    let hour = new Date ().getHours();
    if(hour >= 6 && hour < 18){
        bg = "assets/bg.png";
    }
    else{
        bg = "assets/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}
