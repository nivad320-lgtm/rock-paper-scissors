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


// Write a logic to play a single round

// let humanScore = 0
// let computerScore = 0

// playRound(getHumanChoice(), getComputerChoice());
// console.log(humanScore)
// console.log(computerScore)
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        // make humanChoice parameter case-insensitive
        humanChoice = humanChoice.toLowerCase();
        // If human is rock and computer is 0(rock)
        if (humanChoice==='rock' && computerChoice ===0) {
            console.log("It's a Draw!");
            // Here the computer 1 == paper
        } else if (humanChoice==='rock' && computerChoice===1) {
            console.log("You lose! Paper beats Rock.");
            computerScore++
            // Here the computer 2 == scissors
        } else if (humanChoice === 'rock' && computerChoice === 2) {
            console.log("You win! Rock beats scissors.")
            humanScore++;
        }
        
    }
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    console.log(humanScore);
}
playGame();
// Winner +1 the point
// console.log a winner assignment