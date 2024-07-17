/*
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement
to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to
add one new guest to the end of your list. • Print a new set of
invitation messages, one for each person in your list.
*/
const guests = ["Ali", "Usman", "Khalid", "Salman"];
// Print start message
console.log("Great news! I found the bigger table");
// Add name to the start of the array
guests.unshift("Hammad");
// Add name to the middle of the array
guests.splice(guests.length / 2, 0, "Adnan");
// Add name to the end of the array
guests.push("Asim");
// Print last message
guests.forEach((guest) => {
    console.log('Please come to our house for dinner, ' + guest);
});
export {};
