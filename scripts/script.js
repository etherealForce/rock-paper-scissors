"use strict"
let humanScore = 0, computerScore = 0;

function playGame() {
    
}

for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
}

if (humanScore > computerScore) {
    console.log("Victory!");
} else if (humanScore < computerScore ) {
    console.log("Defeat.")
} else {
    console.log("A tie in the end.")
}


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is a tie.`;
            } else if (computerChoice === "paper") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            } else if (computerChoice === "scissors") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            } else if (computerChoice === "paper") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is a tie.`;
            } else if (computerChoice === "scissors") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            } else if (computerChoice === "paper") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            } else if (computerChoice === "scissors") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is indeed a tie.`;
            }
            break;
    }
}


function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
}

function getHumanChoice() {
    let answer = prompt("Choose your weapon.").toLowerCase();

    while (true) {
        if (answer !== "rock" 
            && answer !== "paper" 
            && answer !== "scissors") {
            console.log("thats not a given choice, dillweed");
        } else {
            return answer;
        }
    }

}
