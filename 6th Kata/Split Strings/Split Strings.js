function solution(str) {
  const ans = [];
  for (let i = 0; i < str.length; i += 2) {
    ans.push(`${str[i] + (str[i + 1] || "_")}`);
  }
  return ans;
}
