'use strict'

import assert from 'assert'
import { charToBinary, binaryToChuck, encodeMessage } from '../src/encode-message'

describe('Transformation de caractères en binaire sur 7 bits :', () => {
  it('7 Bits', () => {
    assert.strictEqual(charToBinary('C'), '1000011')
  })

  it('6 bits', () => {
    assert.strictEqual(charToBinary('%'), '0100101')
  })
})

describe('Transformation de binaire à message encodé de Chuck Norris :', () => {
  it('Un 0', () => {
    assert.strictEqual(binaryToChuck('0'), '00 0')
  })

  it('Un 1', () => {
    assert.strictEqual(binaryToChuck('1'), '0 0')
  })

  it('Plusieurs 0', () => {
    assert.strictEqual(binaryToChuck('0000'), '00 0000')
  })

  it('Plusieurs 1', () => {
    assert.strictEqual(binaryToChuck('1111'), '0 0000')
  })
})

describe('Message codé :', () => {
  it('Un lettre', () => {
    assert.strictEqual(encodeMessage('C'), '0 0 00 0000 0 00')
  })

  it('Deux lettres', () => {
    assert.strictEqual(encodeMessage('CC'), '0 0 00 0000 0 000 00 0000 0 00')
  })

  it("Un caractère autre qu'une lettre", () => {
    assert.strictEqual(encodeMessage('%'), '00 0 0 0 00 00 0 0 00 0 0 0')
  })
})
