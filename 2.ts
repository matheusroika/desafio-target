export function isNumberInFibonacci(number: number) {
  let prevValue = 0
  let currentValue = 1
  for (let sum = 0; sum <= number; sum = prevValue + currentValue) {
    prevValue = currentValue
    currentValue = sum
  }
  const message = currentValue === number ? `O número ${number} pertence a sequência de Fibonacci :)` : `O número ${number} não pertence a sequência de Fibonacci :(`
  return message
}
