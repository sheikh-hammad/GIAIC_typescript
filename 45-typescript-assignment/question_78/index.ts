console.log(square1(2, 2))
// Deceleration
function square1(num1: number, num2: number): number{
    return num1 * num2
}

// Expression
const square2 = function(num1: number, num2: number): number{
    return num1 * num2
}

console.log(square2(2, 3));