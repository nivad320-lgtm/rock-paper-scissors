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
    switch(getRandomInt(3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
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
        if (humanChoice === computerChoice) {
            console.log("It's a Draw!");
            // Here the computer 1 == paper
        } else if (humanChoice==='rock' && computerChoice==='paper') {
            console.log("You lose! Paper beats rock.");
            computerScore++
            // Here the computer 2 == scissors
        } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            console.log("You win! Rock beats scissors.")
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("You lose! Rock beats paper.");
            computerScore++
        }else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("You win! Scissors beats paper");
            humanScore++;
        }
        
    }

    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore === computerScore) {
        console.log("Draw!");
    } else {
        console.log("You lose!");
    }
}





// playGame();
// Winner +1 the point
// console.log a winner assignment