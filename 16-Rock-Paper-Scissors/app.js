let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
};

const convertToWord = (letter) => {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  return "scissors";
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(
    computerChoice
  )}. You win!`;
  const element = document.getElementById(convertToWord(userChoice));
  element.classList.add("green-glow");
  setTimeout(() => element.classList.remove("green-glow"), 300);
};

const lose = (userChoice, computerChoice) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(
    computerChoice
  )}. You lost... `;
  const element = document.getElementById(convertToWord(userChoice));
  element.classList.add("red-glow");
  setTimeout(() => element.classList.remove("red-glow"), 300);
};

const draw = (userChoice, computerChoice) => {
  result_div.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(
    computerChoice
  )}. It's a draw`;
  const element = document.getElementById(convertToWord(userChoice));
  element.classList.add("gray-glow");
  setTimeout(() => element.classList.remove("gray-glow"), 300);
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

const main = () => {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
};

main();
