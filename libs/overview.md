# 3.1 Overview

## Popular libraries

* High-level libraries: BabylonJS, three.js, O3D, OSG.JS, CopperLicht and GLGE
* Matrix libraries: gl-matrix, sylvester

## Abstractions
Take three.js as an example:

* Geometry
* Objects
* Materials
* Lights
* Resource loaders
* Linear algebra
* Scenes
* Camera
* Renderer (not just WebGL)
* Textures

## Why libraries?
1. The developer can focus on the logic of their applications/business,
rather than the implementation details;
2. The third-party library's APIs are better designed to fit the
language construct of JavaScript
3. The high-level library is simpler and more restricted in effects --
which means less error-prone.

As a result, the following errors can be eliminated by using a library:

* Typo
* Buffer binding
* Resource Management
* Lack of certain step
* Missing properties
* Name not in scope
* Undeclared identifier
* API usage error
* Matrix related
