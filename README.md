
 globalThis test
================================================================================

This is a test program to check if `globalThis` a global variable points to the
identical scope object and to confirm that the variable does not point to its
package local object.


 How to Run
--------------------------------------------------------------------------------
```bash
> npm test
```

 Note 
--------------------------------------------------------------------------------

*Node.js by default does not attempt to guess the file extension when using
import for ES modules. This is different from CommonJS modules with require.*  
[Node can't find modules without .js extension](https://stackoverflow.com/questions/64242186/node-cant-find-modules-without-js-extension)


*ESM requires extensions for relative imports (import "./foo.js")*.  
[Future of Node --experimental-specifier-resolution flag?](https://www.reddit.com/r/node/comments/uxjtb9/future_of_node_experimentalspecifierresolution/)


I noticed that when `package.json` tells `"type":"module"`, csm modules also
cannot relatively refer modules without extension. It seems a bug but I am not
sure.
