class B{
    constructor(x,y,width,height){

        var options = {
          restitution: 0.6,
          friction: 0.2,
        }
      this.b = Bodies.rectangle(x,y,width,height,options)

      this.width = width;
      this.height = height;

       World.add(world,this.b)
    }

     display(){
        
        rect(this.b.postion.x,this.b.postion.y,this.width,this.height);

    }

}