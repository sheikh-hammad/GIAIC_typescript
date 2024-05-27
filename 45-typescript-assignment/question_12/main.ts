/*
Greetings: Start with the array you 
used in Exercise 11, but instead of 
just printing each person’s name, print a 
message to them. The text of each message should be 
the same, but each message should be 
personalized with the person’s name.
*/

let names = ["John", "Jack", "Hammad"];

// Loop through each name
for(let name of names){
    // Print a message
    console.log(`Hi, how are you ${name}`)
}