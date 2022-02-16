function playerPlay() {
    let choice = prompt("Choose rock, paper or scissors.").toLowerCase();
    
    while (choice.match(/^(rock|paper|scissors)$/) == null) {
        console.log(`${choice} is an invalid choice. Please choose rock, paper or scissors`);
        choice = prompt("Choose rock, paper or scissors.").toLowerCase();
    }
    
    return choice;
}

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
        return [`It's a tie! You both chose ${computerSelection}!`, "tie"];
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
            (playerSelection == 'paper' && computerSelection == 'rock') ||
            (playerSelection == 'scissors' && computerSelection == 'paper')) {
                return [`Winner! ${playerSelection[0].toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection}!`, "player"];
            }
    else {
        return [`Loser! ${computerSelection[0].toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection}!`, "computer"];
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let results = playRound(playerPlay(), computerPlay());
        console.log(`Round ${i + 1}: ` + results[0]);
        
        if (results[1] == 'player') {
            playerScore++;
        }
        
        else if (results[1] == 'computer') {
            computerScore++;
        }
    }
    
    console.log(`------Final Score------\n     Player: ${playerScore}\n     Computer: ${computerScore}\n-----------------------`);
    
    if (playerScore > computerScore) {
        console.log('Player wins!');
    }
    
    else if (playerScore < computerScore) {
        console.log('Computer wins!');
    }

    else {
        console.log("It's a tie!");
    }
}

game();