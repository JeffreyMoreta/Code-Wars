function derive(coefficient,exponent) {
  if(exponent > 1){
    return `${coefficient * exponent}x^${exponent - 1}`;
  }
};
