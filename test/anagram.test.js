'use strict'

import { sortBycharCode, isAnagram } from '../src/anagram'

describe('Sort by char code :', () => {
  test('Transformation des mots en code de caractères', () => {
    expect(sortBycharCode('çrâne')).toBe('9799101110114')
  })
})

describe('Anagram :', () => {
  test('Nombre de lettres différentes', () => {
    expect(isAnagram('abc', 'abdc')).toBe(false)
  })

  test('Lettres différentes', () => {
    expect(isAnagram('rr', 'rt')).toBe(false)
  })

  test('Anagramme simple', () => {
    expect(isAnagram('Marion', 'Romain')).toBe(true)
  })

  test('Anagramme avec caractère spéciaux', () => {
    expect(isAnagram('çrâne', 'écran')).toBe(true)
  })

  test('Une phrase', () => {
    expect(isAnagram('Le commandant Cousteau', "Tout commença dans l'eau")).toBe(true)
  })
})
