// ========== GEOMETRY CREATION / start ==========
function generateTriangle(vertices, material, objectName){
  vertices = vertices || [[0,0,0],[2,3,0],[4,0,0]]

  var geometry = new tr.Geometry()
  geometry.vertices.push(new tr.Vector3(vertices[0][0],vertices[0][1],vertices[0][2]))
  geometry.vertices.push(new tr.Vector3(vertices[1][0],vertices[1][1],vertices[1][2]))
  geometry.vertices.push(new tr.Vector3(vertices[2][0],vertices[2][1],vertices[2][2]))
  geometry.faces.push(new tr.Face3(0,1,2))

  material = material || new tr.MeshBasicMaterial(defaultWFPlane)

  var triangle = new tr.Mesh(geometry, material)

  triangle.name = objectName || 'unknown'

  scene.add(triangle)
}

// check new format, delete old format
function generateTriangle_new (options) {
  options = options || {}
  options.name = options.name || 'triangle' + (scene.children.length)
  options.size = options.size || 1
  options.material = options.material || defaultWFPlane
  options.vertices = options.vertices || [
    [0,0,0], [2*options.size,3*options.size,0], [4*options.size,0,0]
  ]

  for (var i = 0; i < options.vertices.length; i++) {
    options.vertices[i] = options.vertices[i] * options.size
    for (var j = 0; j < options.vertices[i].length; j++) {
      options.vertices[i][j] = options.vertices[i][j] * options.size
    }
  }

  var geometry = new tr.Geometry()
  geometry.vertices.push(new tr.Vector3(options.vertices[0][0],options.vertices[0][1],options.vertices[0][2]))
  geometry.vertices.push(new tr.Vector3(options.vertices[1][0],options.vertices[1][1],options.vertices[1][2]))
  geometry.vertices.push(new tr.Vector3(options.vertices[2][0],options.vertices[2][1],options.vertices[2][2]))
  geometry.faces.push(new tr.Face3(0,1,2))

  var material = new tr.MeshBasicMaterial(options.material)

  var triangle = new tr.Mesh(geometry, material)
  triangle.name = options.name

  scene.add(triangle)
}

// rewrite to new format
function generateCube(geometry, material, objectName){
  geometry = geometry || [1,1,1]
  geometry = new tr.BoxGeometry(...geometry)

  material = material || defaultWFMaterial
  material = new tr.MeshBasicMaterial(material)

  var cube = new tr.Mesh(geometry, material)

  cube.name = objectName || 'unknown'

  scene.add(cube)
}

// rewrite to new format
function generatePlane(geometry, material, objectName){
  geometry = geometry || [5,5]
  geometry = new tr.PlaneGeometry(geometry[0],geometry[1])

  material = material || defaultWFPlane
  material = new tr.MeshBasicMaterial(material)

  var plane = new tr.Mesh(geometry, material)

  plane.name = objectName || 'unknown'

  scene.add(plane)
}

function generateHex (options) {
  options = options || {}
  options.name = options.name || 'hex' + objNumber()
  options.id = options.id || objNumber()
  options.size = options.size || 1
  options.origin = options.origin || new tr.Vector3(0, 0, 0)
  options.vertices = options.vertices || hexVerticesValue
  options.material = options.material || defaultWFMaterial

  let geometry = new tr.Geometry()

  geometry.vertices = options.vertices

  geometry.faces.push(
    new tr.Face3(0, 1, 2)
  , new tr.Face3(0, 2, 3)
  , new tr.Face3(0, 3, 4)
  , new tr.Face3(0, 4, 5)
  , new tr.Face3(0, 5, 6)
  , new tr.Face3(0, 6, 1)
  )

  let material = new tr.MeshBasicMaterial(options.material)
  let newGameObject = new tr.Mesh(geometry, material)
  newGameObject.name = options.name
  newGameObject.objId = options.id
  scene.add(newGameObject)
}


// ========== GEOMETRY CREATION / end ============
