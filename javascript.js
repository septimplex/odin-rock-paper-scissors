// rock = 0; paper = 1; scissors = 2;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}



function playRound(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower == computerSelection){
        return "It's a tie.";
    }
    else if((playerSelectionLower == "paper" && computerSelection == "rock") || (playerSelectionLower == "rock" && computerSelection == "scissors") || (playerSelectionLower == "scissors" && computerSelection == "paper")){
        return "You win! " + playerSelectionLower + " beats " + computerSelection + ".";
    }
    else{
        return "You lose! " + computerSelection + " beats " + playerSelectionLower + ".";
    }

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

