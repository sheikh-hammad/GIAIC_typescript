let fruits: string[] = ['apple', 'mango', 'grape'] 
const index = fruits.indexOf('mango')
if(index !== -1){
    fruits[index] = 'banana'
    console.log(fruits);
}