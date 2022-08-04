/*----- constants -----*/

/*----- app's state (variables) -----*/
let choice = null;
let choice_arr = [];
let player1, player2;

/*----- cached element references -----*/
const gameBoard = document.getElementById("board");
const square = document.querySelectorAll(".grid");
const resetButton = document.querySelector("button");
const message = document.getElementById("message");

/*----- event listeners -----*/
gameBoard.addEventListener("click", handleEvent);
resetButton.addEventListener("click", resetGame);

/*----- functions -----*/
function handleEvent(e) {
  let idx;
  if (e.target.classList.contains("grid-container")) return;
  let id = e.target.id;
  if (e.target.firstChild) return;
  if (choice === null || choice === "O") {
    let divEl = document.getElementById(id);
    divEl.innerHTML = "X";
    choice = "X";
    idx = parseInt(e.target.id.replace("grid", ""));
    choice_arr[idx] = "X";
    player1 = "X";
    isWinner(choice_arr, player1);
  } else if (choice === null || choice === "X") {
    let divEl = document.getElementById(id);
    divEl.innerHTML = "O";
    choice = "O";
    idx = parseInt(e.target.id.replace("grid", ""));
    choice_arr[idx] = "O";
    player2 = "O";
    isWinner(choice_arr, player2);
  }
}

function resetGame(e) {
  square.forEach(function (sq) {
    sq.innerHTML = "";
    message.innerHTML = "Player X's turn";
    choice_arr.pop();
  });
  choice = null;
  player1, (player2 = null);
}

function isWinner(arr, player) {
  if (
    (arr[0] == "X" && arr[1] == "X" && arr[2] == "X") ||
    (arr[3] == "X" && arr[4] == "X" && arr[5] == "X") ||
    (arr[6] == "X" && arr[7] == "X" && arr[8] == "X") ||
    (arr[0] == "X" && arr[3] == "X" && arr[6] == "X") ||
    (arr[1] == "X" && arr[4] == "X" && arr[7] == "X") ||
    (arr[2] == "X" && arr[5] == "X" && arr[8] == "X") ||
    (arr[0] == "X" && arr[4] == "X" && arr[8] == "X") ||
    (arr[2] == "X" && arr[4] == "X" && arr[6] == "X")
  ) {
    winMessage(player);
  } else if (
    (arr[0] == "O" && arr[1] == "O" && arr[2] == "O") ||
    (arr[3] == "O" && arr[4] == "O" && arr[5] == "O") ||
    (arr[6] == "O" && arr[7] == "O" && arr[8] == "O") ||
    (arr[0] == "O" && arr[3] == "O" && arr[6] == "O") ||
    (arr[1] == "O" && arr[4] == "O" && arr[7] == "O") ||
    (arr[2] == "O" && arr[5] == "O" && arr[8] == "O") ||
    (arr[0] == "O" && arr[4] == "O" && arr[8] == "O") ||
    (arr[2] == "O" && arr[4] == "O" && arr[6] == "O")
  ) {
    winMessage(player);
  } else if (arr.length == 9) {
    if (arr.includes(undefined)) return;
    else {
      message.innerHTML = "Nobody Won! Please Try Again.";
    }
  } else {
    if (player === "X") {
      message.innerHTML = `Player O's turn`;
    } else {
      message.innerHTML = `Player X's turn`;
    }
  }
}

function winMessage(player) {
  if (player === "X") {
    message.innerHTML = `Player ${player} Won! Hurry!`;
  } else {
    message.innerHTML = `Player ${player} Won! Hurry!`;
  }
}
