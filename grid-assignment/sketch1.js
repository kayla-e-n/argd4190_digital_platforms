let gridSize = 100
let cols, rows
function setup() {
  createCanvas(800, 800);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function draw() {
  background("#197278");
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        push();
        // rotate(frameCount / -100.0);
      let x = i * gridSize + gridSize/2
      let y = j * gridSize + gridSize/2
        pop()
      
      if (i % 2 === 0) {
        //face
        noStroke()
        fill("yellow")
      } else {
        noStroke()
        fill("pink")
      }
      push()
        translate(x, y)
        let upValue = map(sin(frameCount*0.1+i+j), -1, 1, -10, 10)
        translate(0,upValue)
        // rotate((frameCount*0.01+i+j))
      circle(x, y, gridSize * 0.8)
        stroke("black")
        noFill()
        arc(x,y,gridSize/2, gridSize/2,0,PI)
      
      //eyes
    //   if ((i+j) % 2 === 0) { // using the "%" mudulo
        translate(x, y)
        fill("black")
        rectMode(CENTER)
        rect(0-gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // leftE
        rect(0+gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // rightE
      pop()
        // rectMode(CENTER)
        // rect(x-gridSize/4, y, gridSize * 0.1,gridSize * 0.2)
        // rect(x+gridSize/4, y, gridSize * 0.1,gridSize * 0.2)
      }
      
    }
    
  }