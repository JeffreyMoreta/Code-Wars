function isPangram(string) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  const split = string.toLowerCase().match(/\w/g);
  return alphabet.filter((x) => !split.includes(x)).length === 0;
}
