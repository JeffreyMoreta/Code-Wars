function SeriesSum(n) {
  let ans = 0,
    temp = 1;
  for (let i = 0; i < n; i++) {
    ans += 1 / temp;
    temp += 3;
  }
  return String(ans.toFixed(2));
}
