/*
Changing Guest List: You just heard that 
one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.
*/

const guestList:string[] = ['hammad', 'ali', 'sajid'];

// for(let i = 0; i < guestList.length; i++){
//     console.log('Please come to our house for dinner ' + guestList[i]);
// }

// print the name of the person who cannot join
const guestNotComing:string = guestList[0];

// replace the guest
const newGuest:string = 'adil';
const indexofNewGuest:number =  guestList.indexOf(guestNotComing);

// new string
if(indexofNewGuest !== 2){
    guestList[indexofNewGuest] = newGuest
}

// last message
guestList.forEach((guest:string) => {
    console.log('Please come to our house for dinner ' + guest);
})