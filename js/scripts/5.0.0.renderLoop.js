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
    if (camera.controls.mouse.moving) {
      camera.rotation.y -= camera.controls.mouse.movementX * camera.controls.mouse.rotationSpeed
      camera.rotation.x -= camera.controls.mouse.movementY * camera.controls.mouse.rotationSpeed
      camera.controls.mouse.moving = false
    }
  }

  renderer.render(scene, camera)
}
render()


// ========== RENDER LOOP / start ==========