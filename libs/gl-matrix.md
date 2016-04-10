# Case study: gl-matrix

[Home](http://glmatrix.net)

glMatrix is designed to perform vector and matrix operations stupidly fast! The latest version uses WebPack to manage the modules.

## APIs

Exposed interfaces: `glMatrix`, `mat2`, `mat2d`, `mat3`, `mat4`, `quat`, `vec2`, `vec3`, `vec4`

### [Common utilities](http://glmatrix.net/docs/2.2.0/symbols/glMatrix.html)

\begin{figure}[htbp]
\centering
\includegraphics[width=0.5\textwidth]{gl-matrix.png}
\caption{gl-matrix documentation sample 1}
\end{figure}

### [3x3 Matrix](http://glmatrix.net/docs/2.2.0/symbols/mat3.html)

\begin{figure}[htbp]
\centering
\includegraphics[width=0.5\textwidth]{mat3.png}
\caption{gl-matrix documentation sample 2}
\end{figure}

\begin{figure}[htbp]
\centering
\includegraphics[width=0.5\textwidth]{mat3-adjoint.png}
\caption{gl-matrix documentation sample 3}
\end{figure}


## Library structure

- `glMatrix`: Common utilities, including config constants, compatibility detection, and things like `setMatrixArrayType`.
- `mat3` etc: Represent one type of data and the related operations.
    + Constructors: `create`, `clone`, `copy`
    + Computations: `identity`, `transpose`
    + Conversions: `fromMat4`

## Possible problems
1. **Hard to maintain**: Even such a simple library is over 6000 lines of JS; and the author suggested a "sorry" for breaking the APIs from 1.0 to 2.0.
2. **Type Unsafe**: Concretely, it is easy to pass a `vec3` to where a `vec4` is expected. And since
here is no type checking, so you won't get any explicit warning.

