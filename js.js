const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let humanScore = 0;
let computerScore = 0;

function GetComputerChoice () {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
const computerSelection = GetComputerChoice();
let playerChoice;

rock.addEventListener('click', () => {
  playerChoice = 'rock'
  playRound(playerChoice, computerSelection);
  console.log(playerChoice, computerSelection)
}); 

paper.addEventListener('click', () => {
  playerChoice = 'paper'
  playRound(playerChoice, computerSelection);
});

scissors.addEventListener('click', () => {
  playerChoice = 'scissors'
  playRound(playerChoice, computerSelection);
});


  function playRound(humanChoice, computerChoice) {
  if (humanChoice == "paper" && computerChoice == "rock") {
  humanScore++
  console.log("you won, paper beats rock");
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
  humanScore++
  console.log("you won, scissors beats paper");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
  humanScore++
  console.log("you won, rock beats scissors");
  } else if( humanChoice == "paper" && computerChoice == "scissors") {
  computerScore++
  console.log("you lost, scissors beats paper");
  } else if ( humanChoice == "rock" && computerChoice == "paper") {
  computerScore++
  console.log("you lost, paper beats rock");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
  computerScore++
  console.log("you lost, rock beats scissors");
  } else if (humanChoice === computerChoice) {
  console.log("its a draw")
  } else {
    "game over";
  }


}
