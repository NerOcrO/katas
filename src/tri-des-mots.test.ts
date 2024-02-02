type MotEtOccurence = {
  mot: string
  occurence: number
}

function trierLesMotsDUnTexte(texte: string): MotEtOccurence[] {
  return texte
    .split(' ')
    .reduce(regrouperParOccurenceEtSupprimerLaCasse, [])
    .map(supprimerPonctuation)
    .sort(trierParOccurence)
    // .flatMap((name, index, arr) => {
    //   console.log(arr)
    //   return name
    // })
}

function regrouperParOccurenceEtSupprimerLaCasse(accumulator: MotEtOccurence[], mot: string): MotEtOccurence[] {
  const motRepete = accumulator.find((motEtOccurenceBrute: MotEtOccurence): boolean => motEtOccurenceBrute.mot === mot.toLowerCase())

  if (motRepete === undefined) {
    accumulator.push({
      mot: mot.toLowerCase(),
      occurence: 1,
    })
    return accumulator
  } else {
    return accumulator
      .map((motEtOccurenceBrute: MotEtOccurence): MotEtOccurence => {
        if (motEtOccurenceBrute.mot === mot.toLowerCase()) {
          return {
            mot: motEtOccurenceBrute.mot,
            occurence: motEtOccurenceBrute.occurence + 1,
          }
        } else {
          return motEtOccurenceBrute
        }
      })
  }
}

function supprimerPonctuation(motEtOccurence: MotEtOccurence): MotEtOccurence {
  return {
    mot: motEtOccurence.mot.replace(/;|,|!/, ''),
    occurence: motEtOccurence.occurence,
  }
}

function trierParOccurence(a: MotEtOccurence, b: MotEtOccurence): number {
  const occurenceA = a.occurence
  const occurenceB = b.occurence

  if (occurenceB < occurenceA) {
    return -1
  }

  return occurenceA > occurenceB ? 1 : 0
}

describe('tri de mots', () => {
  it('transformer un texte en une structure de données avec loccurence des mots', () => {
    // GIVEN
    const texte = 'mon petit poney'

    // WHEN
    const motsTries = trierLesMotsDUnTexte(texte)

    // THEN
    expect(motsTries).toStrictEqual<MotEtOccurence[]>([
      {
        mot: 'mon',
        occurence: 1,
      },
      {
        mot: 'petit',
        occurence: 1,
      },
      {
        mot: 'poney',
        occurence: 1,
      },
    ])
  })

  it('transformer un texte avec des mots qui se répètent en une structure de données avec loccurence des mots trié par occurence', () => {
    // GIVEN
    const texte = 'mon petit poney poney'

    // WHEN
    const motsTries = trierLesMotsDUnTexte(texte)

    // THEN
    expect(motsTries).toStrictEqual<MotEtOccurence[]>([
      {
        mot: 'poney',
        occurence: 2,
      },
      {
        mot: 'mon',
        occurence: 1,
      },
      {
        mot: 'petit',
        occurence: 1,
      },
    ])
  })

  it('transformer un texte avec des mots en majuscule en une structure de données avec loccurence des mots', () => {
    // GIVEN
    const texte = 'MON petit Poney'

    // WHEN
    const motsTries = trierLesMotsDUnTexte(texte)

    // THEN
    expect(motsTries).toStrictEqual<MotEtOccurence[]>([
      {
        mot: 'mon',
        occurence: 1,
      },
      {
        mot: 'petit',
        occurence: 1,
      },
      {
        mot: 'poney',
        occurence: 1,
      },
    ])
  })

  it('transformer un texte en supprimant la ponctuation en une structure de données avec loccurence des mots', () => {
    // GIVEN
    const texte = 'mon; petit, poney!'

    // WHEN
    const motsTries = trierLesMotsDUnTexte(texte)

    // THEN
    expect(motsTries).toStrictEqual<MotEtOccurence[]>([
      {
        mot: 'mon',
        occurence: 1,
      },
      {
        mot: 'petit',
        occurence: 1,
      },
      {
        mot: 'poney',
        occurence: 1,
      },
    ])
  })

  it.only('transformer un texte avec des mots qui se répètent en une structure de données avec loccurence des mots trié par occurence puis par mot', () => {
    // GIVEN
    const texte = 'mon poney poney petit petit'

    // WHEN
    const motsTries = trierLesMotsDUnTexte(texte)

    // THEN
    expect(motsTries).toStrictEqual<MotEtOccurence[]>([
      {
        mot: 'petit',
        occurence: 2,
      },
      {
        mot: 'poney',
        occurence: 2,
      },
      {
        mot: 'mon',
        occurence: 1,
      },
    ])
  })
})
