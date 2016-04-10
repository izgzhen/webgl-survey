# Future of WebGL tooling

## Static analysis technique
The interoperation between JavaScript and GLSL opens a door for static analysis;
Besides, editors and current IDE is unaware of if you have check `null`; The
dynamic type information is simply ignored.

Also, the correct use of API involves side-effects, which is easy to get wrong.

## Verified libraries
Three.js is a huge code base, and highly dynamic. You never know if some feature does work or it is just coincidence.

By verifying:

1. The library does what it is intended to do
2. The library does its job the right way

We will have more confidence and rely on it in the long run.

## Integration

The integration into mature product is important, such as debug tools and IDEs.
