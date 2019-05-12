'use strict'

// https://fr.wikipedia.org/wiki/Palindrome

const isPalindrome = wording => !wording
  .split('')
  .reverse()
  .join('')
  .localeCompare(wording, 'fr', { sensitivity: 'base', ignorePunctuation: true })

export default isPalindrome
