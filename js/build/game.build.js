// ========== SETUP AND GLOBALS / start ==========
// SETUP SCENE, CAMERA AND RENDERERS
"use strict";

var tr = THREE;

var scene = new tr.Scene();
var camera = new tr.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new tr.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// GLOBAL VARIABLES

// ========== SETUP AND GLOBALS / end ============
// ========== GEOMETRY MODIFICATION / start ==========
// MODIFY GEOMETRY FUNCTIONS
'use strict';

function getObject(objectName) {
  for (var i = 0; i < scene.children.length; i++) {
    if (objectName === scene.children[i].name) {
      return scene.children[i];
    }
  }
}

function objNumber() {
  return scene.children.length + 1;
}

// DEFAULT GEOMETRY VALUES
var defaultWFMaterial = {
  color: 'rgb(200,200,200)',
  opacity: 0.5,
  transparent: true,
  wireframe: true
};

var defaultWFPlane = {
  color: 'rgb(200,200,200)',
  opacity: 0.5,
  transparent: true,
  wireframe: true,
  side: tr.DoubleSide
};

// ========== GEOMETRY MODIFICATION / end ============
// ========== GEOMETRY CREATION / start ==========
'use strict';

function generateTriangle(vertices, material, objectName) {
  if (!vertices) {
    vertices = [[0, 0, 0], [2, 3, 0], [4, 0, 0]];
  }
  var geometry = new tr.Geometry();
  geometry.vertices.push(new tr.Vector3(vertices[0][0], vertices[0][1], vertices[0][2]));
  geometry.vertices.push(new tr.Vector3(vertices[1][0], vertices[1][1], vertices[1][2]));
  geometry.vertices.push(new tr.Vector3(vertices[2][0], vertices[2][1], vertices[2][2]));
  geometry.faces.push(new tr.Face3(0, 1, 2));

  if (!material) {
    material = new tr.MeshBasicMaterial(defaultWFPlane);
  }

  var triangle = new tr.Mesh(geometry, material);

  if (objectName) {
    triangle.name = objectName;
  }

  scene.add(triangle);
}

function generateTriangle_new(options) {
  if (!options) {
    options = {};
  }
  if (!options.name) {
    options.name = 'triangle' + scene.children.length;
  }
  if (!options.size) {
    options.size = 1;
  }
  if (!options.vertices) {
    options.vertices = [[0, 0, 0], [2 * options.size, 3 * options.size, 0], [4 * options.size, 0, 0]];
  } else {
    for (var i = 0; i < options.vertices.length; i++) {
      options.vertices[i] = options.vertices[i] * options.size;
      for (var j = 0; j < options.vertices[i].length; j++) {
        options.vertices[i][j] = options.vertices[i][j] * options.size;
      }
    }
  }
  if (!options.material) {
    options.material = defaultWFPlane;
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
  if (!geometry) {
    geometry = [1, 1, 1];
  }
  geometry = new tr.BoxGeometry(geometry[0], geometry[1], geometry[2]);

  if (!material) {
    material = defaultWFMaterial;
  }
  material = new tr.MeshBasicMaterial(material);

  var cube = new tr.Mesh(geometry, material);

  if (objectName) {
    cube.name = objectName;
  }

  scene.add(cube);
}

function generatePlane(geometry, material, objectName) {
  if (!geometry) {
    geometry = [5, 5];
  }
  geometry = new tr.PlaneGeometry(geometry[0], geometry[1]);

  if (!material) {
    material = defaultWFPlane;
  }
  material = new tr.MeshBasicMaterial(material);

  var plane = new tr.Mesh(geometry, material);

  if (objectName) {
    plane.name = objectName;
  }

  scene.add(plane);
}

function generateHex(objName, objSize, objColor, wireOn) {
  var geometry = new tr.Geometry();

  geometry.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(2 * objSize, 3 * objSize, 0), new THREE.Vector3(4 * objSize, 0, 0), new THREE.Vector3(2 * objSize, -3 * objSize, 0), new THREE.Vector3(-2 * objSize, -3 * objSize, 0), new THREE.Vector3(-4 * objSize, 0, 0), new THREE.Vector3(-2 * objSize, 3 * objSize, 0));
  geometry.faces.push(new THREE.Face3(0, 1, 2), new THREE.Face3(0, 2, 3), new THREE.Face3(0, 3, 4), new THREE.Face3(0, 4, 5), new THREE.Face3(0, 5, 6), new THREE.Face3(0, 6, 1));
  var material = new THREE.MeshBasicMaterial({ color: objColor, wireframe: wireOn, side: THREE.DoubleSide });
  var newGameObject = new THREE.Mesh(geometry, material);
  newGameObject.name = objName;
  scene.add(newGameObject);
}

// ========== GEOMETRY CREATION / end ============
// ========== SCENE CREATION / start ==========
// OBJECT/SCENE GENERATION
'use strict';

generateHex('hex' + objNumber(), 1, 'rgb(200,200,200)', true);

// OBJECT/SCENE MODIFICATION
camera.position.z = 15;

// ========== SCENE CREATION / end ============
// ========== RENDER LOOP / start ==========
// RENDER LOOP
'use strict';

function render() {
  requestAnimationFrame(render);

  getObject('hex1').rotation.y += 0.01;

  renderer.render(scene, camera);
}
render();

// ========== RENDER LOOP / start ==========