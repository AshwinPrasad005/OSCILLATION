class Oscillating{
    constructor(bodyA1, point){
        var options = {
            bodyA: bodyA1.body,
            pointB: point,
            stiffness: 0.004,
            length: 5
        }
        this.sling = Constraints.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(4);
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y);
    }
    // attach(body){
    //     this.body.
    // }
}