class Stick{
    constructor(x,y,width,height){
        var opions={
        isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,opions);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.angle.body;
        pop();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.body,pos.x,pos.y,this.width,this.height);
        push();

    }
}