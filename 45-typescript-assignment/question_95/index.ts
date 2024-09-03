function filterGreaterThanTen(numbers: number[]): number[]{
    return numbers.filter(element => element > 10)
}
const newNumber: number[] = [1, 43, 54, 7, 98, 54]
console.log(filterGreaterThanTen(newNumber));

