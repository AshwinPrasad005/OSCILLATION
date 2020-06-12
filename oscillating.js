class Oscillating{
    constructor(bodyA1, bodyB1){
        var options = {
            bodyA: bodyA1.body,
            bodyB: bodyB1.body,
            stiffness: 0.004,
            length: 5
        }
        this.sling = Constraints.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(3);
        stroke("black")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y);
    }
    // attach(body){
    //     this.body.
    // }
}