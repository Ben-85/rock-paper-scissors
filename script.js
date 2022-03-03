function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber == 1) {
        return 'rock';
    }
    else if (randomNumber == 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        roundResult.textContent = `Round ${round}: You both picked ${playerSelection}, it's a tie!`;
        return 'tie';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
                roundResult.textContent = `Round ${round}: ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}, you win!`;
                return 'player';
            }
    else {
        roundResult.textContent = `Round ${round}: ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}, you lose!`;
        return 'computer';
    }
}

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let round = 1;

roundResult.textContent = "Click your choice to play Rock Paper Scissors!";
scoreBoard.textContent = "First one to 5 wins!"

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let result = playRound(button.id, computerPlay());
      if (result == 'player') {
          playerScore++;
      } else if (result == 'computer') {
          computerScore++;
      } 
      
      ++round;
      
      if (playerScore < 5 && computerScore < 5) {
          scoreBoard.textContent = `Score: Player: ${playerScore} Computer: ${computerScore}`;
      } else {
          if (playerScore > computerScore) {
              scoreBoard.textContent = `You won ${playerScore} to ${computerScore}!\nMake another selection to play again!`;
          }
          else {
              scoreBoard.textContent = `You lost ${computerScore} to ${playerScore}!\nMake another selection to play again!`;
          }
          round = 1;
          playerScore = 0;
          computerScore = 0;
      }
    });
});