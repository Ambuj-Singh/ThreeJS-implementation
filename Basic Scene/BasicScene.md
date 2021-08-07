# Basic Scene

  In this first implementation, I did a very basic scene using only 'HTML' and 'Javascript'.
  
  The file three.min.js was downloaded from [ThreeJS](https://threejs.org/).
                                                      
**This file enables us to use a variable provided by it - 'THREE', using which we can access its many uses.**

## Creating a Scene

```javascript
const scene = new THREE.Scene()
```

This line creates your first scene using Three.js script. After creating a scene we add a mesh and a camera to it.

## Creating a Mesh

A mesh is just a model composed of geometry and material.

**Geometry** - It gives the mesh a definrd shape, for ex- a box Geometry means a mesh shaped like a box. You can define the x,y,z of the box in order to make it look like a cube or a rectangle.

**Material** - It gives a material to the mesh. It makes that mesh model using this material. It has many parameters such as 'color' which I have used in the project. Using 'aoMap' you can give it a texture.

```javascript
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'cyan'});
const mesh = new THREE.Mesh(geometry, material)
//always add the mesh to the scene so that it can be rendered later.
scene.add(mesh)
```

##Creating a Camera

A camera is used to look at the scene from a given angle.
You can give it a viewing angle, width and height to create a resolution.
The camera used here is the PrespectiveCamera it projects the 3D scene the way a human eye would see and thus it is the kind we use in many games too.

```javascript
const sizes = {
    width: 800,
    height:600
}

const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 4
camera.position.x = 1.25
camera.position.y = 1.25
//again adding the camera to the scene
scene.add(camera)
```
The positions x, y, and z gives the exact co-ordinates of the camera in a 3-dimensional scene we created.

**camera.position.x** - tells where to be on the x axis that is your horizontal scale.

**camera.position.y** - tells where to be on the y axis that is your vertical scale.

**camera.position.z** - tells where to be on the z axis that is the axis on which camera zoomes into the scene or zoom out of the scene according to it's given values.      
                                                      
You can add multiple cameras too to the scene and switch in between them.
                                                      
## Creating a Renderer

Now at last in order to actaully see the cube we created in that scene.

In order to render a scene, we need a canvas. Canvas is like a drawing board for graphics using javascript. It is a 3D drawing space and is an element of html.                                                      
                                                      
We will now add the canvas to our body.                                                      
                                                      
 ```html
 <body>
    <canvas class="webgl"></canvas>
    <script src="three.min.js"></script>
    <script src="script.js"></script>
</body>
```
Now in our script.js we will add the canvas to renderer
                                                      
```javascript
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})                                                      
```
After this set the size of the render and render the scene and the camera.
                                                      
```javascript                                                      
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene, camera)
```                                                      
This will render the scene with a cyan cube.                                                    
