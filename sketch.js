
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes = [];
var gSlider;
var ground;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
}
 
function mousePressed() {
    if (mouseY < 350) {
        Box();
    }
}
 
function draw() {

    background(51);
    var fVal = gSlider.value();
 
    if(mousePressed) {
        mousePressed();
    }

    drawSprites();
}
 
function Box(x, y, w, h, options) {
    var options = {restitution:1.0,friction:1.0}
    createSprite(200,200,random(10,30),random(10,30));
    }
}