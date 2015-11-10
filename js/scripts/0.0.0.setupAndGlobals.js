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

camera.controls = {}
camera.controls.movement = {}

camera.controls.movement.z = false
camera.controls.movement.z_ = false
camera.controls.movement.x = false
camera.controls.movement.x_ = false
camera.controls.movement.y = false
camera.controls.movement.y_ = false
camera.controls.movement.speed = 0.1


function onDocumentKeyDown(event) {
  var keyCode = event.which
  console.log(keyCode, 'down')

  switch (keyCode) {
    case 87: camera.controls.movement.z = true; break // north
    case 83: camera.controls.movement.z_ = true; break // south
    case 68: camera.controls.movement.x = true; break // east
    case 65: camera.controls.movement.x_ = true; break // west
    case 81: camera.controls.movement.y = true; break // up
    case 69: camera.controls.movement.y_ = true; break // down
  }
}

function onDocumentKeyUp(event) {
  var keyCode = event.which
  console.log(keyCode, 'up')

  switch (keyCode) {
    case 87: camera.controls.movement.z = false; break // north
    case 83: camera.controls.movement.z_ = false; break // south
    case 68: camera.controls.movement.x = false; break // east
    case 65: camera.controls.movement.x_ = false; break // west
    case 81: camera.controls.movement.y = false; break // up
    case 69: camera.controls.movement.y_ = false; break // down
  }
}


// GLOBAL VARIABLES


// ========== SETUP AND GLOBALS / end ============