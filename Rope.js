class Rope {
  constructor(pointA,bodyB){
   var options = {pointA:pointA,    
              bodyB:bodyB,
             stiffness:0.05,
             lenght:250}
             this.pointA = pointA;
    this.body  = Constraint.create(options);
   World.add(world,this.body);
 
  }
 
  display(){
    var pointA = this.pointA;
    var pointB = this.body.bodyB.position;

    
    strokeWeight(4);
line (pointA.x,pointA.y,pointB.x,pointB.y);
  }
 }