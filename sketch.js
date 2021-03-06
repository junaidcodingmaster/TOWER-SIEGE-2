const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImg;

function preload() {
  polygonImg = loadImage("polygon.png");
}

function setup(){
 createCanvas(1200,400);


    engine = Engine.create();
    world = engine.world;

    // polygon holder with strings.
    poly = Bodies.circle(50,200,20);
    World.add(world, poly);

    slingShot = new SlingShot(this.poly,{x:100,y:200});
   

//----------------------------------------------------------

    //ground class.
    ground = new Ground(width/2, 390, width, 10);

    //base1,2 means blocks holding base to hold blocks.
    base1 = new Base(width/2,300,200,20);
    base2 = new Base(1000,150,200,20);

    // line 27 to 44 block Section 1

    //level one
    block1 = new Block(519, 270, 30, 40);
    block2 = new Block(550, 270, 30, 40);
    block3 = new Block(580, 270, 30, 40);
    block4 = new Block(610, 270, 30, 40);
    block5 = new Block(640, 270, 30, 40);
    block6 = new Block(670, 270, 30, 40);
    //level two
    block7 = new Block(550, 230, 30, 40);
    block8 = new Block(580, 230, 30, 40);
    block9 = new Block(610, 230, 30, 40);
    block10 = new Block(640, 230, 30, 40);
    //level three
    block11 = new Block(580, 190, 30, 40);
    block12 = new Block(610, 190, 30, 40);
    //top
    block13 = new Block(595, 150, 30, 40);

 // ----------------------------------------------------------------
  
    // line 50 to 66block Section 2

    //level one
    block14 = new Block(930, 125, 20, 30);
    block15 = new Block(950, 125, 20, 30);
    block16 = new Block(970, 125, 20, 30);
    block17 = new Block(990, 125, 20, 30);
    block18 = new Block(1010, 125, 20, 30);
    block19 = new Block(1030, 125, 20, 30);
   //level 2
   block20 = new Block(950, 95, 20, 30);
   block21 = new Block(970, 95, 20, 30);
   block22 = new Block(990, 95, 20, 30);
   block23 = new Block(1010, 95, 20, 30);
   //level 3
   block24 = new Block(970, 65, 20, 30);
   block25 = new Block(990, 65, 20, 30);
   //top
   block26 = new Block(980, 35, 20, 30  );

// -------------------------------------------------------------------
  
}

function draw(){
    background(56, 44, 44);
    
    imageMode(CENTER);
    image(polygonImg,poly.position.x,poly.position.y,40,40);

    Engine.update(engine);
    
    base1.display();
    base2.display();
    
    ground.display();

    //block section 1
    fill(125, 196, 231);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    fill(255, 200, 20);
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    fill(53, 209, 211);
    block11.display();
    block12.display();
    fill("grey");
    block13.display();

    //block section 2
    fill(125, 196, 231);
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    fill(255, 200, 20);
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    fill(125, 196, 231);
    block24.display();
    block25.display();
    fill("grey");
    block26.display();

    fill("white");
    textSize(25);
    text("Press space bar for second chain😃!!" ,700,350);
   
    slingShot.display();

    drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(this.poly,{x:mouseX,y:mouseY});
    
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.poly);
  }
}
