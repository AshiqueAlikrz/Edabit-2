function num_of_digits(num) {
    // Convert the integer to a string and get the length
    return Math.abs(num).toString().length;
}

console.log(num_of_digits(1000));       // Output: 4
