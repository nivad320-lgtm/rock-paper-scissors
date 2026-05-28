/* 
Your game will be played against the computer. 
You will write a function that randomly returns “rock”, “paper” or “scissors”.
 */

// Get random integer from 0 to 3
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // return one of the following string values: 
    // “rock”, “paper” or “scissors”.
    console.log( getRandomInt(3));
}

function getHumanChoice() {
    // Prompt user to make a choice between rock, paper, scissor
    // Store their choice in a Variable
    let userChoice = prompt("What is your choice?");
}

let humanScore = 0;
let computerScore = 0;