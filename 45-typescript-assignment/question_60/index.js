"use strict";
let userProfile = (function () {
    // The user's details are kept inside
    let name = "John";
    let age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo();
