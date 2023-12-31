// Global Variables //

// Time left on the countdown
let timer = 60;

// Score based on answers to questions
let score = 0;

// Pauses/Restarts the countdown
let paused = true;

// Changes based on which question the user is answering
let activeQuestion = "none";

// Changes based on which question the user is answering
let correctAnswer = "none";

/* Determined by adding the score to time left in countdown,
executed in the postQuiz function (located in pages.js) */
let finalScore = 0;

/* This variable is necessary to prevent an issue where the
user will not be able to input a name to save their score due
to the way the postQuiz function (located in dom.js) is handled. 
If this variable is absent and the quiz ends because time expired,
the countdown function will reload the <main> DOM elements indefinitely */
let timesUp = false;

// Countdown timer
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
        timeLeft.innerText = timer;
        postQuiz();
    };
};

// Reset emoji animation
const resetAnimation = () => {
    emoji.style.animationName = "";
    emoji.style.animationDuration = "";
}

// Refresh page to let user retry the quiz
const refresh = () => {
    location.reload();
};