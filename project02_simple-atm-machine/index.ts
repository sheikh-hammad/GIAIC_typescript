#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 100000;
const myPin = 3241;

const userName = await inquirer.prompt([
  {
    name: "name",
    message: chalk.green.bold("Enter your name"),
    type: "string",
  },
]);

console.log(chalk.yellow.italic(`${userName.name} your pin code is ${myPin}`));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: chalk.greenBright.bold("Enter your pin code"),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.bgBlue.italic("Your pin is correct... WELCOME"));
  console.log(
    chalk
      .rgb(156, 9, 132)
      .italic(`${userName.name} your current balance is: $${myBalance}`)
  );

  let opsAnswer = await inquirer.prompt([
    {
      name: "operation",
      message: chalk.rgb(196, 152, 8).italic("Please select a transaction"),
      type: "list",
      choices: ["Withdraw", "Check Balance", "Fast Cash"],
    },
  ]);

  if (opsAnswer.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.rgb(84, 237, 7).bold("Enter your amount"),
        type: "number",
      },
    ]);

    if (myBalance >= amountAns.amount) {
      myBalance -= amountAns.amount;
      console.log(
        chalk.greenBright(
          `${userName.name} your remaining balance is $${myBalance}`
        )
      );
    } else {
      console.log(chalk.redBright("You don't have enough money to withdraw"));
    }
  } else if (opsAnswer.operation === "Check Balance") {
    console.log(
      chalk.greenBright.bold(
        `${userName.name} your current balance is ${myBalance}`
      )
    );
  } else if (opsAnswer.operation === "Fast Cash") {
    let fastCashAmount = await inquirer.prompt([
      {
        name: "amount",
        message: chalk.gray("Select your fast cash amount"),
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "15000", "25000"],
      },
    ]);
    if (myBalance >= fastCashAmount.amount) {
      myBalance -= fastCashAmount.amount;
      console.log(
        chalk.greenBright(
          `${userName.name} your remaining balance is $${myBalance}`
        )
      );
    } else {
      console.log(chalk.redBright("You don't have enough money to withdraw"));
    }
  }
} else {
  console.log(chalk.redBright("Incorrect Pin"));
}
