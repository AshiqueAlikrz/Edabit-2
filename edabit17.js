function countDigits(number) {
    const numberString = Math.abs(number).toString();
    
    return numberString.length;
  }
  
  console.log(countDigits(223)); 