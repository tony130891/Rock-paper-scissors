const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", (e) => {
  console.log("Rock");
});

paperBtn.addEventListener("click", (e) => {
  console.log("Paper");
});

scissorsBtn.addEventListener("click", (e) => {
  console.log("Scissors");
});

function getComputerChoice() {
  const randomString = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * 3);
  const compChoice = randomString[randomChoice];
  return compChoice;
}

const playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "you tied both picked rock";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "you tied both picked scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "you tied both picked paper";
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    return "You lost, rock beat scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "You lost, Scissors beat Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lost, Paper beat Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You won, Rock beat Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You won, Paper beat Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You won, Scissors beat Paper";
  }
}

const game = () => {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
};

game();
