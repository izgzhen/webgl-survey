# Overview

## Categories

In typical WebGL applications, we might have following kinds of errors
(only the ones which *will* happen every time, we don't count the resource loading
failure etc. in).

* GLSL
* Typo
* unexpected parameter
* Buffer not bound
* GLSL
* Resource deallocation
* Lack of certain step
* Buffer deallocation
* Type error
* Memory leak
* Improper sharing
* missing properties
* Name not in scope
* Undeclared identifier
* Context management
* Resource loading order
* API usage error
* Shader error
* Threejs
* Type errors
* Matrix related
* Others


## GLSL errors
Referencing the GLSL errors in IE [ref #8],
we can divide GLSL errors further into:

* Internal compiler error
* Compiler memory error - shader exceeds x bytes
* Syntax error - x
* Undeclared identifier x
* Invalid arguments passed to function x
* Postfix expression cannot be indexed
* Index out of range
* Incompatible index expression. For non-uniforms, the index must be an expression formed of the loop_index and integer constants. For uniforms, the index must be an integer constant.
* Index must be a constant
* Argument x is not a sampler
* Invalid macro name - cannot start with `GL_` or contain `__`
* Incompatible types in expression
* Expression in if statement does not evaluate to a boolean
* Divide or mod by zero in constant expression
* Invalid parameter count for macro
* Maximum uniform vector count exceeded
* Maximum attribute vector count exceeded
* Maximum varying vector count exceeded
* Maximum shader complexity exceeded
* Identifier already declared
* Invalid character used outside of comment
* Invalid initializer in for loop, needs to be a single variable of type float or int and initialized to a constant
* Invalid condition in for loop, needs to be in form `loop_index { &gt; | &gt;= | &lt; | &lt;= | == | != } constant`
* Invalid iteration in for loop, needs to be in form `{ --loop_index | ++loop_index | loop_index++ | loop_index-- | loop_index+=constant | loop_index-=constant }`
* Invalid modification to loop index inside loop body
* Invalid identifier name - cannot start with `gl_`, `webgl_`, `_webgl_` or contain `__`
* Token exceeds maximum length
* Invalid qualifier on array - cannot make arrays of attribute or const variables
* Incompatible type used for return expression
* Invalid qualifier on sampler variable declaration - must be uniform
* Invalid type passed to matrix constructor - arguments must be a matrix, or a scalar / vector of float / int / bool
* Invalid type passed to componentwise vector or matrix constructor - arguments must be a scalar / vector of float / int / bool
* Invalid argument count in componentwise vector or matrix constructor - total components passed must equal vector or matrix size
* Invalid expression on left of assignment expression
* Invalid swizzle in field selection - swizzle component count must be equal or less than max vector size (4)
* Invalid swizzle in field selection - swizzle components must be all from same set (xyzw, rgba or stpq)
* Invalid swizzle component in field selection - must be from a valid GLSL set (xyzw, rgba or stpq)
* Swizzle component out of range - must select a component that exists in the vector
* This hardware is unable to support `gl_FrontFacing`
* Const variable requires initialization
* Variables declared with uniform, attribute, or varying qualifier cannot be initialized
* Varying variable cannot have bool, int, or struct type
* Invalid argument passed to constructor - argument must be a basic GLSL type
* Invalid type qualifier for function parameter - only const on in parameters is allowed
* Array declarator requires a constant expression
* Array was declared with size less than or equal to zero
* Type qualifiers `uniform` and `attribute` are invalid for structs
* Invalid field name for struct type
* Invalid type for left hand side of field selection
* Samplers are not allowed in structs
* Macros must be redefined the same as original definition
* Invalid loop index expression passed as out / inout parameter
* Type cannot be used as a constructor
* Undeclared type x
* Embedded struct declarations are not allowed
* Function x is declared and used but not defined
* Function redefinition not allowed
* Function redeclaration not allowed
* Invalid single argument to vector constructor - must be a scalar type, or another vector, or a 2x2 matrix
* Struct constructor arguments' types do not match the struct's field types
* Invalid location for continue statment - must be inside of a loop
* Cannot call main
* Invalid qualifier on non-global variable - non-global variables can be const but cannot be varying, attribute or invariant
* Cannot redefine main or define main with incorrect signature
* Cannot use reserved operators such as `~`, `%=`, `&gt;&gt;=`, `&lt;&lt;=`, `&amp;=`, `|=`, or `^=`
* Ternary conditional operator must have boolean expression for test condition
* Ternary conditional operator must have two expressions of equal types after test condition
* Invalid location for break statement - break statements must be inside a loop
* Invalid location for discard statement - discard statements must be inside a fragment shader
* Initializer for const variable must initialize to a constant value
* Functions cannot be overloaded on return type
* Known functions cannot be re-declared or re-defined
* Function header definition parameter qualifiers must match declaration parameter qualifiers
* Array size must be an integer constant expression
* Array size expression too complex
* `#version` directive must specify 100 for version
* `#version` directive can only be preceded by whitespace or comments
* Unary operator not defined for type
* Struct declarations are disallowed in function parameter declarators
* Struct type declaration exceeds maximum nesting level of
* Operator not defined for struct types
* Operator not defined for user-defined types that contain array types
* Unknown extension: x
* Invalid behavior specified for extension - behavior must be require, warn, enable or disable for regular extensions, or warn or disable for `all`
* Required extension x is not supported
* Preprocessor directives can only be preceded by whitespace on a line
* Function declarations cannot be local
* Variable declared as type void is not allowed
* 'void' is an invalid parameter type unless used as `(void)`
