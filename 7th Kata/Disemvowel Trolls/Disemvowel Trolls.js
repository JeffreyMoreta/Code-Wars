function disemvowel(str) {
  let vowels = ["a","e","i","o","u"];

  return str.split('').filter((x) => {
    return vowels.indexOf(x.toLowerCase()) == -1;
  }).join('');
}
