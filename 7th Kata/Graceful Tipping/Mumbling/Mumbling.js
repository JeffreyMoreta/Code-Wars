function accum(s) {
	let splitString = s.toLowerCase().split("");
  let lastArray = [];
  for(i = 1; i < splitString.length+1; i++){
    lastArray.push(Array(i).fill(splitString[i-1]));
  }
  for(j = 0; j< lastArray.length; j++){
    lastArray[j][0] = lastArray[j][0].charAt(0).toUpperCase();
  }
var answer = lastArray.join('-').replace(/,/g, '');
return answer;
}