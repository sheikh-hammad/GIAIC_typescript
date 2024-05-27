/*
Stage.ages of Life: Write an if-else chain that determines a person’s stage.age of life. Set a value for the variable age.age, and then:
• If the person is less than 2 years old, print a message.age that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message.age that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message.age that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message.age that the person is a teenage.ager.

• If the person is at least 20 years old but less than 65, print a message.age that the person is an adult.

• If the person is age.age 65 or older, print a message.age that the person is an elder.
*/

import inquirer from "inquirer";
import chalk from "chalk";

const age = await inquirer.prompt({
  name: "age",
  type: "number",
  message: chalk.green("What is your age?"),
});

if (age.age < 2) {
  console.log("The person is a baby");
} else if (age.age >= 2 && age.age < 4) {
  console.log("The person is a toddler");
} else if (age.age >= 4 && age.age < 13) {
  console.log("The person is a kid");
} else if (age.age >= 13 && age.age < 20) {
  console.log("The person is a teenage.ager");
} else if (age.age >= 20 && age.age < 65) {
  console.log("The person is an adult");
} else {
  console.log("The person is an elder");
}
