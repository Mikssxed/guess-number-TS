'use strict';
const againButton = document.querySelector('.again');
const inputNumber = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const actualNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const actualScore = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');
let randomNumber;
const generateRandomNumber = () => (randomNumber = Math.round(Math.random() * 19 + 1));
generateRandomNumber();
const displayMessage = (messageText) => {
    message.innerHTML = messageText;
};
const checkNumber = () => {
    if (Number(inputNumber.value) === randomNumber) {
        actualNumber.innerHTML = String(randomNumber);
        displayMessage(`Correct number!`);
        if (highscore.innerHTML < actualScore.innerHTML) {
            highscore.innerHTML = actualScore.innerHTML;
        }
        bodyElement.style.background = '#60b347';
    }
    else if (Number(inputNumber.value) !== randomNumber) {
        actualScore.innerHTML = String(Number(actualScore.innerHTML) - 1);
        displayMessage(Number(inputNumber.value) < randomNumber ? `Too low!` : `Too high!`);
    }
};
const tryAgain = () => {
    bodyElement.style.background = '#222';
    actualNumber.innerHTML = '?';
    actualScore.innerHTML = String(20);
    displayMessage(`Start guessing...`);
    generateRandomNumber();
};
checkButton.addEventListener('click', function () {
    if (Number(actualScore.innerHTML) <= 1) {
        displayMessage(`You lost!`);
        actualScore.innerHTML = String(0);
    }
    else if (Number(inputNumber.value) <= 20 &&
        Number(inputNumber.value) >= 1) {
        checkNumber();
    }
    else {
        message.innerHTML = `Please input number between 1 and 20!`;
    }
});
againButton.addEventListener('click', tryAgain);
