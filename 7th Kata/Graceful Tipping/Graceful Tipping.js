function gracefulTipping(bill) {
  if(bill<10){
    return Math.ceil(bill * 1.15);
  }else if(bill * 1.15 < 100){
    return Math.ceil((bill * 1.15)/5) * 5;
  }else if(bill * 1.15 < 1000){
    return Math.ceil((bill * 1.15)/50) * 50;
  }else if(bill * 1.15 < 10000){
    return Math.ceil((bill * 1.15)/500) * 500;
  }else if(bill * 1.15 < 100000){
    return Math.ceil((bill * 1.15)/5000) * 5000;
  }else if(bill * 1.15 < 1000000){
    return Math.ceil((bill * 1.15)/50000) * 50000;
  }else{
    return Math.ceil((bill * 1.15)/500000) * 500000;
  }
}
