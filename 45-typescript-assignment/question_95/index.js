function filterGreaterThanTen(numbers) {
    return numbers.filter(function (element) { return element > 10; });
}
var newNumber = [1, 43, 54, 7, 98, 54];
console.log(filterGreaterThanTen(newNumber));
