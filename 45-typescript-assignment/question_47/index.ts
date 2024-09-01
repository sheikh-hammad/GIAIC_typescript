/*
Advanced Array Destructuring: Given an array 
of objects representing different laptops, 
each with properties make, model, and year, use array 
destructuring to assign the first and second 
laptops to variables. Then, log these variables.
*/

const laptops: {make: string, model: string, year: number}[] = [
    {
        make: 'HP',
        model: 'Probook',
        year: 2016
    },
    {
        make: 'Dell',
        model: 'ChromeBook',
        year: 1999
    },
    {
        make: 'Lenovo',
        model: 'Thinkpad',
        year: 1996
    }
]

const [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);