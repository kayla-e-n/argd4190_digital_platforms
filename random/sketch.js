let particles = []
let num = 1000
let scaleValue = 0.00001
let speed = 1.5

let colorA, colorB

function setup() {
  createCanvas(800, 800)
  background('#290628')
  colorA = color('#A3C4BC')
  colorB = color('#BFD7B5')
  for (let i = 0 * 0.5; i < num; i++) {
    particles.push(makeParticle())
  }
}

function makeParticle() {
  return {
    x: random(width),
    y: random(height),
    life: random(300, 300)
  }
}

function draw() {
  background(20, 22, 31, 8)

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]

    let n = noise(p.x * scaleValue, p.y * scaleValue, frameCount * 0.01)
    let angle = n * PI * 2

    p.x += cos(angle) * speed
    p.y += sin(angle) * speed
    p.life = 10

    stroke(lerpColor(colorA, colorB, map(n, 0.3, 0.7, 0, 1, true)))
    strokeWeight(10)
    point(p.x, p.y)

    if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
      particles[i] = makeParticle()
    }
  }
}
