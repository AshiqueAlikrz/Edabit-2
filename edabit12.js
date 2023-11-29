function arrayOfMultiples(num, length) {
  var multiples = [];

  for (var i = 1; i <= length; i++) {
    multiples.push(num * i);
  }

  return multiples;
}

console.log(arrayOfMultiples(7, 5));
