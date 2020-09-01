function getAverage(marks){
  let sum = 0;
  marks.forEach(mark => {
    sum += mark;
  })
  return Math.floor(sum/marks.length);
}
