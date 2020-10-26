function solution(pairs) {
  const test = [];
  for (const key in pairs) {
    test.push(`${key} = ${pairs[key]}`);
  }
  return test.join(",");
}
