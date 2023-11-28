const container = document.querySelector(".container");
const players = document.querySelector(".players");
const reset = document.querySelector(".reset");

// replace the console.log of the rounds with dom
const message = document.createElement("h2");
players.appendChild(message);
message.textContent = "";

const compScore1 = document.querySelector(".compScore");
const playerScore1 = document.querySelector(".playerScore");
let compScore = 0;
let playerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  let playerSelection = "rock";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (compScore > 0) {
    compScore1.textContent = compScore;
  }
  if (playerScore > 0) {
    playerScore1.textContent = playerScore;
  }
  if (compScore == 5 || playerScore == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    return winner();
  }
});

paper.addEventListener("click", () => {
  let playerSelection = "paper";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (compScore > 0) {
    compScore1.textContent = compScore;
  }
  if (playerScore > 0) {
    playerScore1.textContent = playerScore;
  }
  if (compScore == 5) {
    return winner();
  } else if (playerScore == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    return winner();
  }
});

scissors.addEventListener("click", () => {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  if (compScore > 0) {
    compScore1.textContent = compScore;
  }
  if (playerScore > 0) {
    playerScore1.textContent = playerScore;
  }
  if (compScore == 5) {
    return winner();
  } else if (playerScore == 5) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    return winner();
  }
});

reset.addEventListener("click", () => {
  window.location.reload();
  return false;
});

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    message.textContent = "You loose, Paper win over Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    message.textContent = "You win, Rock win over Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    message.textContent = "You loose, Rock win over Scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    message.textContent = "Rock over Rock, try again";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    message.textContent = "Paper over Paper, try again";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    message.textContent = "Scissors over Scissors, try again";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    message.textContent = "You loose, Scissors win over Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    message.textContent = "You win, Paper win over Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    message.textContent = "You win, Scissors win over Paper";
  }
};

function winner() {
  if (playerScore === compScore) {
    message.textContent = "Game over, Tied";
  } else if (playerScore > compScore) {
    message.textContent = "Game over, the player the winner";
  } else {
    message.textContent = "Game over, the Computer is the winner";
  }
}
/*  function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("please make your choice").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log(winner());
} */
