// ========== SETUP AND GLOBALS / start ==========
// SETUP SCENE, CAMERA AND RENDERERS
"use strict";

var tr = THREE;

var scene = new tr.Scene();
var camera = new tr.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new tr.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

document.addEventListener("keydown", onDocumentKeyDown, false);
document.addEventListener("keyup", onDocumentKeyUp, false);
document.addEventListener("mousedown", onDocumentMouseDown, false);
document.addEventListener("mouseup", onDocumentMouseUp, false);

camera.controls = {};
camera.controls.movement = {};
camera.controls.mouse = {};

camera.controls.movement.z = false;
camera.controls.movement.z_ = false;
camera.controls.movement.x = false;
camera.controls.movement.x_ = false;
camera.controls.movement.y = false;
camera.controls.movement.y_ = false;
camera.controls.movement.speed = 0.1;

camera.controls.mouse.leftClick = false;
camera.controls.mouse.moving = false;
camera.controls.mouse.movementX = 0;
camera.controls.mouse.movementY = 0;
camera.controls.mouse.rotationSpeed = 0.01;

function onDocumentKeyDown(event) {
  var keyCode = event.which;
  console.log(keyCode, 'key down');

  switch (keyCode) {
    case 87:
      camera.controls.movement.z = true;break; // north
    case 83:
      camera.controls.movement.z_ = true;break; // south
    case 68:
      camera.controls.movement.x = true;break; // east
    case 65:
      camera.controls.movement.x_ = true;break; // west
    case 81:
      camera.controls.movement.y = true;break; // up
    case 69:
      camera.controls.movement.y_ = true;break; // down
  }
}

function onDocumentKeyUp(event) {
  var keyCode = event.which;
  console.log(keyCode, 'key up');

  switch (keyCode) {
    case 87:
      camera.controls.movement.z = false;break; // north
    case 83:
      camera.controls.movement.z_ = false;break; // south
    case 68:
      camera.controls.movement.x = false;break; // east
    case 65:
      camera.controls.movement.x_ = false;break; // west
    case 81:
      camera.controls.movement.y = false;break; // up
    case 69:
      camera.controls.movement.y_ = false;break; // down
  }
}

function onDocumentMouseDown(event) {
  console.log(event, 'mouse down');

  document.addEventListener("mousemove", onDocumentMouseMove, false);

  camera.controls.mouse.leftClick = true;
}

function onDocumentMouseUp(event) {
  console.log(event, 'mouse up');

  document.removeEventListener("mousemove", onDocumentMouseMove, false);

  camera.controls.mouse.leftClick = false;
}

function onDocumentMouseMove(event) {
  // console.log(event)
  camera.controls.mouse.movementX = event.movementX;
  camera.controls.mouse.movementY = event.movementY;
  camera.controls.mouse.moving = true;
}

// GLOBAL VARIABLES

// ========== SETUP AND GLOBALS / end ============
// ========== GEOMETRY MODIFICATION / start ==========
// MODIFY GEOMETRY FUNCTIONS
'use strict';

function getObjectByName(objectName) {
  for (var i = 0; i < scene.children.length; i++) {
    if (objectName === scene.children[i].name) {
      return scene.children[i];
    }
  }
}

