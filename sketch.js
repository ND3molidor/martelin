const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var bola,pedra,ferro;

var posx,posy;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    bola = new Rubber(800,500,60);
   pedra = new Pedra(500,500);
   ferro = new Ferro(200,500);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    bola.display();
    pedra.display();
    ferro.display();
    
    posx = mouseX;
    posy = mouseY;
     text(posx + ","+ posy ,posx ,posy);
}