'use strict'

// https://en.wikipedia.org/wiki/Caesar_cipher

const caesarCipher = (text, offset = 1, right = true) => {
  const substitution = (letter) => {
    const alphabetLength = 26
    const Z = 90
    const z = 122
    let charCodeAt = letter.charCodeAt()

    offset = offset < alphabetLength ? offset : offset - alphabetLength

    if (right) {
      charCodeAt += offset
    }
    else {
      charCodeAt -= offset - alphabetLength
    }

    const index = charCodeAt <= (letter <= 'Z' ? Z : z) ? charCodeAt : charCodeAt - alphabetLength

    return String.fromCharCode(index)
  }

  return text.replace(/[a-zA-Z]/g, substitution)
}

export default caesarCipher

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27))
console.log(caesarCipher("L'encyclopédie et 2 moi !", 1))

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 0, false))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1, false))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 26, false))
console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 27, false))
console.log(caesarCipher("L'encyclopédie et 2 moi !", 1, false))
