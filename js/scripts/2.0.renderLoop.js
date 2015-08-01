// RENDER LOOP
function render(){
  requestAnimationFrame(render)

  // getObject('cube1').rotation.x += 0.01
  // getObject('plane1').rotation.y += 0.01
  // getObject('triangle1').rotation.y += 0.01
  getObject('hex1').rotation.y += 0.01

  renderer.render(scene, camera)
}
render()