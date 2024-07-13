function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
    return choices[randomIndex];
}

function getHumanChoice() {
    const humanChoice = String(prompt("What's your choices? rock✊🏻  paper🖐🏻  scissors✌🏻"));
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        
        if (humanChoice === "scissors") {
            console.log("It's a tie. Both choose scissors!");
        }
        if (humanChoice === "rock") {
            console.log("It's a tie. Both choose rock!");
        }
        if (humanChoice === "paper") {
            console.log("It's a tie. Both choose paper!");
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore += 5;
            console.log("You lose! Rock beats scissors.");
        }
        if (computerChoice === "paper") {
            humanScore += 5;
            console.log("You win! Scissors beat paper.");
        }
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 5;
            console.log("You lose! Paper beats rock.");
        }
        if (computerChoice === "scissors") {
            humanScore += 5;
            console.log("You win! Rock beats scissors.");
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 5;
            console.log("You lose! Scissors beat paper.");
        }
        if (computerChoice === "rock") {
            humanScore += 5;
            console.log("You win! Paper beats rock.");
        }
    }
}

function playGame () {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore, computerScore);
}

for (i = 1; i <= 5; i++){
    playGame();
}
