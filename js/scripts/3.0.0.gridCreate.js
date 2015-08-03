// ========== GRID CREATION / start ==========
const gridHelper = new tr.GridHelper(100, 2)
scene.add(gridHelper)
gridHelper.setColors('rgb(250,200,100)', 'rgb(120,120,80)')

const gridSize = 10

generateHex_new({name:'0,0'})
getObjectByName('0,0').rotation.x = toRadians(90)
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