// ========== RENDER LOOP / start ==========
// RENDER LOOP
function render () {
  requestAnimationFrame(render)

  if (camera.controls.movement.z)   camera.position.z -= camera.controls.movement.speed
  if (camera.controls.movement.z_)  camera.position.z += camera.controls.movement.speed
  if (camera.controls.movement.x)   camera.position.x += camera.controls.movement.speed
  if (camera.controls.movement.x_)  camera.position.x -= camera.controls.movement.speed
  if (camera.controls.movement.y)   camera.position.y += camera.controls.movement.speed
  if (camera.controls.movement.y_)  camera.position.y -= camera.controls.movement.speed

  if (camera.controls.mouse.leftClick) {
    // console.log('clicking')
    // if (camera.controls.mouse.movingX) console.log('movingX', camera.controls.mouse.movingX)
    // if (camera.controls.mouse.movingY) console.log('movingY', camera.controls.mouse.movingY)
  }

  renderer.render(scene, camera)
}
render()


// ========== RENDER LOOP / start ==========