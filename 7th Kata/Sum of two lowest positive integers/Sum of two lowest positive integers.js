function sumTwoSmallestNumbers(numbers) {
  let sum = numbers.sort((a, b) => a - b)
  return sum[0] + sum[1]
}
