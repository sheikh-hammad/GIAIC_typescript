"use strict";
/*
Magicians: Make a array of magician’s names. Pass the
array to a function called show_magicians(),
which prints the name of each magician in the array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicians = [
    "Shffan", "Naqash", "Areeb"
];
const show_magicians = function () {
    for (const i in magicians) {
        console.log(magicians[i]);
    }
};
show_magicians();
