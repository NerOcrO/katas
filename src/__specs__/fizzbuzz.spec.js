'use strict'

import fizzBuzz from '../fizzbuzz'

describe('FizzBuzz :', () => {
  test('Nombre divisible par 3', () => {
    expect(fizzBuzz(3)).toBe('fizz')
  })

  test('Nombre divisible par 5', () => {
    expect(fizzBuzz(5)).toBe('buzz')
  })

  test('Nombre divisible par 3 et 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  test('Nombre divisible ni par 3 et ni par 5', () => {
    expect(fizzBuzz(2)).toBe(2)
  })
})
