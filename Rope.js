class Rope{
    constructor(body1,body2,xOffset){
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB : {x:xOffset,y:0}
        }
        this.body = Constraint.create(options);
        this.offset = xOffset;
        World.add(world, this.body);
    }

    display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        strokeWeight(4);
        stroke("White");
        line(pointA.x,pointA.y,pointB.x+this.offset,pointB.y);
    }
}