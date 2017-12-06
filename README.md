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

# API

## constructor

creates a new capability given the id of the process creating it and a "tag"

**Parameters**

-   `id` **[Buffer](https://nodejs.org/api/buffer.html)** 
-   `tag` **Integer**  (optional, default `0`)

## serialize

Serializes the capability

Returns **[Buffer](https://nodejs.org/api/buffer.html)** 

## deserialize

Deserializes a Buffer and returns a new instance of `Capability`

**Parameters**

-   `raw` **[Buffer](https://nodejs.org/api/buffer.html)** 

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 


# LICENSE
[MPL-2.0](https://tldrlegal.com/license/mozilla-public-license-2.0-(mpl-2))
