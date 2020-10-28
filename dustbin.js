class Dustbin{
    constructor(){
        var options={isStatic:true}
        rect1=Bodies.rectangle(1200,350,200,20,options);
        rect2=Bodies.rectangle(1310,310,20,100,options);
        rect3=Bodies.rectangle(1090,310,20,100,options);
        this.image=loadImage("dustbingreen.png");
        World.add(world,rect1);
        World.add(world,rect2);
        World.add(world,rect3);
    }
    display(){
        imageMode(CENTER);
        image(this.image,1200,260,200,200);
    }
}