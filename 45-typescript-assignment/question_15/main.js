"use strict";
/*
Changing Guest List: You just heard that
one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
const guestList = ['hammad', 'ali', 'sajid'];
// for(let i = 0; i < guestList.length; i++){
//     console.log('Please come to our house for dinner ' + guestList[i]);
// }
// print the name of the person who cannot join
const guestNotComing = guestList[0];
// replace the guest
const newGuest = 'adil';
const indexofNewGuest = guestList.indexOf(guestNotComing);
// new string
if (indexofNewGuest !== 2) {
    guestList[indexofNewGuest] = newGuest;
}
// last message
guestList.forEach((guest) => {
    console.log('Please come to our house for dinner ' + guest);
});
