# Applications

## Examples
* [NASA: Exploring Curiosity](http://eyes.nasa.gov/curiosity/)
* [Chrome Experiments](https://www.chromeexperiments.com)
* [Three.js featured projects](http://threejs.org)

## Chrome Experiments
Currently, it has 567 experiments using WebGL. (About half of all experiments).

From the first page, we will list the used technologies for each application (only ones include WebGL), "Open" means it is open-sourced.

1. [WebGL, Three.js, WebAudio; Open](https://www.chromeexperiments.com/experiment/lines)
2. [Javascript,WebGL,Three.js,GLSL,WebRTC,WebAudio](https://www.chromeexperiments.com/experiment/gaze)
3. [Three.js, WebGL, Javascript](https://www.chromeexperiments.com/experiment/world)
4. [Three.js, Javascript; Open](https://www.chromeexperiments.com/experiment/infinite-city)
5. [Javascript es6, WebGL, Three.js, Glsl](https://www.chromeexperiments.com/experiment/amalgame)
6. [Web Audio API, Tone.JS, pixi.JS, WebGL, WebRTC; Open](https://www.chromeexperiments.com/experiment/music-lab)
8. [WebGL, WebAudio, Particulate.js, Three.js; Open](https://www.chromeexperiments.com/experiment/medusae)
9. [WebGL, Three.js, JavaScript (ES2015); Open](https://www.chromeexperiments.com/experiment/4dvj)
10. [Javascript, WebGL, THREE.js, web audio API](https://www.chromeexperiments.com/experiment/one-million-stars)

So as we can see, Three.js is really popular; And half of them are open sourced.

## Error and warnings sampling
I tested the nine applications listed above, to see if there are any errors or warnings in my browser (The experiment UA: Safari 9). Here is the result for erros/warnings, and the rest is fine:

* From 2nd app: `[Error] TypeError: undefined is not an object (evaluating 'camera.updateProjectionMatrix')`
* From 3rd app: `[Warning] THREE.Material: 'envMap' parameter is undefined. (three.min.js, line 428)`
* From 4th app: `[Warning] THREE.WebGLProgram: gl.getProgramInfoLog() – "WARNING: Output of vertex shader 'vNormal' not read by fragment shader↵" (three.js, line 29952)`
* From 6th app: `[Warning] THREE.WebGLProgram: gl.getProgramInfoLog() – "WARNING: Output of vertex shader 'vPosition' not read by fragment shader↵"`
