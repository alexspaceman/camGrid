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