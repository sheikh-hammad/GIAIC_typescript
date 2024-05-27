"use strict";
/*
Name Cases: Store a person’s name in
a variable, and then print that person’s
name in lowercase, uppercase, and titlecase
*/
const personName = "Sheikh hammad";
// to lowercase
const lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
// to uppercase
const upperCaseName = personName.toUpperCase();
console.log(upperCaseName);
// to titlecase
const words = personName.split(" ");
let titleCase = "";
for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titleCase);
