class Bird extends BaseClass {
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
     
    };
    display(){
      var pos = this.body.position;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
     
    };
  };
  