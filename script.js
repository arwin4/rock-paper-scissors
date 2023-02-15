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

const attackButtons = document.querySelectorAll('button');
attackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!gameFinished) attack(button.id);
  })
});

function attack(playerChoice) {
  console.log(playerChoice);
  playRound(playerChoice);
  showCurrentScore();
  showWinner();
  if (gameFinished) showResetButton();
}

function showCurrentScore() {
  scoreDisplay.textContent = `Rounds played: ${roundsPlayed}. Draws: ${draws}.
  Current score: [you] ${playerWins} - [computer] ${computerWins}.`;
}

function showWinner() {
  if (playerWins === 5) {
    scoreDisplay.textContent = `You win! ${roundsPlayed} rounds were played. 
    You won ${playerWins} round(s), the computer won ${computerWins}. Draws: ${draws}.`;
    gameFinished = true;
  }
  else if (computerWins === 5) {
    scoreDisplay.textContent = `You lose... ${roundsPlayed} rounds were played. 
    You won ${playerWins} round(s), the computer won ${computerWins}. Draws: ${draws}.`;
    gameFinished = true;
  }
}

function showResetButton() {
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Play again';
  resetButton.addEventListener('click', () => {
    initialize();
    resetButton.remove();
  });
  buttonArea.appendChild(resetButton);
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