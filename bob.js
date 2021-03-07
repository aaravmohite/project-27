class Bob { 
    constructor(x, y) { 
        var options = { 
            isStatic:true, 
            'restitution':0.3, 
            'friction':0.5, 
            'density':1.2 }
             this.body = Bodies.circle(x, y, 2, options); 
             this.radius = 25; 
             this.height = 25; 
             World.add(world, this.body); 
            } 
            display(){
                 var pos = this.body.position; 
                 push (); 
                ellipseMode(RADIUS); 
    strokeWeight (2); 
    stroke (255, 255, 255);
     fill(255, 0, 61); 
     ellipse (pos.x, pos.y, 25, 25); 
     pop();
     } 
    }
     