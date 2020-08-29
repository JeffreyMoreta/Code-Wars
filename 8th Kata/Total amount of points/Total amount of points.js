function points(games) {
  let score = 0;
  for(let i = 0; i < games.length; i++){
    let x = games[i].split(":")[0];
    let y = games[i].split(":")[1];
    console.log(x);
    console.log(y);
    if(x>y){
      score += 3;
    }else if(x==y){
      score++;
    }
  }
  return score;
}
