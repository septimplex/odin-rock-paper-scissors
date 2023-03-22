// rock = 0; paper = 1; scissors = 2;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

//player input
function playerInput(){
    let player = prompt("Rock, paper or scissors?");
    return player;

}



function playRound(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower == computerSelection){
        /*return "It's a tie.";*/
        return 0;
    }
    else if((playerSelectionLower == "paper" && computerSelection == "rock") || (playerSelectionLower == "rock" && computerSelection == "scissors") || (playerSelectionLower == "scissors" && computerSelection == "paper")){
        /*return "You win! " + playerSelectionLower + " beats " + computerSelection + ".";*/
        return 1;
    }   
    else{
        /*return "You lose! " + computerSelection + " beats " + playerSelectionLower + ".";*/
        return -1;
    }
}

/*
function game(){
    let computerScore = 0;
    let playerScore = 0;
    let current = 0;

    
    for(let i = 0; i < 5; i++){
        let player = playerInput();
        let computer = getComputerChoice();

        current = playRound(player,computer); // returns 0, 1 or -1;
        // tied
        if (current == 0){
            console.log("It's a tie.");
        }
        // win for player
        else if  (current == 1){
            console.log("You win! " + player + " beats " + computer + ".");
            playerScore += 1;
        }
        else{
            console.log("You lose! " + computer + " beats " + player + ".");
            computerScore +=1;
        }   
    }

    console.log("GAME OVER");

    if(computerScore == playerScore){
        console.log("Game was tied!");
    }
    else if(playerScore > computerScore){
        console.log("Congratulations, you won!");
    }
    else{
        console.log("You lost... Better luck next time!");
    }

}

game();*/
/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));*/


const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click',returnName);
});


function returnName(e){
    // return me rock ----console.log(e.target.id);
    // return me img -----console.log(e.target.src);

    const playerImg = document.querySelector('#choice-player');
    const computerImg = document.querySelector('#choice-computer');

    const playersChoiceImg = e.target.src;

    playerImg.src = playersChoiceImg;

    const playersChoiceText = e.target.id;
    const computerChoiceText = getComputerChoice();
    
    if(computerChoiceText == 'rock'){
        computerImg.src = "img/stone.gif";
    }
    if(computerChoiceText == 'paper'){
        computerImg.src = "img/paper.gif";
    }
    if(computerChoiceText == 'scissors'){
        computerImg.src = "img/scissors.gif";
    }
    const r = playRound(playersChoiceText,computerChoiceText);
    console.log(playersChoiceText);
    console.log(computerChoiceText);
    console.log(r);



}
