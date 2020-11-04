const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((x, i, arr) => x !== arr[i - 1])
    .join(" ");
