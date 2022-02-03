function sum(...num) {
    return num.reduce((p,t) => p+t)
}

console.log(sum(1, 2, 3, 4, 5));