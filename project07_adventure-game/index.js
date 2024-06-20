import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel;
        this.fuel = fuel + 25;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log(chalk.yellow("-".repeat(22)));
console.log(chalk.yellow("Welcome to the Dungeon"));
console.log(chalk.yellow("-".repeat(22)));
const player = await inquirer.prompt([{
        name: "name",
        type: "input",
        message: "What is your name?"
    }]);
const opponent = await inquirer.prompt([{
        name: "name",
        type: "list",
        message: "Please select your opponent",
        choices: ["Zombie", "Alien", "Warrior", "Assassin"]
    }]);
const player1 = new Player(player.name);
const opponent1 = new Opponent(opponent.name);
do {
    if (opponent.name === "Zombie") {
        // console.log(`${player1.name}'s HP: ${player1.fuel}`);
        // console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
        const o1 = await inquirer.prompt([{
                name: "name",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Drink health portion", "3. Run!"]
            }]);
        if (o1.name === "1. Attack") {
            const condition = Math.floor(Math.random() * 2);
            if (condition) {
                player1.fuelDecrease();
                console.log(`${player1.name}'s HP: ${player1.fuel}`);
                console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (!condition) {
                opponent1.fuelDecrease();
                console.log(`${player1.name}'s HP: ${player1.fuel}`);
                console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        if (o1.name === "2. Drink health portion") {
            player1.fuelIncrease();
            console.log(`${player1.name} HP: ${player1.fuel}`);
        }
        if (o1.name === "3. Run!") {
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
    if (opponent.name === "Alien") {
        const o1 = await inquirer.prompt([{
                name: "name",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Drink health portion", "3. Run!"]
            }]);
        if (o1.name === "1. Attack") {
            const condition = Math.floor(Math.random() * 2);
            if (condition) {
                player1.fuelDecrease();
                console.log(`Your HP: ${player1.fuel}`);
                console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (!condition) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        if (o1.name === "2. Drink health portion") {
            player1.fuelIncrease();
            console.log(`${player1.name} HP: ${player1.fuel}`);
        }
        if (o1.name === "3. Run!") {
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
    if (opponent.name === "Warrior") {
        const o1 = await inquirer.prompt([{
                name: "name",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Drink health portion", "3. Run!"]
            }]);
        if (o1.name === "1. Attack") {
            const condition = Math.floor(Math.random() * 2);
            if (condition) {
                player1.fuelDecrease();
                console.log(`${player1.name}'s HP: ${player1.fuel}`);
                console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (!condition) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        if (o1.name === "2. Drink health portion") {
            player1.fuelIncrease();
            console.log(`${player1.name} HP: ${player1.fuel}`);
        }
        if (o1.name === "3. Run!") {
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
    if (opponent.name === "Assassin") {
        const o1 = await inquirer.prompt([{
                name: "name",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Drink health portion", "3. Run!"]
            }]);
        if (o1.name === "1. Attack") {
            const condition = Math.floor(Math.random() * 2);
            if (condition) {
                player1.fuelDecrease();
                console.log(`${player1.name}'s HP: ${player1.fuel}`);
                console.log(`${opponent1.name}'s HP: ${opponent1.fuel}`);
                if (player1.fuel <= 0) {
                    console.log("You loose, better luck next time");
                    process.exit();
                }
            }
            if (!condition) {
                opponent1.fuelDecrease();
                console.log(`${player1.name} fuel is ${player1.fuel}`);
                console.log(`${opponent1.name} fuel is ${opponent1.fuel}`);
                if (opponent1.fuel <= 0) {
                    console.log("You win");
                    process.exit();
                }
            }
        }
        if (o1.name === "2. Drink health portion") {
            player1.fuelIncrease();
            console.log(`${player1.name} HP: ${player1.fuel}`);
        }
        if (o1.name === "3. Run!") {
            console.log("You loose, better luck next time");
            process.exit();
        }
    }
} while (true);
