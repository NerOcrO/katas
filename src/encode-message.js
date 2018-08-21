'use strict'

// https://www.codingame.com/training/easy/chuck-norris

export const charToBinary = char =>
  '0'
    .concat(char.charCodeAt().toString(2))
    .slice(-7)
export const binaryToChuck = binary => `${(binary[0] === '1' ? '0 ' : '00 ')}${'0'.repeat(binary.length)}`
export const encodeMessage = message =>
  message
    .split('')
    .map(charToBinary)
    .join('')
    .match(/(1+|0+)/g)
    .map(binaryToChuck)
    .join(' ')

console.log(encodeMessage('C'))
console.log(encodeMessage('CC'))
console.log(encodeMessage('%'))
console.log(encodeMessage("Chuck Norris' keyboard has 2 keys: 0 and white space."))
