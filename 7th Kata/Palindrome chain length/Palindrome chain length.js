var palindromeChainLength = function (n, i = 0) {
  if (n === Number(`${n}`.split("").reverse().join(""))) return i;
  return palindromeChainLength(
    n + Number(`${n}`.split("").reverse().join("")),
    i + 1
  );
};
