function derivative(b, m) {
  const result = b * Math.pow(m, b - 1);
  return result;
}

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3));
