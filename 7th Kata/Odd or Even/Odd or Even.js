function oddOrEven(array) {
  let ans = [];
  if (!array.length) {
    return "even";
  } else {
    ans = array.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd";
  }
  return ans;
}
