//Initialize 3 variables: Round Counter, Player Score, and Computer Score.
let roundCounter = 0;
let playerCounter = 0;
let computerCounter = 0;

//Initialize querySelectors for Round Counter, Player Score, and Computer Score.
const round = document.querySelector(".round");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

//Random number generator to select between Rock, Paper, and Scissors.
function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}

//Takes input of player's choice, then returns a statement whether the player wins, loses, or ties.
//When player/computer wins, +1 to player/computer score variable.
function playGame(playerChoice) {
    let computerChoice = computerPlay();
    if (playerChoice == computerChoice) {
        return `Both players selected ${playerChoice}. It's a tie!`;
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            playerCounter += 1;
            return "You chose rock. Computer chose scissors. Rock smashes scissors! You win!";
        }
        else {
            computerCounter += 1;
            return "You chose rock. Computer chose paper. Paper covers rock! You lose.";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            playerCounter += 1;
            return "You chose paper. Computer chose rock. Paper covers rock! You win!";
        }
        else {
            computerCounter += 1;
            return "You chose paper. Computer chose scissors. Scissors cuts paper! You lose.";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            playerCounter += 1;
            return "You chose scissors. Computer chose paper. Scissors cuts paper! You win!";
        }
        else {
            computerCounter += 1;
            return "You chose scissors. Computer chose rock. Rock smashes scissors! You lose.";
        }
    }
}

const buttons = document.querySelectorAll("button");
const announcement = document.querySelector(".announcement");
const winner = document.querySelector(".winner");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //Keeps track of how many rounds played.
        roundCounter += 1;
        round.textContent = roundCounter;
        
        //Announces winner/loser via statement at the bottom of the webpage.
        announcement.textContent = playGame(button.id);

        //Update player/computer score.
        playerScore.textContent = playerCounter;
        computerScore.textContent = computerCounter;

        //If 5 rounds played...
        if (roundCounter == 5) {
            //Disable further button press. Revise once a way to select all buttons is found. Edit: found :)!
            buttons.forEach((button) => {
                button.disabled = true;
            });

            //Announce winner.
            if (playerCounter == computerCounter) {
                winner.textContent = "All tied up. Nobody wins :)";
            } else if (playerCounter > computerCounter) {
                winner.textContent = "Player wins!";
            } else {
                winner.textContent = "Computer wins!";
            }
            
            //Play again button.
            const playAgainBtn = document.createElement("button");
            playAgainBtn.innerHTML = "Play Again?";
            playAgainBtn.addEventListener('click', refreshPage = () => window.location.reload());
            document.body.appendChild(playAgainBtn);
        }
    });
});



