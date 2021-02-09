function minValue(arr) {
    if (arr.length % 2 === 0) {
        let i = (arr.length / 2) - 1;
        return arr[i]
    }
    else {
        let i = Math.floor(arr.length / 2)
        return arr[i]

    }
}

console.log(minValue([2, 4, 7]))
console.log(minValue([2, 4, 7, 6]))
console.log(minValue([2, 4, 7, 6, 6]))
console.log(minValue([2, 4, 7, 6, 6, 8]))
