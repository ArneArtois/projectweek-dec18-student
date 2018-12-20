function gem(y,x,color) {
  this.color = color;
  this.x = x;
  this.y = y;

  this.show = function(){
    noStroke();
    fill(this.color);
    if (this.color === "red"){
      ellipse(this.y,this.x,40,40);
    }
    else if (this.color === "purple"){
      triangle(this.y, this.x - 25, this.y - 25, this.x + 25, this.y + 25, this.x + 25);
    }
    else if (this.color === "green"){
      ellipse(this.y, this.x, 40, 40);
      rect(this.y - 18.5, this.x - 18.5, 37, 37);
    }
    else if (this.color === "blue"){
      polygon(this.y, this.x, 25, 6);
    }
    else {
      rect(this.y - 20, this.x - 20, 40, 40);
    }
  }

  this.clicked = function(){
    var distance = dist(mouseX, mouseY, this.y, this.x);
    if(distance < 25){
      return true;
    }
  }
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
