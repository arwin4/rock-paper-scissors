// const computerSelection = getComputerChoice();
// console.log(computerSelection);

// let playerSelection = prompt('Rock Paper Scissors! Enter your choice:');
// playerSelection = capitalize(playerSelection)
// console.log(playerSelection);

// playRound(playerSelection, computerSelection);
// console.log(playRound(playerSelection, computerSelection));

game();

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
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        let playerSelection = prompt('Rock Paper Scissors! Enter your choice:');
        playerSelection = capitalize(playerSelection);
        console.log(playerSelection);

        const checkRoundWin = playRound(playerSelection, computerSelection);

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
    console.log('playerwins ' + playerWins);
    console.log('computerwins ' + computerWins);

    
    /*
    let playerWins = 0;
    let computerWins = 0;
    for loop that calls playRound
        - increments player-/computerWins;
        - prints round victory/loss message
        - if playRound = true:
            playerwin++
            player round win message
          if else playROund = false:
            computerwin++
            player round lose message
            else (undefined, tie):

        - prints current score (amount of wins per player)

    while computerwins === playerwins:
        playRound()
    who won the game?
    print playerWins and computerWins
    if player > computer: player win message
        else if computer > player: player lose message

        else (equal wins or no wins): tiebreaker:
    */
}