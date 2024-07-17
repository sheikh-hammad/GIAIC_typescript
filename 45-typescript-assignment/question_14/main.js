"use strict";
/*
Guest List: If you could invite anyone,
living or deceased, to dinner, who would you
invite? Make a list that includes at least
three people you’d like to invite to dinner. Then use
your list to print a message to each person,
inviting them to dinner.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const guestList = ['Hammad', 'Ahmed', 'Saad', 'Shabaan', 'Ali'];
// for loop
for (let i = 0; i < guestList.length; i++) {
    console.log('I would like to invite  + ${guestList[i]}   in dinner');
}
;
console.log('----------------');
// forEach loop
guestList.forEach((guestName) => {
    console.log(`I would like to invite ${guestName} in dinner`);
});
