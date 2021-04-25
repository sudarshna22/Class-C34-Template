class Ball {
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      
      
      ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  }