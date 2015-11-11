// ========== SETUP AND GLOBALS / start ==========
// SETUP SCENE, CAMERA AND RENDERERS
const tr = THREE

const scene = new tr.Scene()
const camera = new tr.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new tr.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// CONTROLS
var controller = {}
controller.modifiers = {}
camera.controls = {}
camera.controls.movement = {}
camera.controls.mouse = {}

camera.controls.movement.z      = false
camera.controls.movement.z_     = false
camera.controls.movement.x      = false
camera.controls.movement.x_     = false
camera.controls.movement.y      = false
camera.controls.movement.y_     = false

camera.controls.mouse.leftClick = false
camera.controls.mouse.moving    = false
camera.controls.mouse.movementX = 0
camera.controls.mouse.movementY = 0

controller.modifiers.shift      = false


// GLOBAL VARIABLES
camera.controls.movement.speedBase  = 0.1
camera.controls.movement.speed      = camera.controls.movement.speedBase
camera.controls.mouse.rotationSpeed = 0.005
controller.modifiers.shiftSpeed     = 5


// EVENT LISTENERS
document.addEventListener("keydown", onDocumentKeyDown, false)
document.addEventListener("keyup", onDocumentKeyUp, false)
document.addEventListener("mousedown", onDocumentMouseDown, false)
document.addEventListener("mouseup", onDocumentMouseUp, false)


// EVENT FUNCTIONS
function onDocumentKeyDown (event) {
  var keyCode = event.which
  console.log(keyCode, 'key down')

  switch (keyCode) {
    case 87: camera.controls.movement.z   = true; break // north
    case 83: camera.controls.movement.z_  = true; break // south
    case 68: camera.controls.movement.x   = true; break // east
    case 65: camera.controls.movement.x_  = true; break // west
    case 69: camera.controls.movement.y   = true; break // up
    case 81: camera.controls.movement.y_  = true; break // down

    case 16: controller.modifiers.shift   = true; break // shift
  }
}

function onDocumentKeyUp (event) {
  var keyCode = event.which
  console.log(keyCode, 'key up')

  switch (keyCode) {
    case 87: camera.controls.movement.z   = false; break // north
    case 83: camera.controls.movement.z_  = false; break // south
    case 68: camera.controls.movement.x   = false; break // east
    case 65: camera.controls.movement.x_  = false; break // west
    case 69: camera.controls.movement.y   = false; break // up
    case 81: camera.controls.movement.y_  = false; break // down

    case 16: controller.modifiers.shift   = false; break // shift
  }
}

function onDocumentMouseDown (event) {
  // console.log(event, 'mouse down')

  document.addEventListener("mousemove", onDocumentMouseMove, false)

  camera.controls.mouse.leftClick = true
}

function onDocumentMouseUp (event) {
  // console.log(event, 'mouse up')

  document.removeEventListener("mousemove", onDocumentMouseMove, false)

  camera.controls.mouse.leftClick = false
}

function onDocumentMouseMove (event) {
  // console.log(event)

  camera.controls.mouse.movementX = event.movementX
  camera.controls.mouse.movementY = event.movementY
  camera.controls.mouse.moving = true
}


// ========== SETUP AND GLOBALS / end ============