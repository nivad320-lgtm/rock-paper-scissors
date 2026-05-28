/* 
Your game will be played against the computer. 
You will write a function that randomly returns “rock”, “paper” or “scissors”.
 */

// Get random integer from 0 to 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    // return one of the following string values: 
    // “rock”, “paper” or “scissors”.
    return getRandomInt(3);
}

function getHumanChoice() {
    // Prompt user to make a choice between rock, paper, scissor
    // Store their choice in a Variable
    return prompt("What is your choice?");
}

// Declare variables in the global scope
// It will keep track of player score
let humanScore = 0;
let computerScore = 0;

// Write a logic to play a single round
function playRound(humanChoice, computerChoice) {
    // make humanChoice parameter case-insensitive
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice==='rock' && computerChoice ===0) {
        console.log("It's a Draw!");
    } else if (humanChoice==='rock' && computerChoice===1) {
        console.log("You lose! Paper beats Rock.");
        computerScore++
    } else if (humanChoice === 'rock' && computerChoice === 2) {
        console.log("You win! Rock beats scissors.")
        humanScore++;
    }

}
playRound(getHumanChoice(), getComputerChoice())

// Winner +1 the point
// console.log a winner assignment