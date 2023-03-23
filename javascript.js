// rock = 0; paper = 1; scissors = 2;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection){
    let playerSelectionLower = playerSelection.toLowerCase();
    
    if (playerSelectionLower == computerSelection){
        display.innerText = "It's a tie.";
        return 0;
    }
    else if((playerSelectionLower == "paper" && computerSelection == "rock") || (playerSelectionLower == "rock" && computerSelection == "scissors") || (playerSelectionLower == "scissors" && computerSelection == "paper")){
        display.innerText = "You win! " + playerSelectionLower + " beats " + computerSelection + ".";
        return 1;
        
    }   
    else{
        display.innerText = "You lose! " + computerSelection + " beats " + playerSelectionLower + ".";
        return -1;
    }
}

function getComputer(){
    const computerImg = document.querySelector('#choice-computer');

    //get computer choice and insert into img
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

    return computerChoiceText;
}

//get html
const display = document.querySelector("#display-match");
const numScorePlayer = document.querySelector("#score-player");
const numScoreComputer = document.querySelector("#score-computer");


const buttons = document.querySelectorAll('.btn');


buttons.forEach(btn => {
    btn.addEventListener('click',playGame);
});


function playGame(e){
    let currentValuePlayer = Number(numScorePlayer.innerText);
    let currentValueComputer = Number(numScoreComputer.innerText);
    //get html
    const playerImg = document.querySelector('#choice-player');
    //insert player choice into img 
    const playersChoiceImg = e.target.src;
    playerImg.src = playersChoiceImg;

    const playersChoiceText = e.target.id;
    const computer = getComputer();
    const player =  playersChoiceText;
    //returns 1 for players win, -1 for players loss, 0 for tie
    let result = playRound(player,computer);
    
    if(result == 1){
        currentValuePlayer ++;
        numScorePlayer.innerText = currentValuePlayer;
    }
    if(result == -1){
        currentValueComputer ++;
        numScoreComputer.innerText = currentValueComputer;
    }

    if(currentValuePlayer == 5){
        display.innerText = "Congratulations, you won!";
        setTimeout("reset()",2500);
    }

    if(currentValueComputer == 5){
        display.innerText = "You lost... Better luck next time!";
        setTimeout("reset()",2500);  
    }
        
}

function reset(){
    numScoreComputer.innerText = "0";
    numScorePlayer.innerText = "0";
    display.innerText = "Play again?";
}


         



