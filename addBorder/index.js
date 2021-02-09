function addBorder(array) {
    let wall = "*"
    array.map((i, index) => array[index] = `${wall}${i}${wall}`)
    array.unshift("****")
    array.push("****")

    return array
}

console.log(addBorder(["abc", "ded"]))