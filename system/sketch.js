let myData
// let img

async function setup() {
//   img = await loadImage('assets/blackening.png');
  createCanvas(1500, 900);
  background(50);
  myData = await loadJSON('horror-data.json');
  console.log(myData)

    // Draw the image.
//   image(img, 0, 0, );
}
function draw(){
    for (let i = 0; i < myData.length; i++) {
    let blood = myData[i]
    let x =(i+1) * 100
    let y
    let num = map(blood.gore, 0, 100, 3, 7)
    if (blood.gore === 1) {
        y = height - height * 0.1
    } else if (blood.gore === 2) {
        y = height - height * 0.2
    // } else if (blood.gore === 3) {
    //     y = height - height * 0.3
    // } else if ()
}
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

