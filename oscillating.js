class Oscillating{
    constructor(bodyA1, bodyB1){
        var options = {
            bodyA: bodyA1.body,
            bodyb: bodyB1.body,
            stiffness: 0.004,
            length: 5
        }
        this.sling = Constraints.create(options);
        World.add(world, this.sling);
    }

    display(){
        strokeWeight(3);
        line(this.sling.bodyA1.position.x,this.sling.bodyA1.position.y,this.sling.bodyB1.position.x,this.sling.BodyB1.position.y);
    }
    // attach(body){
    //     this.body.
    // }
}