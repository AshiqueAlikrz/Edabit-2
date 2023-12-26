function coneVolume(height, radius) {
  const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
  const roundedVolume = Math.round(volume * 100) / 100;
  return roundedVolume;
}

console.log(coneVolume(3, 2));
