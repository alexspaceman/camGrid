// ========== SETUP AND GLOBALS / start ==========
// SETUP SCENE, CAMERA AND RENDERERS
const tr = THREE

const scene = new tr.Scene()
const camera = new tr.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new tr.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

document.addEventListener("keydown", onDocumentKeyDown, false)
document.addEventListener("keyup", onDocumentKeyUp, false)
document.addEventListener("mousedown", onDocumentMouseDown, false)
document.addEventListener("mouseup", onDocumentMouseUp, false)

camera.controls = {}
camera.controls.movement = {}
camera.controls.mouse = {}

camera.controls.movement.z      = false
camera.controls.movement.z_     = false
camera.controls.movement.x      = false
camera.controls.movement.x_     = false
camera.controls.movement.y      = false
camera.controls.movement.y_     = false
camera.controls.movement.speed  = 0.1

camera.controls.mouse.leftClick = false
camera.controls.mouse.movingX = false
camera.controls.mouse.movingY = false
camera.controls.mouse.movementX = 0
camera.controls.mouse.movementY = 0


function onDocumentKeyDown (event) {
  var keyCode = event.which
  console.log(keyCode, 'key down')

  switch (keyCode) {
    case 87: camera.controls.movement.z  = true; break // north
    case 83: camera.controls.movement.z_ = true; break // south
    case 68: camera.controls.movement.x  = true; break // east
    case 65: camera.controls.movement.x_ = true; break // west
    case 81: camera.controls.movement.y  = true; break // up
    case 69: camera.controls.movement.y_ = true; break // down
  }
}

function onDocumentKeyUp (event) {
  var keyCode = event.which
  console.log(keyCode, 'key up')

  switch (keyCode) {
    case 87: camera.controls.movement.z  = false; break // north
    case 83: camera.controls.movement.z_ = false; break // south
    case 68: camera.controls.movement.x  = false; break // east
    case 65: camera.controls.movement.x_ = false; break // west
    case 81: camera.controls.movement.y  = false; break // up
    case 69: camera.controls.movement.y_ = false; break // down
  }
}

function onDocumentMouseDown (event) {
  console.log(event, 'mouse down')

  document.addEventListener("mousemove", onDocumentMouseMove, false)

  camera.controls.mouse.leftClick = true
}

function onDocumentMouseUp (event) {
  console.log(event, 'mouse up')

  document.removeEventListener("mousemove", onDocumentMouseMove, false)

  camera.controls.mouse.leftClick = false
}

function onDocumentMouseMove (event) {
  console.log(camera.controls.mouse.movementY, event.movementY)
  camera.controls.mouse.movementX = event.movementX
  camera.controls.mouse.movementY = event.movementY
  console.log(camera.controls.mouse.movementX, camera.controls.mouse.movementY, 'mouse move')

  if (event.movementX) camera.controls.mouse.movingX = true
  else camera.controls.mouse.movingX = false

  if (event.movementY) camera.controls.mouse.movingY = true
  else camera.controls.mouse.movingY = false

  console.log(camera.controls.mouse.movementX, camera.controls.mouse.movementY, 'mouse move')
}


// GLOBAL VARIABLES


// ========== SETUP AND GLOBALS / end ============