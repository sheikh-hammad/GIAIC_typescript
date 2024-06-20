#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellow('-'.repeat(15)));
console.log(chalk.yellow("Typescript Quiz"));
console.log(chalk.yellow('-'.repeat(15)));


const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
    name: "question_1",
    type: "list",
    message: "What are the three main 'simple types' in TypeScript?",
    choices: [
        "Object, String, Number",
        "Array, Object, Boolean",
        "Boolean, Number, String",
        "Object, Array, Symbol"
    ]
    },
    {
        name: "question_2",
        type: "list",
        message: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        choices: [
            "Implicit",
            "Explicit",
        ]
    },
    {
        name: "question_3",
        type: "list",
        message: "True or False: TypeScript can always correctly infer a variables type.",
        choices: [
            "True",
            "False",
        ]
    },
    {
        name: "question_4",
        type: "list",
        message: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        choices: [
            "unknown",
            "never",
            "similar",
        ]
    },
    {
        name: "question_5",
        type: "list",
        message: "True or False: TypeScript will always correctly infer the type of an array.",
        choices: [
            "False",
            "True",
        ]
    },
        
]);

let score: number = 0;
 
switch(quiz.question_1){
    case "Boolean, Number, String":
        console.log("1. Correct 👌");
        score++;
        break;
        default:
            console.log("1. Incorrect")
}
switch(quiz.question_2){
    case "Explicit":
        console.log("2. Correct 👌");
        score++;
        break;
        default:
            console.log("2. Incorrect")
}
switch(quiz.question_3){
    case "False":
        console.log("3. Correct 👌");
        score++;
        break;
        default:
            console.log("3. Incorrect")
}

switch(quiz.question_4){
    case "unknown":
        console.log("4. Correct 👌");
        score++;
        break;
        default:
            console.log("4. Incorrect")
}
switch(quiz.question_5){
    case "False":
        console.log("5. Correct 👌");
        score++;
        break;
        default:
            console.log("5. Incorrect")
}
console.log(`Your score is ${score}`)