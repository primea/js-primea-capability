const Buffer = require('safe-buffer').Buffer
const leb128 = require('leb128').unsigned
const Pipe = require('buffer-pipe')

module.exports = class Capability {
  /**
   * creates a new capability given the id of the process creating it and a "tag"
   * @param {Buffer} id
   * @param {Integer} tag
   */
  constructor (id, tag = 0) {
    this.destId = id
    this.tag = tag
  }

  /**
   * Serializes the capability
   * @returns {Buffer}
   */
  serialize () {
    return Buffer.concat([
      this.destId,
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
    const id = p.read(20)
    const tag = leb128.readBn(p).toNumber()
    return new Capability(id, tag)
  }
}
