// ========== RENDER LOOP / start ==========
// RENDER LOOP
function render () {
  requestAnimationFrame(render)

  getObject('hex1').rotation.y += 0.01

  renderer.render(scene, camera)
}
render()


// ========== RENDER LOOP / start ==========