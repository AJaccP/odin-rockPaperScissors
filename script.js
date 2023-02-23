let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)].toUpperCase();
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?: ").toUpperCase();
}

function round(playerChoice, computerChoice) {    

    if (playerChoice === computerChoice) {
        return 'tie'

      } else if (
      (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
      (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
      (playerChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
      playerScore++
      return 'player'

    } else if (
      (computerChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
      (computerChoice === 'SCISSORS' && playerChoice === 'PAPER') ||
      (computerChoice === 'PAPER' && playerChoice === 'ROCK')
    ) {
      computerScore++
      return 'computer'

    } else {
        return "invalid input";
    }
}

function winner() {
    if (playerScore === computerScore) {
        return "Tie";
    }
    return playerScore > computerScore ? "Player Wins!" : "Computer Wins :/";
}

/*
function game() {
    for (let i = 0; i < 5; i++) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();

        console.log(round(playerChoice, computerChoice));
    } 
    console.log("Player score: " + playerScore)
    console.log("Computer score: " + computerScore)
    console.log(winner());
}

game()
*/