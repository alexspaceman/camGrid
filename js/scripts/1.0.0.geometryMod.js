// ========== GEOMETRY MODIFICATION / start ==========
// MODIFY GEOMETRY FUNCTIONS
function getObject (objectName) {
  for(var i = 0; i < scene.children.length; i++){
    if(objectName === scene.children[i].name){
      return scene.children[i]
    }
  }
}

function objNumber () {
  return scene.children.length + 1
}


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


// ========== GEOMETRY MODIFICATION / end ============