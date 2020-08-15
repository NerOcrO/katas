'use strict'

import createDiamond from '../diamond'

describe('Diamond :', () => {
  test("Passer autre chose qu'une lettre", () => {
    expect(createDiamond('%')).toBe('-')
  })

  test('Passer X lettres', () => {
    expect(createDiamond('a%a')).toBe('-')
  })

  test('Afficher la première ligne', () => {
    expect(createDiamond('a')).toBe('A')
  })

  test("Afficher jusqu'à 'C'", () => {
    expect(createDiamond('c')).toBe('  A  \n B B \nC   C\n B B \n  A  ')
  })
})
