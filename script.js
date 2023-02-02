const computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection = prompt('Rock paper scissors! Enter your choice:');
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

function getComputerChoice() {
    const possibleAttacks = ['rock', 'paper', 'scissors'];
    const choice = Math.floor(possibleAttacks.length * Math.random());
    return possibleAttacks[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}, so no one wins.`;
    } 
    else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    // Ask for player's choice of hand
    // Convert choice to lowercase string
    // List which hand beats the others
        // | if same choice? tie.
        // | if win condition? --> win
            // the only win conditions are:
            // player paper: computer rock
            // player rock: computer scissors
            // player scissors: computer paper
        // | else --> lose
    // compare hands
    // if player beats computer, print "you win! playerSelection beats computerSelection"
    // if player loses, print "you lose! computerSelection beats playerSelection"
}
