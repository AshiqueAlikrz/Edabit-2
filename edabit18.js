function reverseOdd(str) {
  const words = str.split(" ");
  const reversedWords = words.map((word) => {
    if (word.length % 2 === 1) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  }); 

  return reversedWords.join(" ");
}

console.log(reverseOdd("Bananas"));
