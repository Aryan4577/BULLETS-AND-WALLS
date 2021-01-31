const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine, world;

function setup() {
  createCanvas(1600,400);
  engine=Engine.create()
  world=engine.world
  thickness=random(22,83)
  wall1=Bodies.rectangle(1550,50,50, 50,{isStatic:true})
  World.add(world,wall1)
  wall2=Bodies.rectangle(1550,130,50, 50,{isStatic:true})
  World.add(world,wall2)
  wall3=Bodies.rectangle(1550,210,50, 50,{isStatic:true})
  World.add(world,wall3)
  wall4=Bodies.rectangle(1550,310,50, 50,{isStatic:true})
  World.add(world,wall4)
  
  Lane1=Bodies.rectangle(800,260,80,80,{isStatic:true})
  World.add(world,Lane1)

  Lane2=Bodies.rectangle(800,170,80,80,{isStatic:true})
  World.add(world,Lane2)

  Lane3=Bodies.rectangle(800,360,80,80,{isStatic:true})
  World.add(world,Lane3)

  Lane4=Bodies.rectangle(800,90,80,80,{isStatic:true})
  World.add(world,Lane4)

  speed=random(223,321)
  weight=random(30,52)
  
}
function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
 rect(wall1.position.x,wall1.position.y,20,50)
 rect(wall2.position.x,wall2.position.y,20,50)
 rect(wall3.position.x,wall3.position.y,20,50)
 rect(wall4.position.x,wall4.position.y,20,50)
 rect(Lane1.position.x,Lane1.position.y,8000,10)
 rect(Lane2.position.x,Lane2.position.y,8000,10)
 rect(Lane3.position.x,Lane3.position.y,8000,10)
 rect(Lane4.position.x,Lane4.position.y,8000,10)
  
}