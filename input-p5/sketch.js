let circleNumSlider
let circleGapSlider
let fromColorPicker
let toColorPicker
// //lines1
// let lines1NumSlider
// let lines1LenSlider
// let lines1DistSlider
// let lines1ColorPicker
// let lines1SpinSlider
// // let lines1StrokeWeightSlider
// let showLines1Checkbox

//circles2
let circle2NumSlider
let circle2DistSlider
let circle2SpinSlider
let circle2ColorPicker

// //lines2
// let lines2NumSlider
// let lines2LenSlider
// let lines2DistSlider
// let lines2ColorPicker
// let lines2SpinSlider
// // let lines2StrokeWeightSlider

function setup() {
    createCanvas(400, 400)
    noFill()
    strokeWeight(10)
    //circles
    createP("circle)")
    createElement('label', 'num')
    circleNumSlider = createSlider(1, 15, 8)
    createElement('label', 'gap')
    circleGapSlider = createSlider(50, 150, 50, 5)
    fromColorPicker = createColorPicker("#9FC2CC")
    toColorPicker = createColorPicker("#1B5299")
    //lines1
    // createP('Lines 1')
    // createElement('label', 'num')
    // lines1NumSlider = createSlider(1, 12, 15)
    // createElement('label', 'length')
    // lines1LenSlider = createSlider(30, 150, 60)
    // createElement('label', 'distance')
    // lines1DistSlider = createSlider(0, 150, 100)
    // lines1ColorPicker = createColorPicker("#F1ECCE")
    // createElement('label', 'spin')
    // lines1SpinSlider = createSlider(0, 360, 60)
    // // createElement('label', 'thickness')
    // // lines1StrokeWeightSlider = createSlider(10, 40, 10)
    // showLines1Checkbox = createCheckbox('show', true);

    //cirlces2
    createP("circle 2")
    createElement('label', 'num')
    circle2NumSlider = createSlider(1, 15, 10)
    // createElement('label', 'gap')
    // circleGapSlider = createSlider(50, 150, 50, 5)
    createElement('label', 'distance')
    circle2DistSlider = createSlider(0, 150, 100)
    // circle2SpinSlider = createSlider(0, 360, 60)
    circle2ColorPicker = createColorPicker("#F1ECCE")


    // //lines2
    // createP('Lines 2')
    // createElement('label', 'num')
    // lines2NumSlider = createSlider(1, 12, 15)
    // createElement('label', 'length')
    // lines2LenSlider = createSlider(30, 150, 60)
    // createElement('label', 'distance')
    // lines2DistSlider = createSlider(0, 150, 100)
    // lines2ColorPicker = createColorPicker("#694D75")
    // createElement('label', 'spin')
    // lines2SpinSlider = createSlider(0, 360, 60)
    // // createElement('label', 'thickness')
    // // lines2StrokeWeightSlider = createSlider(10, 40, 10)
}

function draw() {
    background ("#331832");
    translate(width/2, height/2)
    drawCircles()
    // if (showLines1Checkbox.checked()) {
    // drawLines1()
//   }
    // drawLines2()
    drawCircles2()

}

function drawCircles() {
    let num = circleNumSlider.value()
    let gap = circleGapSlider.value()
    let from = color(fromColorPicker.value())
    let to = color(toColorPicker.value())
    for(let i = 0; i < num; i++) {
        push()
        stroke(lerpColor(from, to, i/num))
        circle(0,0, (i+1) * gap)
        pop()
    }
}
//circles2
function drawCircles2() {
    let num = circle2NumSlider.value()
    let c1 = color(circle2ColorPicker.value())
    // let from = color(from2ColorPicker.value())
    // let to = color(to2ColorPicker.value())
    for(let i = 0; i < num; i++) {
        push()
        fill(c1)
        noStroke()
        // translate(circle2DistSlider.value() ,0)
        rotate(i/num * TWO_PI)
        translate(circle2DistSlider.value() ,-100) // dist from center
        // rotate(radians(circle2SpinSlider.value()))
        circle(0,30, (i*4))
        pop()
    }
}

// function drawLines1() {
//   let num = lines1NumSlider.value()  // slider input
//   let len = lines1LenSlider.value() //// slider input
//   let c = color(lines1ColorPicker.value())
//   for(let i = 0; i < num; i++) {
//     push()
//     // strokeWeight(lines1StrokeWeightSlider.value())
//     stroke(c) // color picker
//     rotate(i/num * TWO_PI)
//     translate(lines1DistSlider.value() ,0) // dist from center
//     rotate(radians(lines1SpinSlider.value())) // slider input
//     line(-len/2,0,len/2,0)
//     pop()
//   }
// }

// function drawLines2() {
//   let num = lines2NumSlider.value()  // slider input
//   let len = lines2LenSlider.value() //// slider input
//   let c = color(lines2ColorPicker.value())
//   for(let i = 0; i < num; i++) {
//     push()
//     // strokeWeight(lines2StrokeWeightSlider.value())
//     stroke(c) // color picker
//     rotate(i/num * TWO_PI)
//     translate(lines2DistSlider.value() ,0) // dist from center
//     rotate(-radians(lines2SpinSlider.value())) // slider input
//     line(-len/2,0,len/2,0)
//     pop()
//   }
// }