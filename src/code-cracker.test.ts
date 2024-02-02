function chiffrer(chaineBrute: string): string {
  enum CleDeChiffrage {
    'a' = '!',
    'b' = ')',
    'c' = '"',
    'd' = '(',
    'e' = '£',
    'f' = '*',
    'g' = '%',
    'h' = '&',
    'i' = '>',
    'j' = '<',
    'k' = '@',
    'l' = 'a',
    'm' = 'b',
    'n' = 'c',
  }
  type Alphabet = keyof typeof CleDeChiffrage
  const alphabet = Object.keys(CleDeChiffrage)

  return chaineBrute
    .split('')
    .map((caractere: string) => {
      if (caractere === ' ') {
        return caractere
      } else if (alphabet.includes(caractere)) {
        return CleDeChiffrage[caractere as Alphabet]
      } else {
        return '_'
      }
    })
    .join('')
}

describe('chiffrement', () => {
  it('chiffrer une chaine de caractères dans une autre', () => {
    // GIVEN
    const chaineBrute = 'chaine'

    // WHEN
    const chaineChiffree = chiffrer(chaineBrute)

    // THEN
    expect(chaineChiffree).toBe('"&!>c£')
  })

  it('chiffrer une chaine de caractères dans une autre contenant une espace', () => {
    // GIVEN
    const chaineBrute = 'chaine chaine'

    // WHEN
    const chaineChiffree = chiffrer(chaineBrute)

    // THEN
    expect(chaineChiffree).toBe('"&!>c£ "&!>c£')
  })

  it('chiffrer une chaine de caractères dans une autre quand un caractère nest pas reconnue', () => {
    // GIVEN
    const chaineBrute = 'chaîne'

    // WHEN
    const chaineChiffree = chiffrer(chaineBrute)

    // THEN
    expect(chaineChiffree).toBe('"&!_c£')
  })
})
