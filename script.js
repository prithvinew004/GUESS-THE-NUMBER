'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// Generate a random secret number between 1 and 20 (inclusive).
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0; // Initialize a highscore variable
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Add an event listener to the element with class "check" (presumably a button).
document.querySelector('.check').addEventListener('click', function () {
  // Get the value entered by the user in the input element with class "guess".
  const guess = Number(document.querySelector('.guess').value);

  // Log the user's guess and its data type to the console.
  console.log(`User guessed ${guess}`, typeof guess);

  // Check if the user entered a valid number.
  if (!guess) {
    // document.querySelector('.message').textContent = '❌ NO Number!';
    displayMessage('❌ NO Number!');
    // When the player wins
  } else if (guess === secretNumber) {
    // If the guess is correct, display a congratulatory message.
    // document.querySelector('.message').textContent =
    //   '🏆 Congratulations! Correct number';
    displayMessage('🏆 Congratulations! Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // You can add more conditions to handle incorrect guesses and provide hints.

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? `📈 Too high! Try again.`
      //     : `📉 Too low! Try again.`;
      displayMessage(
        guess > secretNumber
          ? `📈 Too high! Try again.`
          : `📉 Too low! Try again.`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game Over';
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  // Reset variables for a new game
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset displayed messages and values
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // Corrected the property name

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
