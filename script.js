let playerWins = 0;
let computerWins = 0;
let checkTiebreaker = false;

// play hardcoded number of rounds
game();

while (computerWins === playerWins) {
    tieBreaker()
}

if (playerWins > computerWins) {
    if (checkTiebreaker === true) {
        console.log('You won the tiebreaker! Congrats!');
    } else {
        console.log('You won the game! Congrats!');
    }
    showFinalScore(playerWins, computerWins);

} else {
    if (checkTiebreaker === true) {
        console.log('You lost the tiebreaker. Tough luck...');
    } else {
        console.log('You lost the game! That\'s a shame...');
    }
    showFinalScore(playerWins, computerWins);
}

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

function getPlayerChoice() {
    let playerSelection = prompt('Rock Paper Scissors! Enter your choice:');
    return capitalize(playerSelection);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return;
    }
    // There are only three win conditions, so just check for those.
    else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        return true;
    }
    else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        return true;
    }
    else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        return true;
    }
    else {
        return false;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        // console.log('Debug: computer picked ' + computerSelection);
        const playerSelection = getPlayerChoice();

        const checkRoundWin = playRound(playerSelection, computerSelection);

        showRoundResult(checkRoundWin, i, computerSelection, playerSelection);
    }
}

function showRoundResult(checkRoundWin, i, computerSelection, playerSelection) {
    if (checkRoundWin === true) {
        playerWins++;
        console.log(`You win round ${i + 1}! ${playerSelection} beats ${computerSelection}!`);
    }
    else if (checkRoundWin === false) {
        computerWins++;
        console.log(`You lose round ${i + 1}! ${computerSelection} beats ${playerSelection}!`);
    }
    else {
        console.log(`It's a tie this round (${i + 1})! You both chose ${playerSelection}.`);
    }
}

function tieBreaker() {
    checkTiebreaker = true;
    console.log('We still don\'t have a winner. Let\'s play again.');

    const computerSelection = getComputerChoice();
    // console.log('Debug: computer picked ' + computerSelection);
    const playerSelection = getPlayerChoice();

    const checkRoundWin = playRound(playerSelection, computerSelection);

    if (checkRoundWin === true) {
        playerWins++;
        console.log(`${playerSelection} beats ${computerSelection}!`);
    } else if (checkRoundWin === false) {
        computerWins++;
        console.log(`${computerSelection} beats ${playerSelection}!`);
    } // if it's a tie again (checkRoundWin === undefined), stay in while loop
}

function showFinalScore(playerWins, computerWins) {
    console.log(`== Final score ==
You: ${playerWins} games won
Computer: ${computerWins} games won`)
}