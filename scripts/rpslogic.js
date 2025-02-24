"use strict"
let computerScore = 0, humanScore = 0;
const report = document.querySelector(".report.text");


// this function nested inside, plays 1 round of rps, returning each result of each round and updating scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        report.innerText = `Both of you chose ${humanChoice}, it was a tie!`;
    }

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                ++computerScore;
                report.innerText =  `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            } else if (computerChoice === "scissors") {
                ++humanScore;
                report.innerText = `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                report.innerText = `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            } else if (computerChoice === "scissors") {
                ++computerScore;
                report.innerText = `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                ++computerScore;
                report.innerText = `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`;
            } else if (computerChoice === "paper") {
                ++humanScore;
                report.innerText = `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`;
            }
            break; 
    }}




// return computer's random choice of rock,paper or scissors
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

// prompt user for input, lowercase it then make sure its rock,paper or scissors
function getHumanChoice() {
    let answer;
    while (true) {
        answer = prompt("Choose your weapon");
        if (answer === null) {
            console.log("You can't do that, dillweed");
            continue;
        }
        answer = answer.toLowerCase();
        if (answer !== "rock" 
            && answer !== "paper" 
            && answer !== "scissors") {
            console.log("thats not a given choice, dillweed");
            continue;
        } else {
            return answer;
        }
    }

}

const options = document.querySelector(".options.list");

options.addEventListener("click", (e) => {
    let target = e.target;

    switch(target.id) {
        case "rock":
            
    }
});
