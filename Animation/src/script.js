import './style.css'
import * as THREE from 'three'
import { Clock } from 'three';

//scene
const scene = new THREE.Scene()

//cyan cube
const geometry = new THREE.BoxGeometry(1,1,1)

const material = new THREE.MeshBasicMaterial({color: 'cyan'});
const mesh = new THREE.Mesh(geometry, material)

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

//Clock
const clock = new THREE.Clock()

//Animation
const funct = () =>
{
    //adating to framerate
    const elapsedTime = clock.getElapsedTime()

    //updating objects
    mesh.position.y = Math.sin(elapsedTime) 
    mesh.position.x = Math.cos(elapsedTime)
    //rederer
    renderer.render(scene, camera)

    //calling funct on to the next frame
    window.requestAnimationFrame(funct)
}

funct()

