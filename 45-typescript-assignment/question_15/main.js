/*
Changing Guest List: You just heard that
one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.
*/
// Name of the guests
const guests = ["Hammad", "Shaffan", "Haider"];
// uest not coming
const guestNotComing = guests[0];
console.log(guestNotComing);
// New Guest Coming
const newGuest = "Ali";
const indexOfNewGuest = guests.indexOf(guestNotComing);
if (indexOfNewGuest !== 2) {
    guests[indexOfNewGuest] = newGuest;
}
// Last Message
for (let i = 0; i < guests.length; i++) {
    console.log('Please come to our house for dinner ' + guests[i]);
}
export {};
