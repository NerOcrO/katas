'use strict'

import { charToBinary, binaryToChuck, encodeMessage } from '../src/encode-message'

describe('Transformation de caractères en binaire sur 7 bits :', () => {
  test('7 Bits', () => {
    expect(charToBinary('C')).toBe('1000011')
  })

  test('6 bits', () => {
    expect(charToBinary('%')).toBe('0100101')
  })
})

describe('Transformation de binaire à message encodé de Chuck Norris :', () => {
  test('Un 0', () => {
    expect(binaryToChuck('0')).toBe('00 0')
  })

  test('Un 1', () => {
    expect(binaryToChuck('1')).toBe('0 0')
  })

  test('Plusieurs 0', () => {
    expect(binaryToChuck('0000')).toBe('00 0000')
  })

  test('Plusieurs 1', () => {
    expect(binaryToChuck('1111')).toBe('0 0000')
  })
})

describe('Message codé :', () => {
  test('Un lettre', () => {
    expect(encodeMessage('C')).toBe('0 0 00 0000 0 00')
  })

  test('Deux lettres', () => {
    expect(encodeMessage('CC')).toBe('0 0 00 0000 0 000 00 0000 0 00')
  })

  test("Un caractère autre qu'une lettre", () => {
    expect(encodeMessage('%')).toBe('00 0 0 0 00 00 0 0 00 0 0 0')
  })
})
