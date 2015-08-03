// ========== GEOMETRY MODIFICATION / start ==========
// MODIFY GEOMETRY FUNCTIONS
function getObjectByName (objectName) {
  for(let i = 0; i < scene.children.length; i++){
    if(objectName === scene.children[i].name){
      return scene.children[i]
    }
  }
}

function getObjectById (objectId) {
  for(let i = 0; i < scene.children.length; i++){
    if(objectId === scene.children[i].objId){
      return scene.children[i]
    }
  }
}

function toRadians (degrees) {
  return degrees * (Math.PI / 180)
}

function objNumber () {
  return scene.children.length + 1
}


// DEFAULT GEOMETRY VALUES
let defaultWFMaterial = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true,
                          side:tr.DoubleSide
                        }

let defaultWFPlane    = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true,
                          side:tr.DoubleSide
                        }


// ========== GEOMETRY MODIFICATION / end ============