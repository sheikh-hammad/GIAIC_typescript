const numbers: number[] = [1, 4, 6, 4]
const newArr: number = numbers.reduce((a, b) => a + b , 0)
console.log(newArr);