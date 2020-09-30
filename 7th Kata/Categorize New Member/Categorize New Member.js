function openOrSenior(data) {
  return data.map((x) => {
    if (x[0] >= 55 && x[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}
