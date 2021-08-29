# Animation

Animation can be done in various ways - 

* Using [Gsap](https://greensock.com/3) 
* Using [window.requestAnimationFrame()](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* Similar libraries like [**gsap**](https://greensock.com/3)  can also be used - [Alternatives](https://alternativeto.net/software/gsap/)

Here, we will have a look at animation using [**window.requestAnimationFrame()**](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

Also we will explore how to adapt to varying framerates across devices so that the animation remains seamless across all the devices hyou run that animation on.

## Stop motion animation

The technique that is executed in animating objects here is called [**stop motion animation**](https://en.wikipedia.org/wiki/Stop_motion).

In stop motion animation we make small changes to the image in every frame. It is just like taking multiple pictures of an object but changing the object orientation before taking a picture and then view at a given speed of some units of pictures per second which make it look like a animating object.
This rate of change in pictures per second is used to standardize how many pictures per second a screen is capable of showing. It is well-known as [**frame rate**](https://en.wikipedia.org/wiki/Frame_rate), also called [fps (frames per second)](https://en.wikipedia.org/wiki/Frame_rate).

**A good example of stop motion animation will be the famous cartoon [Shaun the Sheep](https://en.wikipedia.org/wiki/Shaun_the_Sheep).**

## Using window.requestAnimationFrame() for animation purpose

A Common misconception iabout requestAnimationFrame() is that it animates an object, which is not true, in fact, what this function really do is calls a function whenever a new frame is rendered.

```javascript

const funct = () =>
{
   console.log("funct")
   
   //calling funct on the next frame render
   window.requestAnimationFrame(funct)
}

funct()
```

In the console below it shows on the right hand side the number funct being print is increasing that is because the **function funct()** is called at every frame and a at a frame rate of 120 frames per second it will print **"funct"** 120 times per second.

![console funct](https://user-images.githubusercontent.com/39789077/131253425-51934f3d-cce1-4fc6-a306-5ce1deecd3a7.gif)

Now, instead of printing a string we can call a function which renders a new postion everytime it's called to render the frame.

```javascript
mesh.quaternion.set(0.95,0.31,0,0.0)
scene.add(mesh)

//Animation
const funct = () =>
{
    //updating the object with the new changes
    mesh.position.y += 0.003
    
    //we will be calling renderer to render inside this function
    renderer.render(scene, camera)
    
    //calling funct on the next frame render
    window.requestAnimationFrame(funct)
}

funct()
```
We can see the cube rising by **0.003** in every frame.

![y anim increment](https://user-images.githubusercontent.com/39789077/131253848-afca199b-c690-48ec-b1d2-8f11c61e83f1.gif)


Now, let's try a rotation - 

```javascript
const funct = () =>
{
    //updating the object with the new changes
    mesh.rotation.z += 0.01
    
    //we will be calling renderer to render inside this function
    renderer.render(scene, camera)
    
    //calling funct on the next frame render
    window.requestAnimationFrame(funct)
}

funct()
```
We can see the cube rotating -

![z axis rotation](https://user-images.githubusercontent.com/39789077/131254105-9f2c1430-7688-42d1-8f02-48526dfb694b.gif)

Using this kind of method often results in varied speed of the animation on different devices due to the different frame rate supported by different screens.

This problem can be solved if we somehow use a counter that will change accross all devices at the same rate. One type of solution is using [Clock](https://threejs.org/docs/index.html?q=cloc#api/en/core/Clock) from [Three.js](https://threejs.org/).

```javascript
//Clock
const clock = new THREE.Clock()

//Animation
const funct = () =>
{
    //elapsedTime
    const elapsedTime = clock.getElapsedTime()
    
    //updating the object with the new changes
    mesh.rotation.x = elapsedTime
    
    //we will be calling renderer to render inside this function
    renderer.render(scene, camera)
    
    //calling funct on the next frame render
    window.requestAnimationFrame(funct)
}

funct()
```

We can see the cube rotating about **x-axis(red)**.

![x axis rotation clock](https://user-images.githubusercontent.com/39789077/131254552-28df56ad-51d8-4ef0-b8d3-1bbcf18ad83a.gif)

Another type of solution will be calculating time difference between each frame render-

```javascript
//Time
let time = Date.now()

//Animation
const funct = () =>
{
    //elapsedTime
    const currentTime = Date.now()
    const difference = currentTime - time
    time = currentTime
    
    //updating the object with the new changes
    mesh.rotation.z += 0.001 * difference
    
    //we will be calling renderer to render inside this function
    renderer.render(scene, camera)
    
    //calling funct on the next frame render
    window.requestAnimationFrame(funct)
}

funct()
```

Rotation of the cube about the z-axis - 

![z axis rotation time difference](https://user-images.githubusercontent.com/39789077/131254782-2b20b221-3589-4b7b-9eeb-9a6a68c16c46.gif)

We can also do some complex animation like a revolution around z-axis, this can be achieved by using the parametric equation of a circle.
In parametric equation, (x, y) at a point on the unit circle given by an angle q radians are defined by ``x = cos(q)``  ``y = sin(q)``. 
Here the value enetered will be in radians and we will used the [Clock](https://threejs.org/docs/index.html?q=cloc#api/en/core/Clock) method.

Now, implementing - 

```javascript
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
```

We can see the cube revolving around the z-axis(blue).

![z axis circular](https://user-images.githubusercontent.com/39789077/131255332-ce032566-465a-4125-bd8f-6cf437fc0a8f.gif)

These kind of methods are used to create simple animations but it is better to use libraries like [Gsap](https://greensock.com/3) to do some complex animations.
