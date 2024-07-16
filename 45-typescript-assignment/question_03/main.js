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
const string = personName.split(" ");
const titleCase = string
  .map(
    (string) =>
      string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
  )
  .join(" ");
console.log(titleCase);
export {};
