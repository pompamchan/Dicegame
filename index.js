var point = {
  1: [0, 1, 2, 3, , 5, 6, 7, 8],
  2: [0, 1, 2, , 4, , 6, 7, 8],
  3: [0, 1, 2, , , , 6, 7, 8],
  4: [, 1, , 3, 4, 5, , 7],
  5: [, 1, , 3, , 5, , 7],
  6: [, 1, , , 4, , , 7],
};

function diceRandom(root) {
  while (true) {
    index = Math.floor(Math.random() * 10);
    if (index <= 6 && index > 0) {
      for (i in point[index]) {
        console.log(
          (document.querySelectorAll(root)[i].style.visibility = "hidden")
        );
      }
      break;
    }
  }

  return index;
}

function result() {
  let player1 = diceRandom("img#P1"),
    player2 = diceRandom("img#P2");
  if (player1 === player2) {
    console.log((document.querySelector("h1").innerHTML = "Draw!"));
  } else if (player1 > player2) {
    console.log((document.querySelector("h1").innerHTML = "Player 1 Win!"));
  } else {
    console.log((document.querySelector("h1").innerHTML = "Player 2 Win!"));
  }

  return;
}

result();
