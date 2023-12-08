function sevenBoom(arr) {
    const concatenatedString = arr.join('');
    console.log(concatenatedString);
  
    if (concatenatedString.includes('7')) {
      return "Boom!";
    } else {
      return "There is no 7 in the array";
    }
  }
  
  console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
  