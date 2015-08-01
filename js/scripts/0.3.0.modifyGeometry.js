// MODIFY GEOMETRY FUNCTIONS
function getObject(objectName){
  for(var i = 0; i < scene.children.length; i++){
    if(objectName === scene.children[i].name){
      return scene.children[i]
    }
  }
}

function objNumber(){
  return scene.children.length + 1
}

