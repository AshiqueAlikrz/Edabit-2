function potatoes(str) {
  const regex = /potato/g;
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

console.log(potatoes("potato")); 
