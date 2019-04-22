'use strict'

// https://en.wikipedia.org/wiki/Caesar_cipher

const caesarCipher = text => offset => (direction) => {
  const substitution = (letter) => {
    const alphabetLength = 26
    const Z = 90
    const z = 122
    let charCodeAt = letter.charCodeAt()

    offset = offset < alphabetLength ? offset : offset - alphabetLength

    if (direction === 'left') {
      charCodeAt -= offset - alphabetLength
    }
    else {
      charCodeAt += offset
    }

    const index = charCodeAt <= (letter <= 'Z' ? Z : z) ? charCodeAt : charCodeAt - alphabetLength

    return String.fromCharCode(index)
  }

  return text.replace(/[a-zA-Z]/g, substitution)
}

export default caesarCipher
