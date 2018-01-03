const assert = require('assert')
const Buffer = require('safe-buffer').Buffer
const leb128 = require('leb128').unsigned
const Pipe = require('buffer-pipe')

module.exports = class Capability {
  /**
   * creates a new capability given the id of the process creating it and a "tag"
   * @param {Buffer} id
   * @param {Integer} tag
   */
  constructor (path, tag = 0, funIndex = 0) {
    if (!Array.isArray(path)) {
      path = [path]
    }
    this.version = 0
    this.path = path
    this.tag = tag
  }

  /**
   * Serializes the capability
   * @returns {Buffer}
   */
  serialize () {
    return Buffer.concat([
      leb128.encode(this.version),
      leb128.encode(this.path.length),
      Buffer.concat(this.path),
      leb128.encode(this.tag)
    ])
  }

  /**
   * Deserializes a Buffer and returns a new instance of `Capability`
   * @param {Buffer} raw
   * @returns {Object}
   */
  static deserialize (raw) {
    const p = new Pipe(raw)
    return Capability.deserializeFromPipe(p)
  }

  /**
   * Deserializes a capability from a buffer-pipe and returns a new instance of `Capability`
   * @param {Pipe} p
   * @returns {Object}
   */
  static deserializeFromPipe (p) {
    const version = leb128.readBn(p).toNumber()
    assert.equal(version, 0, 'version should be 0')
    let numOfSegments = leb128.readBn(p).toNumber()
    const path = []
    while (numOfSegments--) {
      path.push(p.read(20))
    }
    const tag = leb128.readBn(p).toNumber()
    return new Capability(path, tag)
  }
}
