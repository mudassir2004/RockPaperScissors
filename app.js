let mycount = 0;
let pccount = 0;
let points = document.querySelector("#user-score");
let computerPoints = document.querySelector("#comp-score");
let selected = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let restart = document.querySelector("#restart");

    restart.addEventListener('click',() =>{
        console.log(restart,"object");
        mycount = 0;
        pccount = 0;
        points.innerHTML = 0
        computerPoints.innerHTML = 0
        message.innerText = "Play your move"
        message.style.backgroundColor = "#081b31"
    })
 
const draw = () => {
  console.log("match draw");
  message.style.backgroundColor = "blue";
  message.innerText = "Match Draw";
};

const gamewin = (winner, pcchoice, mychoice) => {
  if (winner === true) {
    console.log("win");
    message.innerText = `you Win! ${mychoice} beats ${pcchoice}`;
    message.style.backgroundColor = "green";
    mycount++;
    points.innerText = mycount;
  } else {
    console.log("lose");
    pccount++;
    computerPoints.innerText = pccount;
    message.innerText = `You lose! ${pcchoice} beats ${mychoice}`;
    message.style.backgroundColor = "red";
  }
};
const playGame = (mychoice) => {
  console.log(mychoice, "me");
  let pcchoice = compTurn();
  console.log(pcchoice, "pc");
  if (mychoice === pcchoice) {
    draw();
  } else {
    let winner = true;
    if (mychoice === "rock") {
      winner = pcchoice === "paper" ? false : true;
    } else if (mychoice === "paper") {
      winner = pcchoice === "scissors" ? true : false;
    } else {
      winner = pcchoice === "rock" ? true : false;
    }
    gamewin(winner, pcchoice, mychoice);
  }
};

const compTurn = () => {
  let option = ["rock", "paper", "scissors"];
  let idx = Math.floor(Math.random() * 3);
  return option[idx];
};

selected.forEach((choice) => {
  choice.addEventListener("click", () => {
    let mychoice = choice.getAttribute("id");
    playGame(mychoice);
  });
});
