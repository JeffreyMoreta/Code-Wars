function f(n) {
  if (!n) return false;
  if (typeof n !== "number") return false;
  if (!Number.isInteger(n)) return false;
  if (n <= 0) return false;
  return [...Array(n + 1).keys()].reduce((a, b) => a + b);
}
