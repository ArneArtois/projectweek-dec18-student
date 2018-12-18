function gem(x,y,color) {
  this.color = color;
  this.x = x;
  this.y = y;

  this.show = function(){
    fill(this.color);
    ellipse(this.x,this.y,35,35);
  }

  this.clicked = function(){
    var distance = dist(mouseX, mouseY, this.x, this.y);
    if(distance < 17.5){
      return true;
    }
  }
}
