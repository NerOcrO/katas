'use strict'

import assert from 'assert'
import caesarCipher from '../src/caesar-cipher'

describe('Caesar cipher:', () => {
  it('Décalage de 0 vers la droite', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0), 'abcdefghijklmnopqrstuvwxyz')
  })

  it('Décalage de 1 vers la droite', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1), 'bcdefghijklmnopqrstuvwxyza')
  })

  it('Décalage de 26 vers la droite', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26), 'abcdefghijklmnopqrstuvwxyz')
  })

  it('Décalage de 27 vers la droite', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27), 'bcdefghijklmnopqrstuvwxyza')
  })

  it("Décalage de 1 vers la droite d'un texte compliqué", () => {
    assert.strictEqual(caesarCipher("L'encyclopédie et 2 moi !", 1), "M'fodzdmpqéejf fu 2 npj !")
  })

  it('Décalage de 0 vers la gauche', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0, false), 'abcdefghijklmnopqrstuvwxyz')
  })

  it('Décalage de 1 vers la gauche', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1, false), 'zabcdefghijklmnopqrstuvwxy')
  })

  it('Décalage de 26 vers la gauche', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26, false), 'abcdefghijklmnopqrstuvwxyz')
  })

  it('Décalage de 27 vers la gauche', () => {
    assert.strictEqual(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27, false), 'zabcdefghijklmnopqrstuvwxy')
  })

  it("Décalage de 1 vers la gauche d'un texte compliqué", () => {
    assert.strictEqual(caesarCipher("L'encyclopédie et 2 moi !", 1, false), "K'dmbxbknoéchd ds 2 lnh !")
  })
})
