'use strict'

import assert from 'assert'
import fizzBuzz from '../src/fizzbuzz'

describe('FizzBuzz :', () => {
  it('Nombre divisible par 3', () => {
    assert.strictEqual(fizzBuzz(3), 'fizz')
  })

  it('Nombre divisible par 5', () => {
    assert.strictEqual(fizzBuzz(5), 'buzz')
  })

  it('Nombre divisible par 3 et 5', () => {
    assert.strictEqual(fizzBuzz(15), 'fizzbuzz')
  })

  it('Nombre divisible ni par 3 et ni par 5', () => {
    assert.strictEqual(fizzBuzz(2), 2)
  })
})
