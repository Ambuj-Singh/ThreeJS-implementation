import './style.css'
import * as THREE from 'three'

//scene
const scene = new THREE.Scene()

//cyan cube
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color: 'cyan'});
const mesh = new THREE.Mesh(geometry, material)
mesh.quaternion.set(0.95,0.31,0,0.0)
scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    height:600
}


//camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.set(1,1,6)
scene.add(camera)
//Axes helper
const axes = new THREE.AxesHelper(3)
scene.add(axes)
//renderer

const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera)
