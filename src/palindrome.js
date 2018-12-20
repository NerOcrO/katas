'use strict'

// https://fr.wikipedia.org/wiki/Palindrome

const isPalindrome = wording => !wording
  .split('')
  .reverse()
  .join('')
  .localeCompare(wording, 'fr', { sensitivity: 'base', ignorePunctuation: true })

export default isPalindrome

// console.log(isPalindrome('abcd'))
// console.log(isPalindrome('Radar'))
// console.log(isPalindrome('Ève'))
// console.log(isPalindrome('La mariée ira mal'))
