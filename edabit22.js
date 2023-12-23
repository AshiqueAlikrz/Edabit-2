function numberSplit(number) {
    const half = Math.floor(Math.abs(number) / 2);
    const leftHalf = number < 0 ? -half : half;
    const rightHalf = number % 2 === 0 ? half : half + 1;
  
    return [leftHalf, rightHalf];
  }
  
  console.log(numberSplit(11)); 