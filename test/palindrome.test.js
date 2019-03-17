'use strict'

import isPalindrome from '../src/palindrome'

describe('Palindrome :', () => {
  test('Des lettres au hasard', () => {
    expect(isPalindrome('abcd')).toBeFalsy()
  })

  test('Un mot', () => {
    expect(isPalindrome('Radar')).toBeTruthy()
  })

  test('Un prénom', () => {
    expect(isPalindrome('Ève')).toBeTruthy()
  })

  test('Une phrase', () => {
    expect(isPalindrome('La mariée ira mal')).toBeTruthy()
  })
})
