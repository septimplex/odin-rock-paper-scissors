// rock = 0; paper = 1; scissors = 2;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

console.log(getComputerChoice());