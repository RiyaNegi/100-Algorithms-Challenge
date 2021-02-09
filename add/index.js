function add(x, y) {
    return x + y
}

function addPro() {
    let i = 0;
    let result = 0
    while (i < arguments.length) {
        result += arguments[i]
        i++
    }
    return result
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(addPro(1, 2, 3, 4, 5));
console.log(addPro(2, 3));