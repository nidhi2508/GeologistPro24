const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var hammer, plane, rubber, stone, iron;

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,600);

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,120,40);
    stone = new Stone(240,400,100,50);
    iron = new Iron(720,350,60,120);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}