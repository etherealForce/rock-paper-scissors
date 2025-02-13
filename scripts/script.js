"use strict"

// this function plays the whole game
function playGame() {
    let humanScore = 0, computerScore = 0;

    // this function nested inside, plays 1 round of rps, returning each result of each round and updating scores
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

    // loops the previous function for 5 rounds, console logging each result of each round
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }


    // Determine the final result of the battle
    if (humanScore > computerScore) {
        console.log("Victory!");
    } else if (humanScore < computerScore ) {
        console.log("Defeat.")
    } else {
        console.log("A tie in the end.")
    }
    
}




// return computer's random choice of rock,paper or scissors
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

// prompt user for input, lowercase it then make sure its rock,paper or scissors
function getHumanChoice() {

    while (true) {
        let answer = prompt("Choose your weapon.").toLowerCase();
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

playGame();
