function divide(divider, num) {
    var quotient = Math.floor(divider / num);
    var remaider = divider % num;
    return { quotient: quotient, remaider: remaider };
}
console.log(divide(10, 3));
