class Oscillating{
    constructor(body1, point){
        var options = {
            bodyA: body1,
            pointB: point,
            stiffness: 0.004,
            length: 5
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
}