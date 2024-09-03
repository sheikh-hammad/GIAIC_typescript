var fruits = ['apple', 'mango', 'grape'];
var index = fruits.indexOf('mango');
if (index !== -1) {
    fruits[index] = 'banana';
    console.log(fruits);
}
