var rows = 10;
var cols = 10;
let score = 0;
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
  createCanvas(600,700);
  w = width/rows;
  gems = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      gems[i][j] = new gem(i*w + w/2, j*w + w / 2, random(colors));
    }
  }
}

function swap(i1,j1,i2,j2){
  var temp = gems[i1][j1].color;
  gems[i1][j1].color = gems[i2][j2].color;
  gems[i2][j2].color = temp;
}

function fall(){
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      if(gems[j][0].color === 'black'){
          gems[j][0].color = random(colors);
      }
      else if(gems[i][j].color === 'black'){
        if(j > 0 ){
          swap(i,j, i,j-1);
        }

       }
    }
  }
}



function checkMatch(){
  let result = [];


  // for(let i = 0; i < rows; i++){
  //   for(let j = 0; j < cols-3; j++){
  //
  //     if(gems[j+1][i].color === gems[j][i].color && gems[j+2][i].color === gems[j][i].color && gems[j+3][i].color === gems[j][i].color){
  //       result.push({x: j, y: i});
  //       result.push({x: j+1, y: i});
  //       result.push({x: j+2, y: i});
  //       result.push({x: j+3, y: i});
  //       return result;
  //     }
  //   }
  // }

  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols-2; j++){

      if(gems[j+1][i].color === gems[j][i].color && gems[j+2][i].color === gems[j][i].color){
        result.push({x: j+1, y: i});
        result.push({x: j, y: i});
        result.push({x: j+2, y: i});
        score += 5;
        return result;
      }
    }

      for(let i = 0; i < rows-2; i++){
        for(let j = 0; j < cols; j++){

          if(gems[j][i+1].color === gems[j][i].color && gems[j][i+2].color === gems[j][i].color){
            result.push({x: j, y: i+1});
            result.push({x: j, y: i});
            result.push({x: j, y: i+2});
            score += 5;
            return result;
          }
        }
      }

  }

  // for(let i = 0; i !== grid[0].length; i++){
  //   if(grid[position.y][position.x].color === grid[position.y][i].color){
  //     // console.log(position);
  //     // console.log(grid[position.y][i].color);
  //     result.push({x: i, y: position.y});
  //   }
  // }

  return result;
}

function mousePressed(){
  for(let i = 0; i < cols; i++){
    for(let j = 0; j < rows; j++){
      if(gems[i][j].clicked()){
        if(gemClicked !== null){
          if ((abs(i-gemClicked.i) === 0 || abs(i-gemClicked.i) === 1) && (abs(j-gemClicked.j) === 0 || abs(j-gemClicked.j) === 1)){
            swap(i,j,gemClicked.i, gemClicked.j);
            if(checkMatch().length > 2){
              console.log("match");
              for(let x = 0; x !== checkMatch().length; x++){
                let match = checkMatch();
                gems[match[0].x][match[0].y].color = 'black';
                gems[match[1].x][match[1].y].color = 'black';
                gems[match[2].x][match[2].y].color = 'black';
              }
              // var temp = gems[i][j].color;
              // gems[i][j].color = gems[gemClicked.i][gemClicked.j].color;
              // gems[gemClicked.i][gemClicked.j].color = temp;
            }
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
  updateScore();
  fall();
  if(checkMatch().length > 2){
    console.log("match");
    console.log(checkMatch());
    for(let x = 0; x !== checkMatch().length; x++){
      let match = checkMatch();
      gems[match[0].x][match[0].y].color = 'black';
      gems[match[1].x][match[1].y].color = 'black';
      gems[match[2].x][match[2].y].color = 'black';
    }

  }

  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      fill(51);
      rect(i*w,j*w,w,w);
      gems[i][j].show();
    }
  }
}
