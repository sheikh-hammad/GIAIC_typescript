function productTwo(num1: number, num2: number):number {
    return num1 * num2
}

let round = productTwo(1.0493, 2.74567) * 100
console.log(round);
const rounding = Math.round(round)/100
console.log(rounding);
