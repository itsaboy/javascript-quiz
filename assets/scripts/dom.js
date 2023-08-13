//////// Emoji Source Paths ////////

const thinking = "./assets/icons/emojis/thinking.svg";
const happy = "./assets/icons/emojis/happy.svg";
const sad = "./assets/icons/emojis/sad.svg";
const salute = "./assets/icons/emojis/salute.svg";

//////// Header DOM Elements ////////

const emoji =  document.getElementById('emoji');
const currentScore = document.getElementById('score-output');
const timeLeft = document.getElementById('time-output');

//////// Main DOM elements ////////

const main = document.getElementById('main');

// Pre quiz DOM Elements
const infoContainer = document.createElement('div');
infoContainer.setAttribute('class', 'info-container main-container');

const infoParagraph = document.createElement('p');
infoParagraph.setAttribute('class', 'text');
infoParagraph.setAttribute('id', 'info-paragraph');
infoParagraph.innerHTML = `
This timed quiz will test your knowledge of fundamental Javascript concepts. You have <span class="colored-text">60</span> seconds to answer up to <span class="colored-text">10</span> questions. Each correct answer will add <span class="colored-text">10</span> points to your score. An incorrect answer will subtract <span class="colored-text">10</span> seconds from your time remaining. When the quiz is finished, your time remaining will be added to your score for a <span class="colored-text">Final Result</span>!
`; // note: innerHTML was used due to <span> tags

const startQuizButton = document.createElement('button');
startQuizButton.setAttribute('class', 'next-btn button');
startQuizButton.setAttribute('id', 'start-quiz-btn button');
startQuizButton.innerText = 'Start Quiz';

// During quiz DOM elements
const quizContainer = document.createElement('div');
quizContainer.setAttribute('class', 'quiz-container main-container');

const currentQuestion = document.createElement('p');
currentQuestion.setAttribute('class', 'text');
currentQuestion.setAttribute('id', 'question');

const nextButton = document.createElement('button');
nextButton.setAttribute('class', 'next-btn button');
nextButton.setAttribute('id', 'next-btn');

const answerOne = document.createElement('button');
answerOne.setAttribute('class', 'answer-btn button');
answerOne.setAttribute('id', 'answer-one');

const answerTwo = document.createElement('button');
answerTwo.setAttribute('class', 'answer-btn button');
answerTwo.setAttribute('id', 'answer-two');

const answerThree = document.createElement('button');
answerThree.setAttribute('class', 'answer-btn button');
answerThree.setAttribute('id', 'answer-three');

const answerFour = document.createElement('button');
answerFour.setAttribute('class', 'answer-btn button');
answerFour.setAttribute('id', 'answer-four');

const answerResult = document.createElement('h3');
answerResult.setAttribute('class', 'result');
answerResult.setAttribute('id', 'result');

// Post Quiz DOM elements
const finalResultContainer = document.createElement('div');
finalResultContainer.setAttribute('class', 'result-container main-container');

const resultsParagraph = document.createElement('p');
resultsParagraph.setAttribute('class', 'text');
resultsParagraph.setAttribute('id', 'final-result');

const userNameInput = document.createElement('input');
userNameInput.setAttribute('class', 'name-input');
userNameInput.setAttribute('id', 'name-input');
userNameInput.setAttribute('placeholder', 'User Name');
userNameInput.setAttribute('required', 'true');
userNameInput.setAttribute('maxlength', '8');

const submitScoreButton = document.createElement('button');
submitScoreButton.setAttribute('class', 'next-btn button');
submitScoreButton.setAttribute('id', 'submit-btn');
submitScoreButton.innerText = 'Submit Score';

const warning = document.createElement('p');
warning.setAttribute('class', 'warning');
warning.setAttribute('id', 'warning');
warning.innerText = `
Warning: this quiz is designed to test your knowledge and compare scores against other students. If you wish compare scores against yourself, please annotate your submitted username with a number. Duplicate username submissions will result in the previous score being overwritten!
`;

// High Scores DOM elements
const highScoresContainer = document.createElement('div');
highScoresContainer.setAttribute('class', 'scores-container main-container');

const highScoresHeading = document.createElement('h2');
highScoresHeading.setAttribute('class', 'high-scores-heading');
highScoresHeading.setAttribute('id', 'high-scores-heading');
highScoresHeading.innerText = 'High Scores';

const loadedData = document.createElement('div');
loadedData.setAttribute('class', 'high-scores-output');
loadedData.setAttribute('id', 'output-container');

