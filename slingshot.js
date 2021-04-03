class Slingshot{
    //Constructor is like a setup and Dispay is like a Draw of a class.
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.04
        }
        this.body = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.body);


    }
    //making bodyA empty
    fly(){
        this.body.bodyA = null;

    }

    display(){
        //nameSpacing
        //to draw a line btw the obj only when bodyA is present
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            
            
            // line(x1,y1,x2,y2) 
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
      

    }


}
