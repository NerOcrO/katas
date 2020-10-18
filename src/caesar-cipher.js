'use strict'

// https://en.wikipedia.org/wiki/Caesar_cipher

const substitution = (offset) => (direction) => (letter) => {
  const alphabetLength = 26
  const Z = 90
  const z = 122
  const offset2 = offset < alphabetLength ? offset : offset - alphabetLength
  let charCodeAt = letter.charCodeAt()

  if (direction === 'left') {
    charCodeAt -= offset2 - alphabetLength
  }
  else {
    charCodeAt += offset2
  }

  const index = charCodeAt <= (letter <= 'Z' ? Z : z) ? charCodeAt : charCodeAt - alphabetLength

  return String.fromCharCode(index)
}

const caesarCipher = (text) => (offset) => (direction) =>
  text.replace(/[a-zA-Z]/g, substitution(offset)(direction))

export default caesarCipher
