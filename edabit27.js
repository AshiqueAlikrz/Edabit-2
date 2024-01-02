function generation(x, y) {
  if (x === 0) {
    return "me!";
  }

  const gender = y === "m" ? "father" : "mother";

  const generationLevel = Math.abs(x);

  if (x > 0) {
    if (generationLevel === 1) {
      return gender === "father" ? "son" : "daughter";
    } else {
      return gender === "father" ? "grandson" : "granddaughter";
    }
  } else {
    if (generationLevel === 1) {
      return gender === "father" ? "father" : "mother";
    } else {
      return `great${"-".repeat(generationLevel - 2)}${gender}`;
    }
  }
}

console.log(generation(2, "f")); // Output: "granddaughter"
