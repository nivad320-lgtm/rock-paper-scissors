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


let humanScore = 0;
let computerScore = 0;
// Write a logic to play a single round
function playGame(e) {
    // Computer randomly choose their pick
    let computerChoice = getComputerChoice();

    // If player clicked on rock button
    if (e.target.id === computerChoice) 
        console.log("It's a Draw!"); 
    else if (e.target.id == 'rock' && computerChoice == 'scissors'){
        console.log("You win! Rock beats scissors.")
        humanScore++;
    } else if (e.target.id == 'rock' && computerChoice == 'paper') {
        console.log("You lose! Paper beats rock.");
        computerScore++
    } else if (e.target.id == 'paper' && computerChoice == 'scissors'){
        console.log("You lose! Scissors beats paper.")
        computerScore++;
    } else if (e.target.id == 'paper' && computerChoice == 'rock') {
        console.log("You win! Paper beats rock.");
        humanScore++
        
    }else if (e.target.id == 'scissors' && computerChoice == 'paper'){
        console.log("You win! Scissors beats paper.")
        humanScore++;
    } else if (e.target.id == 'scissors' && computerChoice == 'rock'){
        console.log("You lose! Rock beats scissors.")
        computerScore++;
    }
    // const newText = document.createTextNode(humanScore);
    playerScoreText.textContent = `You: ${humanScore}`
    computerScoreText.textContent = `Computer: ${computerScore}`
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            winnerText.textContent = 'You win!';
        } else if (humanScore < computerScore) {
            winnerText.textContent = 'You lose';
        } else winnerText.textContent = 'Draw!';
    }
}

    
    
    const rockButton = document.querySelector('#rock')
    const paperButton = document.querySelector('#paper')
    const scissorsButton = document.querySelector('#scissors')
    const playerScoreText = document.querySelector('#playerScore');
    const computerScoreText = document.querySelector('#computerScore');
    const winnerText = document.querySelector('.winner')

    rockButton.addEventListener('click', playGame)
    paperButton.addEventListener('click', playGame)
    scissorsButton.addEventListener('click', playGame)
