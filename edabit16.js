function reverseWords(str) {
    const wordsArray = str.trim().split(/\s+/);
  
    const reversedArray = wordsArray.reverse();
  
    const reversedString = reversedArray.join(" ");
  
    return reversedString;
  }
  
  
  console.log(reverseWords(" the sky is blue")); 
  