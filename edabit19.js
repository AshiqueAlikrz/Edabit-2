function returnUnique(arr) {
    const countMap = {};
    
    for (const num of arr) {
      if (countMap[num]) {
        countMap[num]++;
      } else {
        countMap[num] = 1;
      }
    }

     return Object.keys(countMap).filter(num => countMap[num] === 1).map(Number)
  
  }
  
  console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
  