//////// Footer DOM Elements ////////

const footerContainer = document.getElementById('footer-container');

const viewScores = document.createElement('a');
viewScores.setAttribute('class', 'internal-link');
viewScores.setAttribute('id', 'scoreboard');
viewScores.innerText = 'View Scores';

const tryAgain = document.createElement('a');
tryAgain.setAttribute('class', 'internal-link');
tryAgain.setAttribute('id', 'try-again');
tryAgain.innerText = 'Take Quiz';

//////// Functions that append the DOM ////////

// Info page that explains the rules of the quiz
const preQuiz = () => {
    emoji.src = salute;

    // Clears the DOM 
    main.querySelectorAll('*').forEach(e => e.remove());
    tryAgain.remove();
    loadedData.innerText = '';

    // Appends created DOM elements
    main.append(infoContainer);
    infoContainer.append(infoParagraph);
    infoContainer.append(startQuizButton);
    footerContainer.append(viewScores);

    // Adds event listener to button and link
    startQuizButton.addEventListener('click', duringQuiz);
    viewScores.addEventListener('click', highScores);
};

// Quiz page that displays questions and answers
const duringQuiz = () => {
    // Clears the DOM
    main.querySelectorAll('*').forEach(e => e.remove());
    viewScores.remove();

    // Removes button and link event listener from memory
    startQuizButton.removeEventListener('click', duringQuiz);
    viewScores.removeEventListener('click', highScores);

    // Appends created DOM elements
    main.append(quizContainer);
    quizContainer.append(currentQuestion);
    quizContainer.append(nextButton);
    quizContainer.append(answerOne);
    quizContainer.append(answerTwo);
    quizContainer.append(answerThree);
    quizContainer.append(answerFour);
    quizContainer.append(answerResult);

    /* Adds event listeners to each button */
    nextButton.addEventListener('click', nextQuestion);
    answerOne.addEventListener('click', answerOneClicked);
    answerTwo.addEventListener('click', answerTwoClicked);
    answerThree.addEventListener('click', answerThreeClicked);
    answerFour.addEventListener('click', answerFourClicked);

    // Starts the Quiz
    startQuiz();   
};

// Page that displays the final score the user received 
const postQuiz = () => {
    timesUp = true;
    finalScore = score + timer;
    // Clears the DOM
    main.querySelectorAll('*').forEach(e => e.remove());

    /* Removes nextQuestionButton and all answerButton event listeners
    from memory */
    nextButton.removeEventListener('click', nextQuestion);
    answerOne.removeEventListener('click', answerOneClicked);
    answerTwo.removeEventListener('click', answerTwoClicked);
    answerThree.removeEventListener('click', answerThreeClicked);
    answerFour.removeEventListener('click', answerFourClicked);

    /* Changes emoji image source based on the user's
    final result */
    if (finalScore >= 80) {
        emoji.src = happy;
    } else if (finalScore < 80) {
        emoji.src = sad;
    };

    // Appends created DOM elements
    main.append(finalResultContainer);
    finalResultContainer.append(resultsParagraph);
    finalResultContainer.append(userNameInput);
    finalResultContainer.append(submitScoreButton);
    finalResultContainer.append(warning);
    
    resultsParagraph.innerHTML = `
    You answered <span class="colored-text"> ${score / 10} </span> out of 10 questions correctly. 
    With <span class="colored-text"> ${timer} </span> seconds left on the clock, your final score is:
    <span class="colored-text"> ${finalScore} </span>!
    `; //note: innerHTML was used due to <span> tags

    // Adds event listener to button
    submitScoreButton.addEventListener('click', saveNewScore);
};

// High scores page that displays the results of previous quiz takers
const highScores = () => {
    // Clears the DOM
    main.querySelectorAll('*').forEach(e => e.remove());
    viewScores.remove();

    // Removes event listeners from memory
    submitScoreButton.removeEventListener('click', saveNewScore);
    viewScores.removeEventListener('click', highScores);

    // Appends created DOM elements
    main.append(highScoresContainer);
    highScoresContainer.append(highScoresHeading);
    highScoresContainer.append(loadedData);
    footerContainer.append(tryAgain);

    // Adds event listener to link
    tryAgain.addEventListener('click', refresh);

    // Loads and displays previous results from local storage
    loadScores();
}

/* Loads the quiz info page by default when
 site is refreshed/first loaded */
preQuiz();