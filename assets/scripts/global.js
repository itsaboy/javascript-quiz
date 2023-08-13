// Global Variables //

let timer = 60; // Time left on the countdown
let score = 0; // Score based on answers to questions
let paused = true; // Pauses/Restarts the countdown
let activeQuestion = "none"; // Changes based on which question the user is answering
let correctAnswer = "none"; // Changes based on which question the user is answering
let finalScore = 0; // Determined by adding the score to time left in countdown

/* This variable is necessary to prevent an issue where the
user will not be able to input a name to save their score due
to the way the postQuiz function (located in dom.js) is handled. 
If this variable is absent and the quiz ends because time expired,
the countdown function will reload the <main> DOM elements indefinitely */
let timesUp = false;

// Countdown Timer
const countdown = () => {
    // Counts down if timer is not paused
    if (paused === false) {
        timer--;
        timeLeft.innerText = `${timer}`;
    } else {
        timeLeft.innerText = `${timer}`;
    };

    // Takes user to the quiz results page when timer runs out
    if (timer <= 0 && timesUp === false) {
        paused = true;
        timer = 0;
        timeLeft.innerText = "0";
        postQuiz();
    };
};

// Refresh page to let user retry the quiz
const refresh = () => {
    location.reload();
};