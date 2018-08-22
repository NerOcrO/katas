'use strict'

// http://codingdojo.org/kata/FizzBuzz/

const fizzBuzz = number => number % 15 ? number % 3 ? number % 5 ? number : 'buzz' : 'fizz' : 'fizzbuzz'

export default fizzBuzz

for (let index = 1; index < 100; index++) {
  console.log(fizzBuzz(index))
}
