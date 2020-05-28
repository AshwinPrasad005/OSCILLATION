class Ball{
    constructor(x,y,width,height){
        var options ={
            restituition:0.3
        }
       this.body = Bodies.circle(x,y,width,height,options);
       this.height = height;
       this.width = width;
       
    }
    display(){
        var angle = this.angle.position;
        pop();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(this.body,this.body.position.x,this.body.position.y,this.width,this.height);
    }

}