function getObjectById(objectId) {
  for (var i = 0; i < scene.children.length; i++) {
    if (objectId === scene.children[i].objId) {
      return scene.children[i];
    }
  }
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function objNumber() {
  return scene.children.length + 1;
}

// GEOMETRY HELPERS
function hexVertices(options) {
  if (!options) {
    options = {};
  }
  if (!options.gridCellWidth) {
    options.gridCellWidth = 1;
  }

  var vertices = [new tr.Vector3(0, 0, 0), new tr.Vector3(2 * options.gridCellWidth, 3 * options.gridCellWidth, 0), new tr.Vector3(4 * options.gridCellWidth, 0, 0), new tr.Vector3(2 * options.gridCellWidth, -3 * options.gridCellWidth, 0), new tr.Vector3(-2 * options.gridCellWidth, -3 * options.gridCellWidth, 0), new tr.Vector3(-4 * options.gridCellWidth, 0, 0), new tr.Vector3(-2 * options.gridCellWidth, 3 * options.gridCellWidth, 0)];

  return vertices;
}

// DEFAULT GEOMETRY VALUES
var defaultWFMaterial = {
  color: 'rgb(200,200,200)',
  opacity: 1,
  transparent: true,
  wireframe: true,
  side: tr.DoubleSide
};

var defaultWFPlane = {
  color: 'rgb(200,200,200)',
  opacity: 0.5,
  transparent: true,
  wireframe: true,
  side: tr.DoubleSide
};

var hexVerticesValue = hexVertices();

// ========== GEOMETRY MODIFICATION / end ============
// ========== GEOMETRY CREATION / start ==========
'use strict';

var _bind = Function.prototype.bind;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function generateTriangle(vertices, material, objectName) {
  vertices = vertices || [[0, 0, 0], [2, 3, 0], [4, 0, 0]];

  var geometry = new tr.Geometry();
  geometry.vertices.push(new tr.Vector3(vertices[0][0], vertices[0][1], vertices[0][2]));
  geometry.vertices.push(new tr.Vector3(vertices[1][0], vertices[1][1], vertices[1][2]));
  geometry.vertices.push(new tr.Vector3(vertices[2][0], vertices[2][1], vertices[2][2]));
  geometry.faces.push(new tr.Face3(0, 1, 2));

  material = material || new tr.MeshBasicMaterial(defaultWFPlane);

  var triangle = new tr.Mesh(geometry, material);

  triangle.name = objectName || 'unknown';

  scene.add(triangle);
}

function generateTriangle_new(options) {
  options = options || {};
  options.name = options.name || 'triangle' + scene.children.length;
  options.size = options.size || 1;
  options.material = options.material || defaultWFPlane;
  options.vertices = options.vertices || [[0, 0, 0], [2 * options.size, 3 * options.size, 0], [4 * options.size, 0, 0]];

  for (var i = 0; i < options.vertices.length; i++) {
    options.vertices[i] = options.vertices[i] * options.size;
    for (var j = 0; j < options.vertices[i].length; j++) {
      options.vertices[i][j] = options.vertices[i][j] * options.size;
    }
  }

  var geometry = new tr.Geometry();
  geometry.vertices.push(new tr.Vector3(options.vertices[0][0], options.vertices[0][1], options.vertices[0][2]));
  geometry.vertices.push(new tr.Vector3(options.vertices[1][0], options.vertices[1][1], options.vertices[1][2]));
  geometry.vertices.push(new tr.Vector3(options.vertices[2][0], options.vertices[2][1], options.vertices[2][2]));
  geometry.faces.push(new tr.Face3(0, 1, 2));

  var material = new tr.MeshBasicMaterial(options.material);

  var triangle = new tr.Mesh(geometry, material);
  triangle.name = options.name;

  scene.add(triangle);
}

function generateCube(geometry, material, objectName) {
  geometry = geometry || [1, 1, 1];
  geometry = new (_bind.apply(tr.BoxGeometry, [null].concat(_toConsumableArray(geometry))))();

  material = material || defaultWFMaterial;
  material = new tr.MeshBasicMaterial(material);

  var cube = new tr.Mesh(geometry, material);

  cube.name = objectName || 'unknown';

  scene.add(cube);
}

function generatePlane(geometry, material, objectName) {
  geometry = geometry || [5, 5];
  geometry = new tr.PlaneGeometry(geometry[0], geometry[1]);

  material = material || defaultWFPlane;
  material = new tr.MeshBasicMaterial(material);

  var plane = new tr.Mesh(geometry, material);

  plane.name = objectName || 'unknown';

  scene.add(plane);
}

function generateHex(objName, objSize, objColor, wireOn) {
  var geometry = new tr.Geometry();

  geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(2 * objSize, 3 * objSize, 0), new THREE.Vector3(4 * objSize, 0, 0), new THREE.Vector3(2 * objSize, -3 * objSize, 0), new THREE.Vector3(-2 * objSize, -3 * objSize, 0), new THREE.Vector3(-4 * objSize, 0, 0), new THREE.Vector3(-2 * objSize, 3 * objSize, 0));
  geometry.faces.push(new THREE.Face3(0, 1, 2), new THREE.Face3(0, 2, 3), new THREE.Face3(0, 3, 4), new THREE.Face3(0, 4, 5), new THREE.Face3(0, 5, 6), new THREE.Face3(0, 6, 1));

  var material = new THREE.MeshBasicMaterial({
    color: objColor, wireframe: wireOn, side: THREE.DoubleSide
  });

  var newGameObject = new THREE.Mesh(geometry, material);
  newGameObject.name = objName;
  scene.add(newGameObject);
}

