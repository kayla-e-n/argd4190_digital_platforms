let myData
// let img
let myImages = {}

async function setup() {
//   img = await loadImage('assets/blackening.png');
  createCanvas(1500, 900);
  background(150);
  myData = await loadJSON('horror-data.json');
  console.log(myData)
  rectMode(CENTER)
  imageMode(CENTER)
    // Draw the image.
//   image(img, 0, 0, );

    myImages = {
        "bodies bodies bodies": await loadImage("assets/bodies-bodies-bodies.png"),
        "resident evil": await loadImage("assets/resident-evil.png"),
        "good boy": await loadImage("assets/good-boy.png"),
        "the blackening": await loadImage("assets/blackening.png"),
        "scream": await loadImage("assets/scream.png"),
        "tucker and dale vs evil": await loadImage("assets/tucker-and-dale.png"),
        "ready or not": await loadImage( "assets/ready-or-not.png"),
        "ready or not 2: here i come": await loadImage("assets/ready-or-not-2.png"),
        "five nights at freddy's": await loadImage("assets/fnaf.png"),
        "obsession": await loadImage("assets/obsession.png")
    }
    console.log(myImages)
}
function draw(){
    for (let i = 0; i < myData.length; i++) {
        let blood = myData[i]
        let x =(i+1) * 100
        let y = height - 20
        let bloodNum = blood.gore
        let title = blood.titles
        let movieImg = myImages[title]
        // each movie
        push()
        translate(x, y)
        for(let j = 0; j < bloodNum; j++) {
            let bloodY = j * -60
            // bloods
            push()
            fill("red")
            translate(0, bloodY)
            rotate(radians(130))
            rect(0, 0, 30, 30, 15, 15, 15, 0)
            pop()
            
        }
        // rect(0, 0, 20, 20)
        // face
            push()
            let faceY = -(60 * bloodNum)
            translate(0, faceY)
            circle(0, 0, 50)
            image(movieImg, 0,0, 70, 70)
            pop()
        pop()

    }
}
function drawBlood(x, y, num, gore) {
    push()
    translate(x, y)
    strokeWeight(3)
    stroke("#A52422")
    line(0,0,0,height-y)
    pop()
}

