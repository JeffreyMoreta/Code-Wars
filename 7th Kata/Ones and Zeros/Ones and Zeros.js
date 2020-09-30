const binaryArrayToNumber = (arr) => {
  let ans = 0,
    temp = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1) {
      ans += temp;
    }
    temp = temp * 2;
  }
  return ans;
};
