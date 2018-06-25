/*================
   START SCREEN
=================*/
//Creates Elements for the start screen and appends them to the DOM
const startScreen = document.createElement('div');
const startHeader = document.createElement('header');
const gameTitle = document.createElement('h1');
const startButton = document.createElement('a');
const body = document.getElementsByTagName('body')[0];
startScreen.className = "screen screen-start";
startScreen.id = "start";
gameTitle.textContent = "Tic Tac Toe"
startButton.href = "#";
startButton.className = "button";
startButton.textContent = "Start game";
startScreen.appendChild(startHeader);
startHeader.appendChild(gameTitle);
startHeader.appendChild(startButton);
body.appendChild(startScreen);


/*===========
    START
===========*/
//When "start" button is clicked, start screen is hidden, revealing game board.
startButton.addEventListener('click', () => {
  startScreen.style.display = "none";
});

/*============
    2P GAME
============*/
//Variables
//Sets player 1 as active for turn 1
//Sets a turn counter
const p1 = document.getElementById('player1');
const p2 = document.getElementById('player2');
const boxes = document.querySelectorAll('.box');
p1.classList.add('active');
let turns = 0;

//Programming for a 2-player game
const twoPlayerGame = () => {
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      if (event.target.className == 'box') {
        if (turns % 2 === 0) {
          event.target.classList.add('box-filled-2');
          p1.classList.remove('active');
          p2.classList.add('active');
          turns += 1;
        } else if (turns % 2 !== 0) {
          event.target.classList.add('box-filled-1');
          p1.classList.add('active');
          p2.classList.remove('active');
          turns += 1;
        }
      }
    });
  });
}

twoPlayerGame();

/*const twoPlayerGame = () => {
  for (i = 0; i < boxes.length; i += 1) {
    boxes[i].addEventListener('click', () => {
      if (!boxes[i].classList.contains('box-filled')) {
        if (turns % 2 === 0) {
          boxes[i].classList.add('box-filled-2');
          p1.classList.remove('active');
          p2.classList.add('active');
          turns += 1;
        } else if (turns % 2 !== 0) {
          boxes[i].classList.add('box-filled-1');
          p1.classList.add('active');
          p2.classList.remove('active');
        }
      }
    });
  }
}

twoPlayerGame();*/
