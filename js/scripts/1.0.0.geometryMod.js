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


// GEOMETRY HELPERS
function hexVertices (options) {
  if (!options) {
    options = {}
  }
  if (!options.gridCellWidth) {
    options.gridCellWidth = 1
  }

  let vertices = [
    new tr.Vector3(0, 0, 0)
  , new tr.Vector3(2 * options.gridCellWidth, 3 * options.gridCellWidth, 0)
  , new tr.Vector3(4 * options.gridCellWidth, 0, 0)
  , new tr.Vector3(2 * options.gridCellWidth, -3 * options.gridCellWidth, 0)
  , new tr.Vector3(-2 * options.gridCellWidth, -3 * options.gridCellWidth, 0)
  , new tr.Vector3(-4 * options.gridCellWidth, 0, 0)
  , new tr.Vector3(-2 * options.gridCellWidth, 3 * options.gridCellWidth, 0)
  ]

  return vertices
}


// DEFAULT GEOMETRY VALUES
const defaultWFMaterial = {
                          color:'rgb(200,200,200)',
                          opacity:1,
                          transparent:true,
                          wireframe:true,
                          side:tr.DoubleSide
                        }

const defaultWFPlane    = {
                          color:'rgb(200,200,200)',
                          opacity:0.5,
                          transparent:true,
                          wireframe:true,
                          side:tr.DoubleSide
                        }

const hexVerticesValue = hexVertices()


// ========== GEOMETRY MODIFICATION / end ============