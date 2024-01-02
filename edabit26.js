function countBoomerangs(arr) {
    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
            count++;
        }
    }

    return count;
}

const array1 = [3, 7, 3];
console.log(countBoomerangs(array1))