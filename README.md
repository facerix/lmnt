LMNT: an Element Traversal Polyfill
--------------------------

This project exists to supply the missing functionality specified by the W3C's [Element Traversal Specification](http://www.w3.org/TR/ElementTraversal). It adds 5 read-only properties to the Element prototype, if they are not natively present in the execution environment:

- firstElementChild
- lastElementChild
- previousElementSibling
- nextElementSibling
- childElementCount

These properties directly correspond to interfaces defined by the [DOM Level 1 Node interface](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1950641247), with the additional constraint that they operate only nodeType 1 (i.e. Element nodes), ignoring Text, Comment, and other nodeTypes. Nine times out of ten, this is what Web developers want to do anyway, so using these will [simplify your code](http://ejohn.org/blog/element-traversal-api/).

The polyfill also adds the *children* property to the Element prototype, which isn't officially part of the Element Traversal specification, but is implemented in most modern browsers, and adds a conceptual gap left out of the spec: an Element-only version of *childNodes*.
