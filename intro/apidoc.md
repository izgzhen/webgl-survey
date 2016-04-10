# Online API documentation

> The junior developer read books and tutorials;
The senior developers read the API documentation;
Only the platform developers and library writers read the standards and specs.


Why I should investigate into this part? The reason is simple:
we want to know *how developer learns about the APIs and its intended usage*.

Thus, we should pay attention to the following several things:

1. How does the single interface documentation look like?
2. Can developer find the usage of some particular functionality quick?
3. Is there enough but concise examples along side?
4. How is the edge cases and correctness issues mentioned?
5. How is the compatibility, security and performance issues mentioned?


## Sources
I found the MDN and MSDN have detailed API docs:

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)
* [Microsoft Developer Network](https://msdn.microsoft.com/en-us/library/dn621085(v=vs.85).aspx)

On the contrary, I don't find API doc about WebGL on [Chromium's online documentation](https://www.chromium.org/developers);

[Dev.Opera](http://dev.opera.com) has a lot of tutorials but not API docs.

I find nothing significant on [Apple Developer site](https://developer.apple.com) either.

## Interface structure
### MDN
For example, [copyTexImage2D](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexImage2D)

There are short induction, syntax, parameters and return value (semantics, types, ranges),
examples, specification, browser compatibility, related interfaces.

### MSDN
Same example, [copyTexImage2D](https://msdn.microsoft.com/en-us/library/dn302380(v=vs.85).aspx)

Short intro, syntax, parameters and return value (semantics, more explicit types, ranges), remarks,
WebGL errors, related interfaces

## Usability
The navigation of MDN is better than MSDN. And most of time the Google will return MDN on searching
a particular interface.

Also, the MDN provides per-interface examples and a lot of tutorials; MSDN is short at this.

## Edge cases and correctness
Both consider edge cases and special values. The MSDN has a WebGL errors documentation,
so it is more explicit about correctness.

## Compatibility, security and performance
### MDN
* Compatibility: Information about conformity in all major desktop and mobile browsers.
* Security: Not explicit
* Performance: Not explicit

### MSDN
* Compatibility: Only one icon showing IE version supporting the interface.
* Security: Not explicit
* Performance: Not explicit
