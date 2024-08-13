let rockButton = document.getElementById("rock"); 
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
const resultDiv = document.querySelector('.result');
const yourScoreDiv = document.getElementById('yourScore');
const cpuScoreDiv = document.getElementById('cpuScore');


let humanScore = 0;
let computerScore = 0;

function updateScore() {
    yourScoreDiv.textContent = humanScore;
    cpuScoreDiv.textContent = computerScore;
}

function getComputerChoice() {
    
    const cChoices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * cChoices.length);
    return cChoices[randomChoice];

    }

function playRound(humanSelection, computerSelection) {
    
    let result;
    if (humanSelection === computerSelection) {
        result = "It's a tie!";
    }    
    else if ((humanSelection) === "rock" && (computerSelection) === "scissors" || (humanSelection) === "paper" && (computerSelection) === "rock" || (humanSelection) === "scissors" && (computerSelection) === "paper"){
        humanScore++; 
        result = `You win! ${humanSelection} beats ${computerSelection}`;
        
    }
    else {
        computerScore++; 
        result = `You lose ${computerSelection} beats ${humanSelection} womp, womp.`;
    }

    updateScore();
    return result;
    
}
   

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'rock'
    const result = playRound(humanSelection, computerSelection);
    resultDiv.textContent = result;
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'paper'
    const result = playRound(humanSelection, computerSelection);
    resultDiv.textContent = result;
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const humanSelection = 'scissors'
    const result = playRound(humanSelection, computerSelection);
    resultDiv.textContent = result;
});



