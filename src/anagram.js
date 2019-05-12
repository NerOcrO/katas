'use strict'

// https://fr.wikipedia.org/wiki/Anagramme

export const sortBycharCode = wording => wording
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f| |']/g, '')
  .split('')
  .map(char => char.charCodeAt())
  .sort((a, b) => a - b)
  .join('')
export const isAnagram = (base, anagram) => sortBycharCode(base) === sortBycharCode(anagram)
