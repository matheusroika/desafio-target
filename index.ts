function one() {
  const index = 13
  let sum = 0
  for (let k = 0; k < index; k++) {
    sum = sum + k
  }
  return sum
}

function isNumberInFibonacci(number: number) {
  let prevValue = 0
  let currentValue = 1
  for (let sum = 0; sum <= number; sum = prevValue + currentValue) {
    prevValue = currentValue
    currentValue = sum
  }
  const message = currentValue === number ? `O número ${number} pertence a sequência de Fibonacci :)` : `O número ${number} não pertence a sequência de Fibonacci :(`
  return message
}

function reverseString(string: string) {
  let newString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
  }
  return newString
}

function showResults() {
  const oneResult = one()
  const twoResult = isNumberInFibonacci(34)
  const fiveResult = reverseString('socorram me subi no onibus em marrocos')
  console.log(`1) ${oneResult}\n2) ${twoResult}\n5) ${fiveResult}`)
}

showResults()