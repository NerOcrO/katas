'use strict'

import isPalindrome from '../palindrome'

describe('Palindrome :', () => {
  test('Des lettres au hasard', () => {
    expect(isPalindrome('abcd')).toBe(false)
  })

  test('Un mot', () => {
    expect(isPalindrome('Radar')).toBe(true)
  })

  test('Un prénom', () => {
    expect(isPalindrome('Ève')).toBe(true)
  })

  test('Une phrase', () => {
    expect(isPalindrome('La mariée ira mal')).toBe(true)
  })
})
