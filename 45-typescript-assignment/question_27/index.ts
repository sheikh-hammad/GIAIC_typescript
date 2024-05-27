/*
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// Version 1
let alien_color = "Green";
if (alien_color === "Green") {
  console.log("The player just earned 5 points");
} else if (alien_color === "Yellow") {
  console.log("The player just earned 10 points");
} else if (alien_color === "Red"){
    console.log("The player just earned 15 points");
}

// Version 2
alien_color = "Yellow";
if (alien_color === "Green") {
  console.log("The player just earned 5 points");
} else if (alien_color === "Yellow") {
  console.log("The player just earned 10 points");
} else if (alien_color === "Red"){
    console.log("The player just earned 15 points");
}

// Version 3
alien_color = "Red";
if (alien_color === "Green") {
  console.log("The player just earned 5 points");
} else if (alien_color === "Yellow") {
  console.log("The player just earned 10 points");
} else if (alien_color === "Red"){
    console.log("The player just earned 15 points");
}


