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

function playGame(playerChoice) {
    let computerChoice = computerPlay();
    if (playerChoice == computerChoice) {
        return `Both players selected ${playerChoice}. It's a tie!`;
    } else if (playerChoice == "rock") {
        if (computerChoice == "scissors") {
            return "You chose rock. Computer chose scissors. Rock smashes scissors! You win!";
        }
        else {
            return "You chose rock. Computer chose paper. Paper covers rock! You lose.";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return "You chose paper. Computer chose rock. Paper covers rock! You win!";
        }
        else {
            return "You chose paper. Computer chose scissors. Scissors cuts paper! You lose.";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            return "You chose scissors. Computer chose paper. Scissors cuts paper! You win!";
        }
        else {
            return "You chose scissors. Computer chose rock. Rock smashes scissors! You lose.";
        }
    }
}

let roundCounter = 0;
let playerCounter = 0;
let computerCounter = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playGame(button.id));
    });
});



