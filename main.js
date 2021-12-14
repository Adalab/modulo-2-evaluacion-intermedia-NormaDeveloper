'use strict';
console.log('ready');
//Variables
const btn = document.querySelector('.js_btn');
const selectedItem = document.querySelector('.js_selected_item');
const message = document.querySelector('.js_message');
const userScore = document.querySelector('.js_user_scoreboard');
let userValue = '';
let count = 1;
const randomNumber = getRandomNumber(10);
console.log({ randomNumber });

function compareUserValue(machineItem) {
  userValue = selectedItem.value;

  if (machineItem === 'stone' && userValue === 'stone') {
    message.innerHTML = 'Empate... Casi...';
    console.log('MENSAJE' + message.innerHTML);
  } else if (machineItem === 'stone' && userValue === 'scissors') {
    message.innerHTML = 'Has perdido, lo siento';
  } else if (machineItem === 'stone' && userValue === 'sheet') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineItem === 'sheet' && userValue === 'stone') {
    message.innerHTML = 'Has perdido, lo siento';
  } else if (machineItem === 'sheet' && userValue === 'scissors') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineItem === 'sheet' && userValue === 'sheet') {
    message.innerHTML = 'Empate... Casi...';
  } else if (machineItem === 'scissors' && userValue === 'stone') {
    message.innerHTML = '¡Has ganado!';
  } else if (machineItem === 'scissors' && userValue === 'scissors') {
    message.innerHTML = 'Empate... Casi...';
  } else if (machineItem === 'scissors' && userValue === 'sheet') {
    message.innerHTML = 'Has perdido, lo siento';
  }
}

function translateRandomNumber(randomNumber) {
  let machineItem = '';
  if (randomNumber <= 3) {
    machineItem = 'stone';
  } else if (randomNumber <= 6) {
    machineItem = 'sheet';
  } else if (randomNumber > 6) {
    machineItem = 'scissors';
  }
  return machineItem;
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
  compareUserValue();
  // countUserTries();
  // changeResults();
}

btn.addEventListener('click', handleBtn);
