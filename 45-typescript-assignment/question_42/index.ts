/*
Great Magicians: Start with a copy of your 
program from Exercise 39. Write a function 
called make_great() that modifies the array
of magicians by adding the phrase the Great 
to each magician’s name. Call show_magicians() 
to see that the list has actually been modified.
*/

const magicians = [
    "Shffan", "Naqash", "Areeb"
];

const show_magicians = function(){
    for(let i in magicians){
        console.log(magicians[i])
    }
}

show_magicians()

function make_great(){
    console.log(`The great ${make_great}`)
}

make_great()