// Global Variables //

let timer = 60;
let score = 0;
let paused = true;
let activeQuestion = "none";
let correctAnswer = "none";

// Countdown Timer //

const countdown = () => {
    if (paused === false) {
        timer--;
        timeLeft.innerText = `${timer}`;
    } else {
        timeLeft.innerText = `${timer}`;
    };
};