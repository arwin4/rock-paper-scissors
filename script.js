const buttonArea = document.querySelector('.button-area');
const scoreDisplay = document.createElement('div');
buttonArea.appendChild(scoreDisplay);

initialize();

function initialize() {
  playerWins = 0,
    computerWins = 0,
    roundsPlayed = 0,
    draws = 0,
    gameFinished = false;
  scoreDisplay.textContent = 'Rounds played: 0. Draws: 0. Current score: [you] 0 - [computer] 0';
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!gameFinished) attack(button.id);
  })
});

function attack(playerChoice) {
  console.log(playerChoice);
  playRound(playerChoice);
  showCurrentScore();
  checkWinner();
}

function showCurrentScore() {
  scoreDisplay.textContent = `Rounds played: ${roundsPlayed}. Draws: ${draws}.
  Current score: [you] ${playerWins} - [computer] ${computerWins}.`;
}

function checkWinner() {
  if (playerWins === 5) {
    console.log('you win');
    gameFinished = true;
  }
  else if (computerWins === 5) {
    console.log('you lose');
    gameFinished = true;
  }
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
    draws++;
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