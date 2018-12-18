var rows = 10;
var cols = 10;
let w;
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let gemClicked = null;

function make2DArray(cols, rows){
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++){
    arr[i] = new Array(rows);
  }
  return arr;
}



function setup() {
  createCanvas(400,400);
  w = width/rows;
  gems = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      gems[i][j] = new gem(i*w + w/2, j*w + w / 2, random(colors));
    }
  }
}

function mousePressed(){
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      if(gems[i][j].clicked()){
        if(gemClicked !== null){
          var temp = gems[i][j].color;
          console.log(gems[i][j]);
          gems[i][j].color = gems[gemClicked.i][gemClicked.j].color;
          gems[gemClicked.i][gemClicked.j].color = temp;
          console.log(gems[i][j]);
          gemClicked = null;
          redraw();
          return;
        }
        gemClicked = {i: i, j: j};
      }
    }
  }
}

function draw() {
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      gems[i][j].show();
    }
  }
}
