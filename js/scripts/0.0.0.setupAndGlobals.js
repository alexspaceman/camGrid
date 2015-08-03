// ========== SETUP AND GLOBALS / start ==========
// SETUP SCENE, CAMERA AND RENDERERS
const tr = THREE

const scene = new tr.Scene()
const camera = new tr.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

const renderer = new tr.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)


// GLOBAL VARIABLES


// ========== SETUP AND GLOBALS / end ============