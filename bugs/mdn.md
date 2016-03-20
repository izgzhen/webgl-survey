# 2.2 Compiled Information from MDN

Source: [API](https://developer.mozilla.org/en-US/docs/Web/API), [Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

## Source of bugs

### canvas element

To get the rendering context, i.e., the canvas element, we usually use `getElementById` or similar way to fetch the DOM object. The caveat is, the `id` is specified in HTML tag, such as

```html
<canvas id="glcanvas" width="640" height="480">
```

And you must use the exact name in your JavaScript code. **It is possible that you will type it wrongly or refer to another unrelated canvas**.



### `gl` Object

```javascript
function initWebGL(canvas) {
  gl = null;

  try {
    // Try to grab the standard context. If it fails, fallback to experimental.
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  }
  catch(e) {}

  // If we don't have a GL context, give up now
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
    gl = null;
  }

  return gl;
}
```

First, we might not have a functional `gl` (not `null`) always, which depends on the browser support. And second, in the `getContext`, we are also forced to consider two standards.

### Shader's source

The shader code is essentially a string. So as a result, you might either define it in JavaScript, or store it as a HTML element, or even request it as a resource dynamically from other address.

```javascript
if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
  alert("Unable to initialize the shader program.");
}
```

The above snippet checks if the `gl.linkProgram` calling succeeds by checking if return value is `null`. It is apparently something easy to forget.

### Attribute names

The shader code will use some variable to communicate with JavaScript. For example

```glsl
<script id="shader-vs" type="x-shader/x-vertex">
  attribute vec3 aVertexPosition;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  }
</script>
```

On the JavaScript side, we have to

```javascript
// During Shader initialization
vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
gl.enableVertexAttribArray(vertexPositionAttribute);

// During scene rendering
var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));

gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
```

So, we have to match the names (i.e. `aVertexPosition`, `uPMatrix` and `uMVMatrix` in the above example)  in two language domains, both in syntax and semantics.

### Array

This is how to fill data into GL buffer: `gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);`

The `Uint16Array` is a raw, platform-dependent way of storing an array of data. Similarly, we also have `Array`, `Int8Array`, `Float32Array` ...

Interestingly, let compare it with OpenGL ES interface: `void BufferData( enum target, sizeiptr size, constvoid *data, enum usage );`.

You can see that, the `Uint16` array could be translated into a raw array and a element size indicator.

## Things to avoid

* You should never use `#ifdef GL_ES` in your WebGL shaders; although some early examples used this, it's not necessary, since this condition is always true in WebGL shaders.
* Using `high` precision in fragment shaders will prevent your content from working on some older mobile hardware. You can use `medium` instead, but be aware that this often results in corrupted rendering due to lack of precision on most mobile devices, and the corruption is not going to be visible on a typical desktop computer. In general, only using `high` in both vertex and fragment shaders is safer unless shaders are thoroughly tested on a variety of platforms. Starting in Firefox 11, the WebGL `getShaderPrecisionFormat()` function is implemented, allowing you to check if `high` precision is supported, and more generally letting you query the actual precision of all supported precision qualifiers.
* Anything that requires syncing the CPU and GPU sides is potentially very slow, so if possible you should try to avoid doing that in your main rendering loops. This includes the following WebGL calls: `getError()`, `readPixels()`, and `finish()`. WebGL getter calls such as `getParameter()` and `getUniformLocation()` should be considered slow too, so try to cache their results in a JavaScript variable.
* Simpler shaders perform better than complex ones. In particular, if you can remove an `if` statement from a shader, that will make it run faster. Division and math functions like `log()` should be considered expensive too.
* Always have vertex attrib 0 array enabled. If you draw with vertex attrib 0 array disabled, you will force the browser to do complicated emulation when running on desktop OpenGL (e.g. on Mac OS X). This is because in desktop OpenGL, nothing gets drawn if vertex attrib 0 is not array-enabled. You can use `bindAttribLocation()` to force a vertex attribute to use location 0, and use `enableVertexAttribArray()` to make it array-enabled.

  ​
