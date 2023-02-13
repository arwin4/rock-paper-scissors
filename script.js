let playerWins = 0;
let computerWins = 0;
let breakTieCompleted = false;

game();

while (computerWins === playerWins) {
  breakTie()
}

// display result
if (playerWins > computerWins) {
  if (breakTieCompleted === true) {
    console.log('You won the tiebreaker! Congrats!');
  } else {
    console.log('You won the game! Congrats!');
  }
  showFinalScore(playerWins, computerWins);

} else {
  if (breakTieCompleted === true) {
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
  // play hardcoded number of rounds. Ties allowed.
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    showRoundResult(roundResult, i, computerSelection, playerSelection);
  }
}

function showRoundResult(roundResult, i, computerSelection, playerSelection) {
  if (roundResult === true) {
    playerWins++;
    console.log(`You win round ${i + 1}! ${playerSelection} beats ${computerSelection}!`);
  }
  else if (roundResult === false) {
    computerWins++;
    console.log(`You lose round ${i + 1}! ${computerSelection} beats ${playerSelection}!`);
  }
  else {
    console.log(`It's a tie this round (${i + 1})! You both chose ${playerSelection}.`);
  }
}

function breakTie() {
  // break a tie if score is even *after set amounts of rounds has been played*
  breakTieCompleted = true;
  console.log('We still don\'t have a winner. Let\'s play again.');

  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();

  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult === true) {
    playerWins++;
    console.log(`${playerSelection} beats ${computerSelection}!`);
  } else if (roundResult === false) {
    computerWins++;
    console.log(`${computerSelection} beats ${playerSelection}!`);
  } 
  // if it's a tie again (roundResult returns undefined), stay in while loop
}

function showFinalScore(playerWins, computerWins) {
  console.log(`== Final score ==
You: ${playerWins} games won
Computer: ${computerWins} games won`)
}