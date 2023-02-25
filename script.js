let playerScore = 0;
let computerScore = 0;
let playerChoice;
let computerChoice;

const choiceButtons = document.querySelectorAll('#choiceButtons > .button');

const playerRoundChoice = document.querySelector("#playerRoundChoice");
const playerRoundScore = document.querySelector("#playerRoundScore")

const computerRoundChoice = document.querySelector("#computerRoundChoice");
const computerRoundScore = document.querySelector("#computerRoundScore");

const roundResult = document.querySelector("#roundResult");
const finalResult = document.querySelector("#finalResult");

const restartButton = document.querySelector("#restartButton");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function round(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) {
      return 'Tie';
   } else if (
     (playerChoice === 'rock' && computerChoice === 'scissors') ||
     (playerChoice === 'scissors' && computerChoice === 'paper') ||
     (playerChoice === 'paper' && computerChoice === 'rock')
   ) {
     playerScore++;  
     return 'Player';        
   } else if (
     (computerChoice === 'rock' && playerChoice === 'scissors') ||
     (computerChoice === 'scissors' && playerChoice === 'paper') ||
     (computerChoice === 'paper' && playerChoice === 'rock')
   ) {      
     computerScore++;
     return 'Computer';
   }
    
}

function updatePlayerRoundResult() {
    playerRoundChoice.textContent = `Player chose ${playerChoice}`;
    playerRoundScore.textContent = `Player score: ${playerScore}`;
}

function updateComputerRoundResult() {
    computerRoundChoice.textContent = `Computer chose ${computerChoice}`;
    computerRoundScore.textContent = `Computer score: ${computerScore}`;
}

function updateOverallRoundResult(roundWinner) {
    if (roundWinner === "Tie") {
        roundResult.textContent = "Round tied";

    } else if (roundWinner = "Player") {
        roundResult.textContent = `${playerChoice} beats ${computerChoice}. Player wins the round!`;

    } else {
        roundResult.textContent = `${computerChoice} beats ${playerChoice}. Computer wins the round!`;
    }
}


choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            playerChoice = button.id;
            computerChoice = getComputerChoice();
            let roundWinner = round(playerChoice, computerChoice);

            if (playerScore < 5 && computerScore < 5) {        
            updatePlayerRoundResult();                
            updateComputerRoundResult();
            updateOverallRoundResult(roundWinner);
            
            } else {
                updatePlayerRoundResult();                
                updateComputerRoundResult();
                roundResult.textContent = "Game over";  
                finalResult.textContent = `${roundWinner} wins!`          
            }        
        }
    })
})

restartButton.addEventListener('click', () => {
    window.location.reload();
})

