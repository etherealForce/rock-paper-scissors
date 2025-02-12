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
