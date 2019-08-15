'use strict'

import caesarCipher from '../caesar-cipher'

describe('Caesar cipher:', () => {
  let decalage

  describe('Alphabet', () => {
    beforeEach(() => {
      decalage = caesarCipher('abcdefghijklmnopqrstuvwxyz')
    })

    test('Décalage de 0 vers la droite', () => {
      expect(decalage(0)('right')).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    test('Décalage de 1 vers la droite', () => {
      expect(decalage(1)('right')).toBe('bcdefghijklmnopqrstuvwxyza')
    })

    test('Décalage de 26 vers la droite', () => {
      expect(decalage(26)('right')).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    test('Décalage de 27 vers la droite', () => {
      expect(decalage(27)('right')).toBe('bcdefghijklmnopqrstuvwxyza')
    })

    test('Décalage de 1 vers la droite mais avec null ou undefined', () => {
      expect(decalage(1)(null)).toBe('bcdefghijklmnopqrstuvwxyza')
      expect(decalage(1)()).toBe('bcdefghijklmnopqrstuvwxyza')
    })

    test('Décalage de 0 vers la gauche', () => {
      expect(decalage(0)('left')).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    test('Décalage de 1 vers la gauche', () => {
      expect(decalage(1)('left')).toBe('zabcdefghijklmnopqrstuvwxy')
    })

    test('Décalage de 26 vers la gauche', () => {
      expect(decalage(26)('left')).toBe('abcdefghijklmnopqrstuvwxyz')
    })

    test('Décalage de 27 vers la gauche', () => {
      expect(decalage(27)('left')).toBe('zabcdefghijklmnopqrstuvwxy')
    })
  })

  describe('Un texte compliqué', () => {
    beforeEach(() => {
      decalage = caesarCipher("L'encyclopédie et 2 moi !")
    })

    test('Décalage de 1 vers la droite', () => {
      expect(decalage(1)('right')).toBe("M'fodzdmpqéejf fu 2 npj !")
    })

    test('Décalage de 1 vers la gauche', () => {
      expect(decalage(1)('left')).toBe("K'dmbxbknoéchd ds 2 lnh !")
    })
  })
})
