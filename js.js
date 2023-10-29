const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const randomString = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
  return randomString[Math.floor(Math.random() * randomString.length)];
};

rockBtn.addEventListener("click", (e) => {
  console.log("Rock");
});

paperBtn.addEventListener("click", (e) => {
  console.log("Paper");
});

scissorsBtn.addEventListener("click", (e) => {
  console.log("Scissors");
});
