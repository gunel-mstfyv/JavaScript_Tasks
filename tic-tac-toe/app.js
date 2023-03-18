const result = document.createElement("h1");
const board = document.createElement("section");
const playAgainBtn = document.createElement("button");
const scoreElement = document.createElement("h1");
let score = {
  X: 0,
  O: 0,
};
const showScore = () => {
  scoreElement.textContent = `X: ${score.X} | O: ${score.O}`;
};
playAgainBtn.textContent = "Play Again";
board.classList.add("board");
document.body.append(scoreElement, result, board, playAgainBtn);
playAgainBtn.addEventListener("click", () => {
  player = true;
  arr = Array(9).fill(null);
  winner = null;
  result.textContent = "";
  board.classList.remove("has__winner");
  [...document.querySelectorAll(".box")].map((a) => {
    a.textContent = "";
    a.classList.remove("winner");
  });
});
let arr = Array(9).fill(null);
let player = true;
let winner = null;
const checkWinner = () => {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winningPositions.map((position) => {
    let [a, b, c] = position;
    if (arr[a] && arr[a] === arr[b] && arr[b] === arr[c]) {
      score = { ...score, [arr[a]]: score[arr[a]] + 1 };
      showScore();
      winner = arr[a];
      result.textContent = `${arr[a]} Qalibdir`;
      board.classList.add("has__winner");
      const boxes = document.querySelectorAll(".box");
      position.map((t) => {
        boxes[t].classList.add("winner");
      });
    }
  });
  const emptyCells = arr.filter((a) => !a);
  if (!emptyCells.length && !winner) {
    result.textContent = `Heç-heçə`;
  }
};

arr.map((a, b) => {
  let box = document.createElement("div");
  box.classList.add("box");
  board.append(box);
  box.addEventListener("click", () => {
    if (arr[b] || winner) {
      return;
    }
    box.textContent = player ? "X" : "O";
    arr[b] = player ? "X" : "O";
    player = !player;
    checkWinner();
  });
});

//Heç heçə şərti.
//Oyun bitdikdə yenidən oyna butonunun göstərilməsi
//Xalların göstərilməsi.
//LocalStorage Araşdır.

//----------
// const loginInput = document.getElementById("login");
// const showButton = document.getElementById("show");
// showButton.addEventListener("click", () => {
//   console.log(loginInput.placeholder);
//   console.log(loginInput.getAttribute("placeholder"));
// });
// showButton.addEventListener("mouseenter", () => {
//   console.log(loginInput.value);
// });
// showButton.addEventListener("mouseleave", () => {
//   console.log(loginInput.value);
// });
// showButton.addEventListener("mousemove", () => {
//   console.log(loginInput.value);
// });
