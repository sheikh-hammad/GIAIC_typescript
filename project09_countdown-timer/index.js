#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const countdownTimer = function* (second) {
    while (second >= 0) {
        yield second;
        second--;
    }
};
const ans = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Seconds"
});
let timerIterator = countdownTimer(ans.name);
function displayCountdown() {
    let result = timerIterator.next();
    if (!result.done) {
        const now = new Date();
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        console.log(`Remaining seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000);
    }
    else {
        console.log(`Countdown Complete`);
    }
}
displayCountdown();
