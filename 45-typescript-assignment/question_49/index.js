"use strict";
/*
Function with Rest Parameters: Write a
function that takes a rest parameter representing
multiple hobbies. It should log each hobby with a
statement saying you enjoy that hobby.
*/
function hobby(...hobbies) {
    hobbies.forEach((hobby) => {
        console.log(`You enjoy ${hobby}`);
    });
}
hobby('Cycling', 'Swimming');
