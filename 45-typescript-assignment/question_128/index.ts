const arrFunc = (...arr: number[]) =>
    arr.reduce((total, number) => total * number, 1)

console.log(arrFunc(1, 2, 3, 4))