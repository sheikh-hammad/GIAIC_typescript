#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
const userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.green("Enter from currency"),
        choices: [
            "USD",
            "EUR",
            "GBP",
            "PKR",
            "INR"
        ]
    },
    {
        name: "to",
        type: "list",
        message: chalk.green("Enter to currency"),
        choices: [
            "USD",
            "EUR",
            "GBP",
            "PKR",
            "INR"
        ]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.green("Enter amount")
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellowBright(convertedAmount.toFixed(2)));
