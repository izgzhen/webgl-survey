# Compiled Information from three.js

## Overview
* threejs-issue-5421: Buffer deallocation
* threejs-issue-5569: Type mismatch
* threejs-issue-5680: Memory leak
* threejs-issue-5871: Improper sharing
* threejs-issues-83: Name not in scope
* threejs-pull-1602: GLSL
* threejs-issue-4834: Unexpected parameter
* threejs-issue-5098: Buffer not bound
* threejs-issue-5196: Buffer not bound
* threejs-issue-5222: GLSL & Unexpected parameter
* threejs-issue-5269: Resource deallocation
* threejs-issue-5293: Lack of certain step
* threejs-issue-6952: Missing properties
* threejs-issue-6956: GLSL

## Details
### threejs-pull-1602
#### Categories
- GLSL

#### Link
[https://github.com/mrdoob/three.js/pull/1602](https://github.com/mrdoob/three.js/pull/1602)

#### Remark
This PR mentioned a problem about adding precision
qualifiers to resolve shader compilation errors on mobile device.
This is also a nasty problem which is platform-dependent
### threejs-issue-1329
#### Categories
- Typo

#### Link
[https://github.com/mrdoob/three.js/issues/1329](https://github.com/mrdoob/three.js/issues/1329)

#### Remark
`THREE.UnsignedIntType` is written wrongly as `THREE.UnsignedShortType`.
However, its namespace is `THREE`, which is defined by library, not by WebGL.
#### Possible fix
I think TAJS might be able to resolve this by analyzing information of object property?
### threejs-issue-4834
#### Categories
- unexpected parameter

#### Link
[https://github.com/mrdoob/three.js/issues/4834](https://github.com/mrdoob/three.js/issues/4834)

#### Remark
Discussed 2 problems here related to the compilation failure of the shader.

- [This commit](https://github.com/Nimanf/three.js/commit/7f7650c5e012890a34c26c1c6fa2f8482d855627) used `max()` to limit negative values for `pow()` in shaders.

- Then there is a discussion about the warning X3557 caused by `MAX_DIR_LIGHTS` is 1 and the redundant loop:

```
#define MAX_DIR_LIGHTS 1
#if MAX_DIR_LIGHTS > 0
for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) { ...
```

#### Possible fix
maybe same as [threejs issue 5222](https://git.ustclug.org/VeriGL/VeriGL-Dark-Side/wikis/threejs-issue-5222)
### threejs-issue-5098
#### Categories
- Buffer not bound

#### Link
[https://github.com/mrdoob/three.js/issues/5098](https://github.com/mrdoob/three.js/issues/5098)

#### Remark
An eye catched error.

> `THREE.Float32Attribute` has been removed.

Use THREE.BufferAttribute( array, itemSize ) instead.

this [commit](https://github.com/mrdoob/three.js/commit/e5b1d38e1e90bc9f7b16da7c1e53e66c5e8c2178) solves this:
```
- geometry.addAttribute( 'position', new THREE.Float32Attribute( numEdges * 2 * 3, 3 ) );
+ geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( numEdges * 2 * 3 ), 3 ) );
```


#### Possible fix
Search for available functions in the lib
### threejs-issue-5196
#### Categories
- Buffer not bound

#### Link
[https://github.com/mrdoob/three.js/issues/5196#issue-40214568](https://github.com/mrdoob/three.js/issues/5196#issue-40214568)

#### Remark
Found while playing with threejs.org/editor

After adding a Mesh with the Menubar's 'Add' panel, sidebar geometry parameter changes cause the object to stop displaying.

Console warnings from WebGL:
```
WebGL: INVALID_OPERATION: vertexAttribPointer: no bound ARRAY_BUFFER three.min.js:545
WebGL: INVALID_OPERATION: vertexAttribPointer: no bound ARRAY_BUFFER three.min.js:549
WebGL: INVALID_OPERATION: drawElements: no ELEMENT_ARRAY_BUFFER bound three.min.js:552
[17:54:37] Saved state to IndexedDB. 0.71ms Storage.js:64```
#### Possible fix
Track the `gl` context and the `buffer` might avoid these.
### threejs-issue-5222
#### Categories
- GLSL
- unexpected parameter

#### Link
[https://github.com/mrdoob/three.js/issues/5222](https://github.com/mrdoob/three.js/issues/5222)

#### Remark
As referred to to [GLSL mannual](https://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf) P65, in `genType pow (genType x, genType y)`, results are undefined if x = 0 and y <= 0.
So in the generated GLSL in the issue, `pow(pointDotNormalHalf, shininess)` could be undefined and not warned.
In the commit [#7252](https://github.com/mrdoob/three.js/commit/a13cf4343effc741b0aa333c37062cc7cc3d71c7), this was fixed by:
`-    uniforms.shininess.value = material.shininess;`
`+    uniforms.shininess.value = Math.max( material.shininess, 1e-4 );`
#### Possible fix
Interval analysis and warning
#### Related
- [messed up OBJMTL loader #7252](https://github.com/mrdoob/three.js/issues/7252)
- [MeshPhongMaterial with shininess = 0 causes artifacts on Windows #6057](https://github.com/mrdoob/three.js/issues/6057)

### threejs-issue-5269
#### Categories
- Resource deallocation

#### Link
[https://github.com/mrdoob/three.js/issues/5269](https://github.com/mrdoob/three.js/issues/5269)

#### Remark
The child of object3D was not removed before removing the object3D itself.
This arouse the memory leakage.
#### Possible fix
Might be fixed by tracking the state of the object?
### threejs-issue-5293
#### Categories
- Lack of certain step

#### Link
[https://github.com/mrdoob/three.js/issues/5293](https://github.com/mrdoob/three.js/issues/5293)

#### Remark
`WebGLRenderer` is not doing `updateObject( object )` because is not visible from the main camera.
hen an error `glDrawElements: range out of bounds for buffer` would occur.
#### Possible fix
Might be fixed by tracking the state of the object?
#### Related
- The author broke it again recently in [#6996](https://github.com/mrdoob/three.js/issues/6996)

### threejs-issue-5421
#### Categories
- Buffer deallocation

#### Link
[https://github.com/mrdoob/three.js/issues/5421](https://github.com/mrdoob/three.js/issues/5421)

#### Remark
According to the [commit](https://github.com/mrdoob/three.js/commit/70ca93c2fe184795e5410a6b30e625dee43af870), the problem is that we should not only call `_gl.deleteBuffer(buffer_obj)`, but also call `delete buffer_obj
[Document about `deleteBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteBuffer).
#### Possible fix
The problem might cause the old state to persist unexpectedly. So one way of elimination is to require a "fresh" state explicitly at some point, which can preclude such presence if possible.
### threejs-issue-5569
#### Categories
- Type error

#### Link
[https://github.com/mrdoob/three.js/commit/1311c0e315326bdb9c02a5c7b8733bb0c27fb1ea](https://github.com/mrdoob/three.js/commit/1311c0e315326bdb9c02a5c7b8733bb0c27fb1ea)

#### Remark
[Commit](https://github.com/mrdoob/three.js/commit/1311c0e315326bdb9c02a5c7b8733bb0c27fb1ea).
Well, it is recognised by naked eyes.
But first it is a silent bug, which is rather harmful. Second, although threejs doesn't depend on `gl-matrix.js`, it has a similar internal system
#### Possible fix
Add additional type information
### threejs-issue-5680
#### Categories
- Memory leak

#### Link
[https://github.com/mrdoob/three.js/issues/5680](https://github.com/mrdoob/three.js/issues/5680)

#### Remark
Fixed in [PR](https://github.com/mrdoob/three.js/pull/5723), with [commit](https://github.com/AVGP/three.js/commit/2518eaac07154bd466c4a7d18b819cc47f5ee0aa).
This is very nasty ... I can't give a reasonable fix now.
### threejs-issue-5871
#### Categories
- Improper sharing

#### Link
[https://github.com/mrdoob/three.js/issues/5871](https://github.com/mrdoob/three.js/issues/5871)

#### Remark
This is caused by the geometry being shared across contexts outside of the closure in `ArrowHelper`'s definition.
[A length related discussion](https://github.com/mrdoob/three.js/pull/6723).
#### Possible fix
Globally, we might be able to couple a context with a buffer.
### threejs-issue-6952
#### Categories
- missing properties

#### Link
[https://github.com/mrdoob/three.js/pull/6952](https://github.com/mrdoob/three.js/pull/6952)

#### Remark
When exporting `BoxGeometry` parameters(width, height, depth) by `SceneExporter`, it should be `g.parameters.width` rather than `g.width`.
Fixed by this [commit](https://github.com/dubejf/three.js/commit/b5b79a7a6aa4b42846f89e4852f36719543a3438).
#### Possible fix
Track object's properties.
#### Related
- SceneExporter doesn't handle box/sphere/plane parameters #4739
- SceneExporter // BoxGeometry Inconsistent #5067
- #5067 make SceneExporter use correct BoxGeometry parameters #5068

### threejs-issue-6956
#### Categories
- GLSL

#### Link
[https://github.com/mrdoob/three.js/issues/6956](https://github.com/mrdoob/three.js/issues/6956)

#### Remark
Pull: https://github.com/thothbot/parallax/pull/43
In GLSL, extension directive must occur before any non-preprocessor tokens, otherwise a warning is raised.
Threejs fixed in 72dev.
#### Related
- [parallax](https://github.com/thothbot/parallax/pull/43)
- [ancient-earth](https://github.com/typpo/ancient-earth/commit/91f9d75ab45db8e7ba3d2e156e313f079f6826ed)

### threejs-issues-83
#### Categories
- Name not in scope

#### Link
[https://github.com/mrdoob/three.js/issues/83](https://github.com/mrdoob/three.js/issues/83)

#### Remark
The `scene` referenced isn't passed in as an argument or declared above - so it's looking in the global scope.
So it tends to be some programming style issue, which is related to the problem being solved.

### threejs-pull-1602
#### Categories
- GLSL

#### Link
[https://github.com/mrdoob/three.js/pull/1602](https://github.com/mrdoob/three.js/pull/1602)

#### Remark
This PR mentioned a problem about adding precision qualifiers to resolve shader compilation errors on mobile device.
This is also a nasty problem which is platform-dependent
