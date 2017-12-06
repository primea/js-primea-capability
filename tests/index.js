const tape = require('tape')
const Capability = require('../')

tape('tests', (t) => {
  const id = Buffer.alloc(20)
  const cap = new Capability(id, 5)
  const raw = cap.serialize()
  const cap2 = Capability.deserialize(raw)

  t.deepEqual(cap2.destId, id, 'should serialize/deserialize corretly')
  t.deepEqual(cap2.tag, 5, 'should serialize/deserialize corretly')

  const cap3 = new Capability(id)
  t.deepEqual(cap3.tag, 0, 'should serialize/deserialize corretly')
  t.end()
})
