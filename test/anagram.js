'use strict'

import assert from 'assert'
import { sortBycharCode, isAnagram } from '../src/anagram'

describe('Sort by char code :', () => {
  it('Transformation des mots en code de caractères', () => {
    assert.strictEqual(sortBycharCode('çrâne'), '9799101110114')
  })
})

describe('Anagram :', () => {
  it('Nombre de lettres différentes', () => {
    assert.strictEqual(isAnagram('abc', 'abdc'), false)
  })

  it('Lettres différentes', () => {
    assert.strictEqual(isAnagram('rr', 'rt'), false)
  })

  it('Anagramme simple', () => {
    assert.strictEqual(isAnagram('Marion', 'Romain'), true)
  })

  it('Anagramme avec caractère spéciaux', () => {
    assert.strictEqual(isAnagram('çrâne', 'écran'), true)
  })

  it('Une phrase', () => {
    assert.strictEqual(isAnagram('Le commandant Cousteau', "Tout commença dans l'eau"), true)
  })
})
