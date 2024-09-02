function productTwo(num1, num2) {
    return num1 * num2;
}
var round = productTwo(1.0493, 2.74567) * 100;
console.log(round);
var rounding = Math.round(round) / 100;
console.log(rounding);
