const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, stone1, stone2, rubber1, rubber2, iron1, iron2, iron3, iron4 , iron5;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(1000,10,90);
    rubber2 = new Rubber(300,10,50);
    stone1 = new Stone(200,10,60,80);
    stone2 = new Stone(100,10,70,35)
    iron1 = new Iron(500,10,15,15)
    iron2 = new Iron(600,10,15,15)
    iron3 = new Iron(800,10,15,15)
    iron4 = new Iron(400,10,15,15)
    iron5 = new Iron(550,10,15,15)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    stone1.display();
    stone2.display();
    iron1.display();
    iron2.display();
    iron3.display();
    iron4.display();
    iron5.display();
    
 
}