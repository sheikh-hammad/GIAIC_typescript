const grades: number[] = [67, 84, 56, 98, 34]

const newArr = grades.reduce((a, b) => a+ b, 0)/grades.length

console.log(newArr);
