// ========== SCENE CREATION / start ==========
// OBJECT/SCENE GENERATION

// creating grid
const gridSize = 10
generateHex_new({name:'0,0'})
getObjectByName('0,0').rotation.x = toRadians(90)


// OBJECT/SCENE MODIFICATION
camera.position.z = 5
camera.position.y = 35
camera.rotation.x = toRadians(-75)


// ========== SCENE CREATION / end ============