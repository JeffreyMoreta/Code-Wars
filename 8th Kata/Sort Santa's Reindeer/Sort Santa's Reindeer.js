function sortReindeer(reindeerNames) {
  let sorted = reindeerNames.sort((a, b) => {
    let aReinLast = a.split(" ").pop();
    let bReinLast = b.split(" ").pop();
    if(aReinLast < bReinLast) return -1;
    if(aReinLast > bReinLast) return 1;
    return 0;
  });
  return(sorted);
}
