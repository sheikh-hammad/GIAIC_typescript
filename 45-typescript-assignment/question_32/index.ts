/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/

// const current_users = ["Alice", "Bob", "John", "Adam", "Alex"];

// const new_users = ["Mark", "Bob", "Neil", "Adam", "Jack"];

// if(new_users){}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach((number => {
    let suffix = "th";
    if(number === 1){
        suffix = "st";
    }
    else if (number === 2){
        suffix = "nd";
    }
    else if (number === 3){
        suffix = "rd";
    }
    else {
        suffix = "th";
    }

    console.log(`${number}${suffix}`);
}))