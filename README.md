# fl-assert

Simple assertion functions to throw errors in the code.

(READ THE DOCS)[http://fourlabsldn.github.io/fl-assert/index.html]
## Usage
Use it like this:
``` javascript
const myCollection = [1, 2];

assert(myCollection.length > 0, 'myCollection must have at least one element'); // Nothing happens
assert(myCollection.length > 5, 'myCollection must have at least one element'); // Throws the string passed as an error message

assert.warn(typeof myCollection[0] === 'number', 'First element of collection is not a number'); // Nothing happens
assert.warn(typeof myCollection[0] === 'string', 'First element of collection is not a string'); // Logs a warning with the string passed as the warning message
```

## ES6
The main file in the dist folder is an ES6 module, and (it is specified as such)[https://github.com/rollup/rollup/wiki/jsnext:main], so you can just write
this line below start rocking.
``` javascript
import assert from 'fl-assert'
```
