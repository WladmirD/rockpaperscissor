const choices = document.querySelectorAll('.choices img');
const resultText = document.getElementById('resultText');
const computerChoiceText = document.getElementById('computerChoice');
const computerImage = document.getElementById('computerImage');
const playAgainBtn = document.getElementById('playAgain');

const choicesArray = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
  choice.addEventListener('click', playRound);
});

function playRound(e) {
  const userChoice = e.target.id;
  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choicesArray[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    return 'user';
  } else {
    computerScore++;
    return 'computer';
  }
}

function displayResult(result, userChoice, computerChoice) {
  // Set the computer's image
  computerImage.src =
    computerChoice === 'scissors' ? 'scissors.jpg' : `${computerChoice}.png`;
  computerImage.alt = computerChoice;
  computerImage.classList.remove('hidden');

  computerChoiceText.innerHTML = `Computer chose: `;
  computerChoiceText.appendChild(computerImage);

  if (result === 'user') {
    resultText.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
  } else if (result === 'computer') {
    resultText.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    resultText.textContent = `It's a draw! You both chose ${userChoice}.`;
  }

  playAgainBtn.style.display = 'block';
  playAgainBtn.addEventListener('click', resetGame);
}

function resetGame() {
  resultText.textContent = 'Make your choice!';
  computerChoiceText.textContent = 'Computer chose: ';
  computerImage.classList.add('hidden');
  playAgainBtn.style.display = 'none';
}
