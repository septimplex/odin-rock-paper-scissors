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
    const game = document.querySelector("#game-content");
    const end = document.querySelector("#end");
    const res = document.querySelector("#game-result");
    const score = document.querySelector("#end-score");
    
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
        res.innerText = "Congratulations, you won!"
        score.innerText = currentValuePlayer + " - " + currentValueComputer;
        game.style.display = "none";
        end.style.display = "flex";    
    }

    if(currentValueComputer == 5){
        res.innerText = "You lost... Better luck next time!"
        score.innerText = currentValuePlayer + " - " + currentValueComputer;
        game.style.display = "none";
        end.style.display = "flex";
    }
        
}


function start(){
    const begin = document.querySelector("#begin");
    const game = document.querySelector("#game-content");
    const end = document.querySelector("#end");

    begin.style.display = "none";
    game.style.display = "block";
    end.style.display = "none";   
}

function restart(){
    const begin = document.querySelector("#begin");
    const game = document.querySelector("#game-content");
    const end = document.querySelector("#end");

    const computerImg = document.querySelector('#choice-computer');
    const playerImg = document.querySelector('#choice-player');
    const display = document.querySelector("#display-match");
    const numScorePlayer = document.querySelector("#score-player");
    const numScoreComputer = document.querySelector("#score-computer");

    computerImg.src = "img/plain-white-background.jpg";
    playerImg.src = "img/plain-white-background.jpg";
    display.innerText = "Good Luck!";
    numScoreComputer.innerText = "0";
    numScorePlayer.innerText = "0";


    begin.style.display = "none";
    game.style.display = "block";
    end.style.display = "none";
}


         



