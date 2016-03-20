# 2.6 Trouble-shooting WebGL code

## *Professional WebGL Programming: Developing 3D Graphics for the Web*

A list of problems:

* JavaScript syntax error
* Runtime error
* Compilation error in the shader
* Linking error in the shader program
  * If your fragment shader tries to use a caring variable that is not defined in your vertex shader
* WebGL specific errors

Trouble-shooting checklist (only debug the code part):

1. Check that you didn't misspell a name of an object property.
2. Check you have spelled all properties of `WebGLRenderingContext` correctly.

## *An Introduction to WebGL Programming*

[Link](https://www.cs.unm.edu/~angel/SIGGRAPH14/Introduction%20to%20WebGL%20Programming.pdf)

> Just a with regular programs, a syntax error from the compilation stage, or a missing symbol from the linker stage could prevent the successful generation of an executable program. There are routines for verifying the results of the compilation and link stages of the compilation process, but are not shown here. Instead, we’ve provided a routine that makes this process much simpler, as demonstrated on the next slide.

## *Beginning WebGL for HTML5*

Chapter 9: Debugging and Performance

The main error codes are:

* `INVALID_ENUM`
* `INVALID_VALUE`
* `INVALID_OPERATION`
* `OUT_OF_MEMORY`

Context errors:

1. Context creation — might fail to obtain a WebGL context

## Misc

* http://www.gamedev.net/topic/673408-debugging-pure-webgl-and-js-is-hell/
* https://yulian.kuncheff.com/using-intellijwebstorm-to-debug-web-applications/
