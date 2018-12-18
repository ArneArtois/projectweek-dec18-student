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
  createCanvas(600,600);
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
          if ((abs(i-gemClicked.i) === 0 || abs(i-gemClicked.i) === 1) && (abs(j-gemClicked.j) === 0 || abs(j-gemClicked.j) === 1)){
            var temp = gems[i][j].color;
            gems[i][j].color = gems[gemClicked.i][gemClicked.j].color;
            gems[gemClicked.i][gemClicked.j].color = temp;
          }
          gemClicked = null;
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
      fill(51);
      rect(i*w,j*w,w,w);
      gems[i][j].show();
    }
  }
}
