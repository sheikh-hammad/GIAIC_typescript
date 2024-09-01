/*
Refactoring to Arrow Functions: Take a simple function 
that calculates the area of a rectangle and 
refactor it into an arrow function.
*/

function calcArea(width: number, height: number): number{
    return width * height
}

const calcAreaArrow = (width: number, height: number): number => width * height

console.log(calcAreaArrow(10, 20))
