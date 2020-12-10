const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine, myworld;
function setup() 
{
  createCanvas(400,400);
  myengine= Engine.create();
  
  myworld= myengine.world;

  var mybody_options={ isStatic:true }

  ground= Bodies.rectangle(200,390,400,20, mybody_options);
  World.add(myworld,ground)

  console.log(ground);
  var ball_options ={ restitution: 0.8}

   ball= Bodies.circle(200,200,20,ball_options)
   World.add(myworld,ball)
  

//json
/*var mybody_options= {
  isStatic: true
}
  mybody= Bodies.rectangle(100,100,20,20,mybody_options);
  World.add(myworld,mybody);
  console.log(mybody)
  */
}

function draw()
 {
  background("lightgreen"); 
  Engine.update(myengine);

  rectMode(CENTER) 
  //rect(200,200,50,50)
  rect(ground.position.x, ground.position.y,400,20);
//rect(mybody.position.x,mybody.position.y,20,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y ,20,20)

}
  