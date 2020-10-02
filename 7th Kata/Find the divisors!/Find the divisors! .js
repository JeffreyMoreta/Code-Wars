function divisors(integer) {
  let ans = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      ans.push(i);
    }
  }
  return ans.length > 0 ? ans : `${integer} is prime`;
}
