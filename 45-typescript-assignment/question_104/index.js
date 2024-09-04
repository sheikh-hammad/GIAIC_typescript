var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase().padStart(6, '0');
    return color;
    console.log(color);
}
console.log(getRandomHexColor());
// // This function generates a random hexadecimal color code
// function getRandomHexColor(): string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color; // Returns the random color code
// }
// console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// // We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
