'use strict';
console.log('ready');
//Variables
const btn = document.querySelector('.js_btn');
const selectedItem = document.querySelector('.js_selected_item');
const message = document.querySelector('.js_message');
const userScore = document.querySelector('.js_user_scoreboard');
let userValue = '';
let machineItem = '';
let count = 1;
const randomNumber = getRandomNumber(10);
console.log({ randomNumber });

function compareUserValue(machineIt) {
  userValue = selectedItem.value;
  console.log({ machineItem });
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

// function countUserTries() {
//   if()
//   return (userScore.innerHTML = count++);
// }-----NO HA DADO TIEMPO TERMINARLO

function handleBtn(e) {
  e.preventDefault();
  getRandomNumber();
  translateRandomNumber(randomNumber);
  compareUserValue(machineItem);
  // countUserTries();
  // changeResults();
}

btn.addEventListener('click', handleBtn);
