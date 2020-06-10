class Ball{
    constructor(x,y,radius){
        var options ={
            density:1.0,
            friction:0.3,
            isStatic:false
        }
       this.body = Bodies.circle(x,y,radius,options);
       World.add(world,this.body)
    }
    display(){
        //var angle = this.angle.body;
        pop();
        //translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        ellipseMode(CENTER);
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        push();
    }

}