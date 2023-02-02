function getComputerChoice() {
    const possibleAttacks = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(possibleAttacks.length * Math.random());
    return possibleAttacks[choice];
}

getComputerChoice();