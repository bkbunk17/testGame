const playArea = document.getElementById('play-area');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;

// Function to create a star
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * (playArea.clientWidth - 30) + 'px';
  star.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2-5 seconds fall time
  playArea.appendChild(star);

  // Remove star after it falls off the screen
  star.addEventListener('animationend', () => {
    star.remove();
  });

  // Increment score when star is clicked
  star.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    star.remove();
  });
}

// Game timer
function startGame() {
  const gameInterval = setInterval(createStar, 500); // Add a new star every 500ms
  const timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(timerInterval);
      alert(`Game Over! Your score: ${score}`);
      playArea.innerHTML = ''; // Clear the play area
    }
  }, 1000);
}

// Start the game
startGame();
