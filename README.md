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

[index.js:12-19](https://github.com/primea/js-primea-capability/blob/9f44019e29fa0a61c74821c9cfbfb4ba2376201b/index.js#L12-L19 "Source code on GitHub")

creates a new capability given the path of the process creating it and a "tag"

**Parameters**

-   `path` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Buffer](https://nodejs.org/api/buffer.html)>** 
-   `tag` **Integer**  (optional, default `0`)
-   `funIndex`   (optional, default `0`)

## serialize

[index.js:25-32](https://github.com/primea/js-primea-capability/blob/9f44019e29fa0a61c74821c9cfbfb4ba2376201b/index.js#L25-L32 "Source code on GitHub")

Serializes the capability

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## deserialize

[index.js:39-42](https://github.com/primea/js-primea-capability/blob/9f44019e29fa0a61c74821c9cfbfb4ba2376201b/index.js#L39-L42 "Source code on GitHub")

Deserializes a Buffer and returns a new instance of `Capability`

**Parameters**

-   `raw` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

## deserializeFromPipe

[index.js:49-59](https://github.com/primea/js-primea-capability/blob/9f44019e29fa0a61c74821c9cfbfb4ba2376201b/index.js#L49-L59 "Source code on GitHub")

Deserializes a capability from a buffer-pipe and returns a new instance of `Capability`

**Parameters**

-   `p` **Pipe** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

# LICENSE
[MPL-2.0][LICENSE]

[LICENSE]: https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2)
