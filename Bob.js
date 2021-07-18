class Bob{
    constructor(x,y){
        var options = {
            restitution : 0.8,
            friction : 0.1,
            density : 0.8
        }
        this.radius = 25;
        
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("Red");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}