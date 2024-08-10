let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let cChoice = Math.random();

        if (cChoice < 1 / 3){
            return "scissors";
        }
        else if(cChoice > 1 / 3 && cChoice < 2 / 3){
            return "rock";
        }
        else{
            return "paper";
        }

    }

function getHumanChoice() {
    let hChoice = window.prompt("Choose rock, paper, or scissors").toLowerCase();

    if (hChoice === "rock"){
        return "rock";
    }
    else if (hChoice === "paper"){
        return "paper";
    }
    else if (hChoice === "scissors"){
        return "scissors";
    }
    else{
        return "That is not a valid input";
    }

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playRound(hChoice, cChoice) {
    
    if ((humanSelection) === "rock" && (computerSelection) === "scissors" || (humanSelection) === "paper" && (computerSelection) === "rock" || (humanSelection) === "scissors" && (computerSelection) === "paper"){
        humanScore++; 
        
    }
    else if ((humanSelection) === "rock" && (computerSelection) === "paper" || (humanSelection) === "paper" && (computerSelection) === "scissors" || (humanSelection) === "scissors" && (computerSelection) === "rock"){
        computerScore++; 
        
    }
    else {
        return 0;
    }


}

function playGame(){
   
    for (let i = 0; i < 4; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    if (humanSelection === "That is not a valid input") {
        i--;
        }

    playRound(humanSelection, computerSelection)

    }

    if (humanScore > computerScore) {
        console.log("You Win!");
    }
    else if (computerScore > humanScore){
        console.log("Womp, Womp...You suck!");
    }
    else {
        console.log("It's a tie")
    }
}

playGame();







