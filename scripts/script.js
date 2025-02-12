"use strict"


function getComputerChoice() {
    let randNum = Math.floor(Math.random * 3);
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
