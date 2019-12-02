const canvas = document.getElementsByClassName('canvas')[0]
let snow = []
const nrOfFlakes = 500
const flakeRadius = 2

for (var i = 0; i < nrOfFlakes; i++) {
  const x = Math.random() * window.innerWidth
  const y = Math.random() * window.innerHeight

  // Speed
  const dx = 1
  const dy = 1

  snow.push(new SnowFlake(x, y, dx, dy, flakeRadius))
}

function SnowFlake(x, y, dx, dy, radius) {
  this.x = x
  this.y = y
  this.dx = dx
  this.dy = dy
  this.radius = radius

  this.draw = function(context) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    context.fillStyle = 'rgb(255, 255, 255, 0.7)'
    context.fill()
  }

  this.update = function(context) {
    if (this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y - this.radius < 0) {
      this.dy = -this.dy
    }

    this.x += this.dx
    this.y += this.dy

    this.draw(context)
  }
}

function init() {
  window.requestAnimationFrame(draw)
}

function draw() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  var context = canvas.getContext('2d')

  for (var i = 0; i < nrOfFlakes; i++) {
    snow[i].update(context)
  }
  window.requestAnimationFrame(draw)
}

init()
