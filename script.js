let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;

const body = document.querySelector('body');

const scoreDisplay = document.createElement('div');
scoreDisplay.textContent = 'Current score:';
body.appendChild(scoreDisplay);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id);
    showCurrentScore();
  });
});

function showCurrentScore() {
  scoreDisplay.textContent = `Current score: [you] ${playerWins} - [computer] ${computerWins}`;
}

function getComputerChoice() {
  const possibleAttacks = ['rock', 'paper', 'scissors'];
  // picks one attack at random
  const choice = Math.floor(possibleAttacks.length * Math.random());
  return possibleAttacks[choice];
}

function playRound(playerSelection) {
  roundsPlayed++;
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return; // if the round's a draw, returns undefined.
  }
  // There are only three win conditions, so just check for those.
  else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
    playerWins++;
    return;
  }
  else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
    playerWins++;
    return;
  }
  else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
    playerWins++;
    return;
  }
  else {
    computerWins++;
    return;
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