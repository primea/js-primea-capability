# SYNOPSIS 
[![NPM Package](https://img.shields.io/npm/v/primea-capability.svg?style=flat-square)](https://www.npmjs.org/package/primea-capability)
[![Build Status](https://img.shields.io/travis/primea/js-primea-capability.svg?branch=master&style=flat-square)](https://travis-ci.org/primea/js-primea-capability)
[![Coverage Status](https://img.shields.io/coveralls/primea/js-primea-capability.svg?style=flat-square)](https://coveralls.io/r/primea/js-primea-capability)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)  

This implements basic capability de/serialization

# INSTALL
`npm install primea-capability`

# USAGE

```javascript
const Capability = require('primea-capability')
const id = Buffer.alloc(20)
const cap = new Capability(id, 5)
```

## constructor

[index.js:11-14](https://github.com/primea/js-primea-capability/blob/b50729c29d14950556e098f75f62ae1f7aa8f470/index.js#L11-L14 "Source code on GitHub")

creates a new capability given the id of the process creating it and a "tag"

**Parameters**

-   `id` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `tag` **Integer**  (optional, default `0`)

## serialize

[index.js:20-25](https://github.com/primea/js-primea-capability/blob/b50729c29d14950556e098f75f62ae1f7aa8f470/index.js#L20-L25 "Source code on GitHub")

Serializes the capability

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## deserialize

[index.js:32-35](https://github.com/primea/js-primea-capability/blob/b50729c29d14950556e098f75f62ae1f7aa8f470/index.js#L32-L35 "Source code on GitHub")

Deserializes a Buffer and returns a new instance of `Capability`

**Parameters**

-   `raw` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## deserializeFromPipe

[index.js:42-46](https://github.com/primea/js-primea-capability/blob/b50729c29d14950556e098f75f62ae1f7aa8f470/index.js#L42-L46 "Source code on GitHub")

Deserializes a capability from a buffer-pipe and returns a new instance of `Capability`

**Parameters**

-   `p` **Pipe** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 


# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
