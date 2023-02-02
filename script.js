const computerSelection = getComputerChoice();
console.log(computerSelection);

let playerSelection = prompt('Rock Paper Scissors! Enter your choice:');
playerSelection = capitalize(playerSelection)
console.log(playerSelection);

playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

function capitalize(playerSelection) {
    playerSelection = playerSelection.toLowerCase();

    firstLetter = playerSelection.substring(0, 1);
    restLetters = playerSelection.substring(1);

    firstLetter = firstLetter.toUpperCase();

    return firstLetter + restLetters;
}

function getComputerChoice() {
    const possibleAttacks = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(possibleAttacks.length * Math.random());
    return possibleAttacks[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `You both chose ${playerSelection}, so no one wins.`;
    } 
    // There are only three win conditions, so we only need to check for those.
    else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
