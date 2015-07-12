// SETUP SCENE, CAMERA AND RENDERERS
var tr = THREE

var scene = new tr.Scene()
var camera = new tr.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

var renderer = new tr.WebGLRenderer()
renderer.setSize (window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// DEFAULT GEOMETRY VALUES
var defaultWFMaterial = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true
                        }
                        

// CREATE GEOMETRY FUNCTIONS
function generateCube(geometry, material, objectName){
  if(!geometry){
    geometry = [1,1,1]
  }
  geometry = new tr.BoxGeometry(geometry[0],geometry[1],geometry[2])

  if(!material){
    material = defaultWFMaterial
  }
  material = new tr.MeshBasicMaterial(material)

  var cube = new tr.Mesh(geometry, material)

  if(objectName){
    cube.name = objectName
  }

  scene.add(cube)

  var objectGenerated = scene.children[scene.children.length-1]
}


// MODIFY GEOMETRY FUNCTIONS
function getObject(objectName){
  for(var i = 0; i < scene.children.length; i++){
    if(objectName === scene.children[i].name){
      return scene.children[i]
    }
  }
}


// OBJECT/SCENE GENERATION
generateCube([2,2,2],defaultWFMaterial,'cube1')
generateCube()


// OBJECT/SCENE MODIFICATION
camera.position.z = 5
findObject('cube1').position.y = 2


// RENDER LOOP
function render(){
  requestAnimationFrame(render)

  getObject('cube1').rotation.x += 0.01

  renderer.render(scene, camera)
}
render()