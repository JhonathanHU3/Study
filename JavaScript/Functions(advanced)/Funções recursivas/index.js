function factorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return (n * factorial(n - 1));
}
console.log(factorial(5));

function recursiva(max) {
    if (max >= 10) return
    max++
    console.log(max);
    recursiva(max);
}
recursiva(0)

function recursiva2(max, start = 1) {
    if (max === 0) return
    console.log(start);
    start++
    max--
    return (recursiva2(max, start))
}
