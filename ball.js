class Ball{
    constructor(x,y,radius){
        var options ={
            restituition:0.3,
            density:1.0,
            friction:0.3,
            isStatic:false
        }
       this.body = Bodies.circle(x,y,radius,options);
       World.add(world,this.body)
    }
    display(){
        var angle = this.angle.position;
        pop();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(this.body,this.body.position.x,this.body.position.y,this.radius);
    }

}