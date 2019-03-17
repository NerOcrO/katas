'use strict'

import caesarCipher from '../src/caesar-cipher'

describe('Caesar cipher:', () => {
  test('Décalage de 0 vers la droite', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0)).toBe('abcdefghijklmnopqrstuvwxyz')
  })

  test('Décalage de 1 vers la droite', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza')
  })

  test('Décalage de 26 vers la droite', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26)).toBe('abcdefghijklmnopqrstuvwxyz')
  })

  test('Décalage de 27 vers la droite', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27)).toBe('bcdefghijklmnopqrstuvwxyza')
  })

  test("Décalage de 1 vers la droite d'un texte compliqué", () => {
    expect(caesarCipher("L'encyclopédie et 2 moi !", 1)).toBe("M'fodzdmpqéejf fu 2 npj !")
  })

  test('Décalage de 1 vers la droite mais avec null', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1, null)).toBe('bcdefghijklmnopqrstuvwxyza')
  })

  test('Décalage de 0 vers la gauche', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0, false)).toBe('abcdefghijklmnopqrstuvwxyz')
  })

  test('Décalage de 1 vers la gauche', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1, false)).toBe('zabcdefghijklmnopqrstuvwxy')
  })

  test('Décalage de 26 vers la gauche', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26, false)).toBe('abcdefghijklmnopqrstuvwxyz')
  })

  test('Décalage de 27 vers la gauche', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27, false)).toBe('zabcdefghijklmnopqrstuvwxy')
  })

  test("Décalage de 1 vers la gauche d'un texte compliqué", () => {
    expect(caesarCipher("L'encyclopédie et 2 moi !", 1, false)).toBe("K'dmbxbknoéchd ds 2 lnh !")
  })
})
