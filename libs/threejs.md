# Case Study: Threejs

## API samples
[Docs](http://threejs.org/docs/)

A example app, its workflow:

+ initialize `scene`, `camera` and `renderer`.
+ Create mesh object from geometry and material add them to the scene
+ Render based on scene and camera frame by frame

```html
<html>
	<head>
		<title>My first Three.js app</title>
		<style>
			body { margin: 0; }
			canvas { width: 100%; height: 100% }
		</style>
	</head>
	<body>
		<script src="js/three.min.js"></script>
		<script>
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75,
                            window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();
		</script>
	</body>
</html>
```

## Library structure
> The current three.js implementation is too huge --
I will take its early release `three.js-r16` as a preliminary analysis object.

The `src` contains

1. cameras: set up the perspective matrix etc. based on camera paramters
2. core
    1. Color: convert hexadecimal code into internal representation and better format
    2. Face3/Face4: Wrap end-points and normal vector into a high-level structure `Face`
    3. Geometry: A geometry is a set of vertices and faces connecting the vertices,
       this function computes the normals of each face (which might be useful in texture or
       fragment shader?)
    4. Vector(2, 3, 4)/Matrix4: Basically same as `gl-matrix`
    5. Vertex: Wrapper over position and normal (normal?)
    6. UV: (u, v) coordinate (NOTE: UV mapping is a process of flattening the 3-dimensional object)
    7. Rectangle: Again, a geometry wrapper
3. materials: Wrap the attribute values of different materials
4. objects: Simple wrappers of `Line`, `Mesh`, `Object3D` etc.
5. renderers
    1. `renderables`: `RendererableFace(3,4)`, `RenderableLine`, `RenderableParticle` etc.,
                      looks like another set of wrappers
    2. `CanvasRenderer`: In construction, context is get from created `canvas` element;
                         A lot of other vectors and rectangle are created as well. The functions provided
                         include `setSize`, `clear`, `render`, `drawTexturedTriangle` and `expand`.
                         However, this is only a 2d canvas.
    3. `Renderer`: Its data includes pools of face3, face4, line and particles, as well as a vector4
                   and a matrix4. The exposed interfaces include a `renderList` and method `project`.
                   I suppose that this will do some transformation (like projection), and push the
                   things left to render into `renderList`
    4. `SVGRenderer`: Similar to `CanvasRenderer`
    5. `WebGLRenderer`: Similar to `CanvasRenderer`, we have some basic bootstrapping and after that, we call
                        `initGL` and `initProgram`; The utilities provided include `setSize`, `clear` `render`,
                        `getShader`; There are also internal functions `getShader` and `matrix2Array`.
        + `initGL`: It will try to get context, and will throw in case of incompatibility. If context is ready,
                    it will do `clearColor`, `clearDepth` and other config and setups.
        + `initProgram`: Two shaders, fragment and vertex shaders are hard-coded here. With attached shaders, it
                         link and use the program. Finally, it will set other attributes related.
        + `clear`: Clear the `COLOR_BUFFER_BIT` and `DEPTH_BUFFER_BIT` bits.
        + `render`: Given a `scene` and a `camera`, it will render the mesh object in `scene` one by one.
                    Every mesh object will have its vertex buffer. The related data also contains faces and color.
                    For every face, its three vertices will be push into the array, same for color. With buffers
                    ready, it will create, bind and fill in one by one with `createBuffer`, `bindBuffer` and `bufferData`.
                    After that, the view matrix and projection matrix is set. Next, the material of object is rendered as
                    well. The color of face are pushed into the buffer, bind and filled in. Finally, we will call `drawElements`.
        + `getShader`: It is basically wrapping around `createShader`, `shaderSource`, `compileShader`.
6. scenes: Wrapper of an array of objects

