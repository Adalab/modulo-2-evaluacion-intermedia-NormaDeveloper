'use strict';
console.log('ready');

//Global var
const btn = document.querySelector('.js_btn');
const selectedItem = document.querySelector('.js_selected_item');
const message = document.querySelector('.js_message');
const userScore = document.querySelector('.js_user_scoreboard');
const machineScore = document.querySelector('.js_machine_scoreboard');
const resetBtn = document.querySelector('.js_reset');
const moves = document.querySelector('.js_move_scoreboard');
let userValue = '';
let machineItem = '';
let countUser = 1;
let countMachine = 1;
let totalMoves = 1;
let randomNumber = 0;

//Functions
function compareUserValue(machineIt) {
  userValue = selectedItem.value;
  if (machineIt === 'stone' && userValue === 'stone') {
    message.innerHTML = 'Empate... Casi...';
  } else if (machineIt === 'stone' && userValue === 'scissors') {
    message.innerHTML = 'Has perdido, lo siento';
  } else if (machineIt === 'stone' && userValue === 'sheet') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineIt === 'sheet' && userValue === 'stone') {
    message.innerHTML = 'Has perdido, lo siento';
  } else if (machineIt === 'sheet' && userValue === 'scissors') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineIt === 'sheet' && userValue === 'sheet') {
    message.innerHTML = 'Empate... Casi...';
  } else if (machineIt === 'scissors' && userValue === 'stone') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineIt === 'scissors' && userValue === 'scissors') {
    message.innerHTML = 'Empate... Casi...';
  } else if (machineIt === 'scissors' && userValue === 'sheet') {
    message.innerHTML = 'Has perdido, lo siento';
  }
}

function translateRandomNumber(randomNumber) {
  if (randomNumber <= 3) {
    machineItem = 'stone';
  } else if (randomNumber <= 6) {
    machineItem = 'sheet';
  } else if (randomNumber > 6) {
    machineItem = 'scissors';
  }
  return console.log({ machineItem });
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function addPointToUserCounter() {
  return (userScore.innerHTML = countUser++);
}

function addPointToMachineCounter() {
  return (machineScore.innerHTML = countMachine++);
}

function addOneMove() {
  moves.innerHTML = totalMoves++;
}

function controlScore() {
  if (
    (machineItem === 'stone' && userValue === 'sheet') ||
    (machineItem === 'sheet' && userValue === 'scissors') ||
    (machineItem === 'scissors' && userValue === 'stone')
  ) {
    console.log('suma un punto al usuario');
    addPointToUserCounter();
    addOneMove();
  } else if (
    (machineItem === 'stone' && userValue === 'scissors') ||
    (machineItem === 'sheet' && userValue === 'stone') ||
    (machineItem === 'scissors' && userValue === 'sheet')
  ) {
    console.log('suma un punto al robot');
    addPointToMachineCounter();
    addOneMove();
  } else {
    addOneMove();
  }
}

function reset() {
  totalMoves = 0;
  countUser = 0;
  countMachine = 0;
  message.innerHTML = '¡Vamos a jugar!';
  userScore.innerHTML = 0;
  machineScore.innerHTML = 0;
  moves.innerHTML = 0;
}

function gameOver() {
  if (totalMoves === 11) {
    alert('GAME OVER. 10 jugadas. Has llegado al máximo de jugadas.');
    reset();
  }
}

function handleBtn(e) {
  e.preventDefault();
  randomNumber = getRandomNumber(10);
  translateRandomNumber(randomNumber);
  compareUserValue(machineItem);
  controlScore();
  gameOver();
  console.log({ totalMoves });
}

function handleReset() {
  reset();
}

//Listeners
resetBtn.addEventListener('click', handleReset);
btn.addEventListener('click', handleBtn);
