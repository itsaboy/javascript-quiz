// Global Variables //

let timer = 60;
let score = 0;
let paused = true;
let activeQuestion = "none";
let correctAnswer = "none";
let finalScore = 0;
let timesUp = false;

const resetGlobals = () => {
    timer = 60;
    score = 0;
    paused = true;
    activeQuestion = "none";
    correctAnswer = "none";
    timesUp = false;
};

// Countdown Timer
const countdown = () => {
    if (paused === false) {
        timer--;
        timeLeft.innerText = `${timer}`;
    } else {
        timeLeft.innerText = `${timer}`;
    };

    if (timer <= 0 && timesUp === false) {
        paused = true;
        timer = 0;
        timeLeft.innerText = "0";
        postQuiz();
    };
};