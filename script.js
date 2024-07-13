function getComputerChoice() {
    const randomIndex = Math.floor(Math.random());
    const choices = ["rock", "paper", "scissors"];
    return choices[randomIndex];
}

function getHumanChoice() {
    const humanChoice = toLowerCase.(String(prompt("What's your choices? rock✊🏻  paper🖐🏻  scissors✌🏻")));
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        if (humanChoice = "scissors") {
             return "It's a tie. Both choose scissors!"
        }
        if (humanChoice = "rock") {
            return "It's a tie. Both choose rock!"
        }
        if (humanChoice = "paper") {
            return "It's a tie. Both choose paper!"
        }
    }
}