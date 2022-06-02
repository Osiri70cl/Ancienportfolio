"use strick";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("Que fais tu ? Il faut désamorcer !");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Bien joué, nous sommes sauvés !!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "🙅‍♂️ Trop grand !!" : "🙅‍♀️ Trop petit !!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥💥BOOOOOMMMMM (perdu)🧨🧨");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF6347";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Désamorce la bombe !");
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
