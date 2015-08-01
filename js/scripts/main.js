// SETUP SCENE, CAMERA AND RENDERERS
var tr = THREE

var scene = new tr.Scene()
var camera = new tr.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

var renderer = new tr.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// DEFAULT GEOMETRY VALUES
var defaultWFMaterial = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true
                        }

var defaultWFPlane    = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true,
                          side:tr.DoubleSide
                        }

// MODIFY GEOMETRY FUNCTIONS
function getObject(objectName){
  for(var i = 0; i < scene.children.length; i++){
    if(objectName === scene.children[i].name){
      return scene.children[i]
    }
  }
}


// // OBJECT/SCENE GENERATION
// generateCube([2,2,2], defaultWFMaterial, 'cube1')
// generateCube()
// generatePlane([5,5], defaultWFPlane, 'plane1')
// generatePlane()


// OBJECT/SCENE MODIFICATION
camera.position.z = 15
// getObject('cube1').position.y = 2
// getObject('plane1').position.y = -2


// RENDER LOOP
function render(){
  requestAnimationFrame(render)

  // getObject('cube1').rotation.x += 0.01
  // getObject('plane1').rotation.y += 0.01
  // getObject('triangle1').rotation.y += 0.01
  getObject('hex1').rotation.y += 0.01

  renderer.render(scene, camera)
}
render()