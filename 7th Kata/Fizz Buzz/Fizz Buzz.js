function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    if ((i + 1) % 5 === 0 && (i + 1) % 3 === 0) return "FizzBuzz";
    if ((i + 1) % 5 === 0) return "Buzz";
    if ((i + 1) % 3 === 0) return "Fizz";
    return i + 1;
  });
}
