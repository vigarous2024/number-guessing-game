#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6 :",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You guessed the right number");
}
else {
    console.log("Sorry, you guessed the wrong number. Try Again");
}
