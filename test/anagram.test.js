'use strict'

import { sortBycharCode, isAnagram } from '../src/anagram'

describe('Sort by char code :', () => {
  test('Transformation des mots en code de caractères', () => {
    expect(sortBycharCode('çrâne')).toBe('9799101110114')
  })
})

describe('Anagram :', () => {
  test('Nombre de lettres différentes', () => {
    expect(isAnagram('abc', 'abdc')).toBeFalsy()
  })

  test('Lettres différentes', () => {
    expect(isAnagram('rr', 'rt')).toBeFalsy()
  })

  test('Anagramme simple', () => {
    expect(isAnagram('Marion', 'Romain')).toBeTruthy()
  })

  test('Anagramme avec caractère spéciaux', () => {
    expect(isAnagram('çrâne', 'écran')).toBeTruthy()
  })

  test('Une phrase', () => {
    expect(isAnagram('Le commandant Cousteau', "Tout commença dans l'eau")).toBeTruthy()
  })
})
