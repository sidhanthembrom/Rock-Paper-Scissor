const game = document.querySelector(".game");
const divArray = document.querySelectorAll(".game div");
const userScore = document.querySelector(".userScore span");
let userCount = 0;
const compScore = document.querySelector(".compScore span");
let compCount = 0;

game.addEventListener("click", (e) => {
  // console.log(e.target.parentElement);
  let div = e.target.parentElement;
  let personalChoice;

  if (
    div.getAttribute("class") === "rock" ||
    div.getAttribute("class") === "paper" ||
    div.getAttribute("class") === "scissor"
  ) {
    personalChoice = div.getAttribute("class");

    console.log(personalChoice);
  }

  let numberGenerator = Math.floor(Math.random() * 3);
  let choice = divArray[numberGenerator];
  let compChoice = choice.getAttribute("class");

  console.log(compChoice);

  // its a draw
  if (personalChoice === compChoice) {
    console.log("it's a draw.");
  }

  // user wins
  else if (
    (personalChoice === "rock" && compChoice === "scissor") ||
    (personalChoice === "paper" && compChoice === "rock") ||
    (personalChoice === "scissor" && compChoice === "paper")
  ) {
    console.log("user wins");
    userScore.innerText = ++userCount;
  }

  //comp wins
  else if (
    (compChoice === "rock" && personalChoice === "scissor") ||
    (compChoice === "paper" && personalChoice === "rock") ||
    (compChoice === "scissor" && personalChoice === "paper")
  ) {
    console.log("computer wins");
    compScore.innerText = ++compCount;
  }
});
