const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const randomString = ["Rock", "Paper", "Scissors"];

rockBtn.addEventListener("click", (e) => {
  console.log("Rock");
});

paperBtn.addEventListener("click", (e) => {
  console.log("Paper");
});

scissorsBtn.addEventListener("click", (e) => {
  console.log("Scissors");
});

const getComputerChoice = () => {
  return randomString[Math.floor(Math.random() * randomString.length)];
};

function playRound(playerSelection, computerSelection) {
  if (computerSelection === "Rock") {
    return "you tied";
  } else if (computerSelection === "Paper") {
    return "The computer won";
  } else {
    return "You won";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
