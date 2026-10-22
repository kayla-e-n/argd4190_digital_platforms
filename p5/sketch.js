let myColors = ["#46292a", "#D6CE93", "#edbead", "#f4d1c4", "#965a5d"]
function setup() {
  createCanvas(800, 800);
  background("#D6CE93");
}

function draw() {

    //back hair
    quad(150, 300, 50, 700, 725, 700, 640, 300);
    ellipse(650, 500, 100, 100)
    ellipse(675, 600, 100, 100)
    ellipse(100, 650, 100, 100)
    ellipse(125, 500, 100, 100)
    //face
    fill("#f4d1c4")
    noStroke()
    ellipse(width/2, height/2, 500, 550);
    //ears
    ellipse(140, 375, 150, 200)
    ellipse(650, 375, 150, 200)
    //earrings
    fill("gold")
    triangle(125, 475, 100, 500, 150, 500);
    triangle(665, 475, 645, 500, 685, 500);
    //glasses
    stroke("#965a5d")
    noFill()
    strokeWeight(3)
    // fill("#edbead")
    ellipse(275, 375, 150, 200)
    arc(500, 375, 150, 200, 150, PI + QUARTER_PI, CHORD);
    ellipse(275, 400, 75, 75);
    stroke("#965a5d")
    strokeWeight(3)
    line(425, 375, 350, 375);
    line(145, 375, 200, 375);
    line(655, 375, 575, 375);
    //eyes
    fill("#684a4b")
    noStroke()
    ellipse(275, 400, 100, 100)
    ellipse(500, 400, 100, 100)
    //nose
    noStroke()
    fill("#edbead")
    triangle(400,475, 400, 400, 415, 415)
    //mouth
    noFill()
    stroke("black")
    arc(450, 550, 50, 50, 0, PI / 2.0);

    //bangs
    fill("#BB8588")
    noStroke()
    quad(300, 145, 150, 350, 150, 350, 150, 200);
    quad(300, 145, 300, 350, 650, 350, 605, 180);
    arc(380, 200, 458, 200, -PI, 0, CHORD);

}
