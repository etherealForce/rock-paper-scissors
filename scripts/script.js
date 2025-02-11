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
