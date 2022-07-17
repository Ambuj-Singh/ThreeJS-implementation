# Transformation of objects

These four aspects are responsible for transforming an object in 3-D space -

* **Position**
* **Scale**
* **Rotation**
* **Quaternion**

These are all derived from a class in [Three.js](https://threejs.org/docs) called [Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D).
Most of the object manipulation done uses the properties derived from [Object3D](https://threejs.org/docs/index.html#api/en/core/Object3D) class.

In order to better visualize the transformation along any axis we will be using an [AxesHelper](https://threejs.org/docs/index.html?q=AxesHelper#api/en/helpers/AxesHelper).

## AxesHelper
It creates an axis object that helps in visualizing the 3 axes (x,y,z). Thus, it is called as [AxesHelper](https://threejs.org/docs/index.html?q=AxesHelper#api/en/helpers/AxesHelper).

Implementation can be done as - 

```javascript
//Axes helper
const axes = new THREE.AxesHelper(3) // size of the lines representing the axes
scene.add(axes)
```
**The X axis is red. The Y axis is green. The Z axis is blue.**

![axes](https://user-images.githubusercontent.com/39789077/129874987-56bc0f32-8000-488c-9f0f-94a519bece27.png)

## Position

Position can be defined in 3-D space using x,y and z co-ordinates as the parameters in the [position property](https://threejs.org/docs/index.html#api/en/core/Object3D.position).
It is a [Vector3](https://threejs.org/docs/index.html#api/en/math/Vector3) that can be used to define position in that 3-D space.

Implementation can be done as following - 

```javascript
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 'cyan'});
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(1,0,0) // mesh.position.set(x,y,z)
scene.add(mesh)
```

Implementation can also be done as -

```javascript
mesh.position.x = 1
mesh.position.y = 0
mesh.position.z = 0
scene.add(mesh)
```

![x position 1](https://user-images.githubusercontent.com/39789077/129875501-45c4b70b-3c01-47b6-ada6-5bf7a7ce5194.png)

## Scale

[Scale property](https://threejs.org/docs/index.html?q=scale#api/en/core/Object3D.scale) can be used to manipulate the length of the object along the respective axes.

Implementation of scale property can be done as - 

```javascript
mesh.scale.set(2,1,1)
scene.add(mesh)
```

It can also be implemented as -

```javascript
mesh.scale.x=2
mesh.scale.y=1
mesh.scale.z=1
scene.add(mesh)
```

![scale 2](https://user-images.githubusercontent.com/39789077/129882035-f993bb44-29c8-4562-bc6b-261060e00845.png)

## Rotation

Using [rotation property](https://threejs.org/docs/index.html?q=scale#api/en/core/Object3D.rotation), we can rotate the object by entering angles in radians.

[Rotation property](https://threejs.org/docs/index.html?q=scale#api/en/core/Object3D.rotation) incorporates [Euler angles](https://en.wikipedia.org/wiki/Euler_angles).

<img src="https://user-images.githubusercontent.com/39789077/129888378-4ac76655-37ff-4590-b147-30de6b8fdc04.gif" width="50%" height="50%" />

Implementation can be done as follows - 

```javascript
mesh.rotation.z = Math.PI * 0.2
scene.add(mesh)
```

Another method - 

```javascript
mesh.rotation.z = 0.63
scene.add(mesh)
```

![z rotation](https://user-images.githubusercontent.com/39789077/129888955-559df7fc-dd73-41e6-a62f-e41e93edb993.png)

## Quaternion

[Quaternion](https://en.wikipedia.org/wiki/Quaternion) was discovered by [William Rowan Hamilton](https://en.wikipedia.org/wiki/William_Rowan_Hamilton) in 1843.
It's main application was found in 3-D computer graphics to calculate the rotation in three dimensional space.

It can be represented by a 4-D number so, `q = a + bi + cj + dk`

where a, b, c and d are real numbers and i, j and k can be interpreted as unit vectors pointing along the three spatial axes.

Also, `i^2 = j^2 = k^2 = ijk = -1`

The main advantage of quaternion over rotation using euler angles is that it solves the [gimbal lock problem](https://en.wikipedia.org/wiki/Gimbal_lock).

Gimbal lock is when two of your axes aligns it results in loss of one degree of freedom. Gimbal lock can be unlocked but creates problem when animating. The video link given below will be helpful to understand it better.

This video can explain gimbal lock in a better way - [Gimbal Lock](https://www.youtube.com/watch?v=zc8b2Jo7mno&t=8s)

In 3-dimensional space, according to [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem), any rotation or sequence of rotations of a rigid body or coordinate system about a fixed point is equivalent to a single rotation by a given
angle θ about a fixed axis (called the Euler axis) that runs through the fixed point.
The Euler axis is typically represented by a unit vector `v` ( `ê` in the picture). 
Therefore, any rotation in three dimensions can be represented as a combination of a vector **v** and a scalar θ.

<img src = "https://user-images.githubusercontent.com/39789077/129909883-bde58ccc-481f-445e-b5d7-5bcfea7245f4.png" width="25%" height="25%" />

Quaternion multiplication when applied on an ordinary position vector will result in a new position vector of that vector after the rotation.
                 
 `p' = q * p * q^(-1)`

   where **p** is the ordinary vector whoes final position is **p'** after rotation,
   **q** is a quaternion representing a rotation of angle **θ** around the axis defined by the unit vector **v** ( `ê` in the picture) while **q^(-1)** is the inverse of **q**.

`Note - Quaternion multiplication is not commutative.`

We actually [stereographically project](https://en.wikipedia.org/wiki/Stereographic_projection) a [hypershere in 4-D](https://groups.csail.mit.edu/mac/users/rfrankel/fourd/FourDArt.html) into our 3-D space.
Just how equator of a sphere remains constant even after projecting it into a 2-D plane, similarly, the three dimensional sphere we get after the stereographical projection of that hypershere is the unaltered part of that hypersphere.

You can learn more about quaternion from a Youtube channel called [3Blue1Brown](https://www.youtube.com/c/3blue1brown) - 

Some links to videos from that channel - 
* https://www.youtube.com/watch?v=zjMuIxRvygQ
* https://www.youtube.com/watch?v=d4EgbgTm0Bg&t=1265s

There is also a site called [Eater.net](https://eater.net/quaternions) that gives us an interactive way to play around with quaternions and build some intuition to understand them better. 

Now to implement [quaternion in Three.js](https://threejs.org/docs/index.html?q=quate#api/en/math/Quaternion) - 

```javascript
mesh.quaternion.set(0.95,0.31,0,0.0) // mesh.quaternion.set(x,y,z,w)
scene.add(mesh)
```
The parameters x, y, z and w corresponds to b, c, d and a in `q = a + bi + cj + dk` respectively.
This will rotate the cube 18 degrees about the `z-axis` (the blue one).

![z rotation](https://user-images.githubusercontent.com/39789077/129888955-559df7fc-dd73-41e6-a62f-e41e93edb993.png)


