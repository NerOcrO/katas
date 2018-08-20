'use strict'

import assert from 'assert'
import createDiamond from '../src/diamond'

describe('Diamond :', () => {
  it("Passer autre chose qu'une lettre", () => {
    assert.strictEqual(createDiamond('%'), '-')
  })

  it('Passer X lettres', () => {
    assert.strictEqual(createDiamond('a%a'), '-')
  })

  it('Afficher la première ligne', () => {
    assert.strictEqual(createDiamond('a'), 'A')
  })

  it("Afficher jusqu'à 'C'", () => {
    assert.strictEqual(createDiamond('c'), '  A  \n B B \nC   C\n B B \n  A  ')
  })
})
