let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

game();

showFinalScore(playerWins, computerWins, roundsPlayed);

function capitalize(playerSelection) {
  playerSelection = playerSelection.toLowerCase();

  firstLetter = playerSelection.substring(0, 1);
  restLetters = playerSelection.substring(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restLetters;
}

function getComputerChoice() {
  const possibleAttacks = ['Rock', 'Paper', 'Scissors'];
  // picks one attack at random
  const choice = Math.floor(possibleAttacks.length * Math.random());
  return possibleAttacks[choice];
}

function getPlayerChoice() {
  let playerSelection = prompt('Rock Paper Scissors! Enter your choice:');
  return capitalize(playerSelection);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return; // if the round's a draw, returns undefined.
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
  // play rounds until one side has won 5
  while (playerWins < 5 && computerWins < 5) {
    roundsPlayed++;
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    showRoundResult(roundResult, roundsPlayed, computerSelection, playerSelection);
  }
}

function showRoundResult(roundResult, roundsPlayed, computerSelection, playerSelection) {
  if (roundResult === true) {
    playerWins++;
    console.log(`You win round ${roundsPlayed}! ${playerSelection} beats ${computerSelection}!`);
  }
  else if (roundResult === false) {
    computerWins++;
    console.log(`You lose round ${roundsPlayed}! ${computerSelection} beats ${playerSelection}!`);
  }
  else {
    console.log(`It's a tie this round (${roundsPlayed})! You both chose ${playerSelection}.`);
  }
}

function showFinalScore(playerWins, computerWins) {
  if (playerWins > computerWins) {
    console.log('You won the game! Congrats!');
  } else {
    console.log('You lost the game! That\'s a shame...');
  }
  console.log(`== Final score ==
You: ${playerWins} games won
Computer: ${computerWins} games won`)
}