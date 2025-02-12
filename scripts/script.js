let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3);

    switch (rand_num) {
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
    let humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();

    if (humanChoice !== "rock" 
        && humanChoice !== "paper" 
        && humanChoice !== "scissors") {
            return "Invalid choice, you dillweed";
    } else {
        return humanChoice;
    }
}


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is a tie.`
            } else if (computerChoice === "paper") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`
            } else if (computerChoice === "scissors") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`
            } else if (computerChoice === "paper") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is a tie.`
            } else if (computerChoice === "scissors") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                ++computerScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you lose.`
            } else if (computerChoice === "paper") {
                ++humanScore;
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so you win.`
            } else if (computerChoice === "scissors") {
                return `You picked ${humanChoice}\nComputer picked ${computerChoice} so it is indeed a tie.`
            }
            break;
    }
}
