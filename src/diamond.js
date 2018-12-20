'use strict'

// http://codingdojo.org/kata/Diamond/

const createDiamond = (userLetter) => {
  if (!/^[a-zA-Z]$/.test(userLetter)) {
    return '-'
  }

  const transformToPyramid = (letter, index, array) =>
    [...Array(array.length * 2 - 1)]
      .fill(' ')
      .fill(letter, array.length - index - 1, array.length - index)
      .fill(letter, array.length + index - 1, array.length + index)
      .join('')
  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ]
  const diagonal = alphabet.slice(0, alphabet.indexOf(userLetter.toUpperCase()) + 1)
  const diamondTop = diagonal.map(transformToPyramid)
  const diamondBottom = diamondTop.slice().slice(0, -1).reverse()
  const diamond = diamondTop.concat(diamondBottom)

  return diamond.join('\n')
}

export default createDiamond

// console.log(createDiamond('%'))
// console.log(createDiamond('%a'))
// console.log(createDiamond('a'))
// console.log(createDiamond('c'))
// console.log(createDiamond('z'))
