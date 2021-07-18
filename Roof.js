class Roof{
    constructor(){
        var options = {
            isStatic : true
        }
        this.width = 300;
        this.height = 10;
        this.body = Bodies.rectangle(400,100,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("Yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}