function generateHex_new(options) {
  if (!options) {
    options = {};
  }
  if (!options.name) {
    options.name = 'hex' + objNumber();
  }
  if (!options.id) {
    options.id = objNumber();
  }
  if (!options.size) {
    options.size = 1;
  }
  if (!options.origin) {
    new tr.Vector3(0, 0, 0);
  }
  if (!options.vertices) {
    options.vertices = hexVerticesValue;
  }
  if (!options.material) {
    options.material = defaultWFMaterial;
  }

  var geometry = new tr.Geometry();

  geometry.vertices = options.vertices;

  geometry.faces.push(new tr.Face3(0, 1, 2), new tr.Face3(0, 2, 3), new tr.Face3(0, 3, 4), new tr.Face3(0, 4, 5), new tr.Face3(0, 5, 6), new tr.Face3(0, 6, 1));

  var material = new THREE.MeshBasicMaterial(options.material);
  var newGameObject = new THREE.Mesh(geometry, material);
  newGameObject.name = options.name;
  newGameObject.objId = options.id;
  scene.add(newGameObject);
}

// ========== GEOMETRY CREATION / end ============
// ========== GRID CREATION / start ==========
'use strict';

var gridHelper = new tr.GridHelper(100, 2);
scene.add(gridHelper);
gridHelper.setColors('rgb(250,200,100)', 'rgb(120,120,80)');

var gridSize = 10;

generateHex_new({ name: '0,0' });
getObjectByName('0,0').rotation.x = toRadians(90);
// getObjectByName('0,0').rotation.z = toRadians(90)
// getObjectById(2).translateX(6)
// getObjectById(2).translateY(-4)

// generateHex_new({name:'1,0'})
// getObjectById(3).rotation.x = toRadians(90)

// for (let i = 1; i < gridSize; i++) {
//   let objectId = i + 1
//   generateHex_new()
//   getObjectById(objectId).rotation.x = toRadians(90)
// }

// ========== GRID CREATION / end ============
// ========== SCENE CREATION / start ==========
// OBJECT/SCENE GENERATION

// OBJECT/SCENE MODIFICATION
"use strict";

camera.position.z = 5;
camera.position.y = 35;
camera.rotation.x = toRadians(-75);

// ========== SCENE CREATION / end ============
// ========== RENDER LOOP / start ==========
// RENDER LOOP
"use strict";

function render() {
  requestAnimationFrame(render);

  if (camera.controls.movement.z) camera.position.z -= camera.controls.movement.speed;
  if (camera.controls.movement.z_) camera.position.z += camera.controls.movement.speed;
  if (camera.controls.movement.x) camera.position.x += camera.controls.movement.speed;
  if (camera.controls.movement.x_) camera.position.x -= camera.controls.movement.speed;
  if (camera.controls.movement.y) camera.position.y += camera.controls.movement.speed;
  if (camera.controls.movement.y_) camera.position.y -= camera.controls.movement.speed;

  if (camera.controls.mouse.leftClick) {
    if (camera.controls.mouse.moving) {
      camera.rotation.y -= camera.controls.mouse.movementX * camera.controls.mouse.rotationSpeed;
      camera.rotation.x -= camera.controls.mouse.movementY * camera.controls.mouse.rotationSpeed;
      camera.controls.mouse.moving = false;
    }
  }

  renderer.render(scene, camera);
}
render();

// ========== RENDER LOOP / start ==========