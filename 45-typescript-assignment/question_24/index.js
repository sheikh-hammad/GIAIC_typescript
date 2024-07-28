/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
console.log('Test for equality and inequality');
console.log("apple" == "apple"); // True
// console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log('Apple'.toLocaleLowerCase() == 'apple'); //True
// Using the numerical function
console.log("Testing for numerical function");
console.log(5 > 2); // True
console.log(2 < 1); // False
// Using AND and OR operator
console.log('Testing for AND and OR operator');
console.log(4 > 8 && 8 > 4);
console.log(4 > 8 || 8 > 4);
// Item in an array
console.log('Testing for an item in an array');
let arr = ["Ali", 'Jamshed', "Jihan"];
console.log(arr.includes('Ali'));
// Item not in an array
console.log('Testing for an item not in an array');
console.log(!arr.includes("Hamza"));
export {};
