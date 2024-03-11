import { one } from './1'
import { isNumberInFibonacci } from './2'
import { reverseString } from './5'

function showResults() {
  const oneResult = one()
  const twoResult = isNumberInFibonacci(34)
  const fiveResult = reverseString('socorram me subi no onibus em marrocos')
  console.log(`1) ${oneResult}\n2) ${twoResult}\n5) ${fiveResult}`)
}

showResults()