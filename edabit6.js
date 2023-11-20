function decimalToBinary(decimalStr) {
  const decimalNum = parseInt(decimalStr, 10);

  if (decimalNum === 0) {
    return "0";
  }

  let binaryResult = "";
  let currentNum = decimalNum;

  while (currentNum > 0) {
    binaryResult = (currentNum % 2) + binaryResult;
    currentNum = Math.floor(currentNum / 2);
  }

  return binaryResult;
}

console.log(decimalToBinary(5));