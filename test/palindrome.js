'use strict'

import assert from 'assert'
import isPalindrome from '../src/palindrome'

describe('Palindrome :', () => {
  it('Des lettres au hasard', () => {
    assert.strictEqual(isPalindrome('abcd'), false)
  })

  it('Un mot', () => {
    assert.strictEqual(isPalindrome('Radar'), true)
  })

  it('Un prénom', () => {
    assert.strictEqual(isPalindrome('Ève'), true)
  })

  it('Une phrase', () => {
    assert.strictEqual(isPalindrome('La mariée ira mal'), true)
  })
})
