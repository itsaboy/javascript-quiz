//////// Emoji Source Paths ////////

const thinking = "./assets/icons/emojis/thinking.svg";
const happy = "./assets/icons/emojis/happy.svg";
const sad = "./assets/icons/emojis/sad.svg";
const salute = "./assets/icons/emojis/salute.svg";

//////// Header DOM Elements ////////

const emoji =  document.getElementById("emoji");
const currentScore = document.getElementById("score-output");
const timeLeft = document.getElementById("time-output");

//////// Main DOM elements ////////

const main = document.getElementById("main");

// Pre quiz DOM Elements
const infoContainer = document.createElement("div");
infoContainer.setAttribute("class", "info-container main-container");

const infoParagraph = document.createElement("p");
infoParagraph.setAttribute("class", "text");
infoParagraph.setAttribute("id", "info-paragraph");
infoParagraph.innerHTML = `
This timed quiz will test your knowledge of fundamental Javascript concepts. You have <span class="colored-text">60</span> seconds to answer up to <span class="colored-text">10</span> questions. Each correct answer will add <span class="colored-text">10</span> points to your score. An incorrect answer will subtract <span class="colored-text">10</span> seconds from your time remaining. If all questions are answered correctly, your time remaining will be added to your score for a <span class="colored-text">Final Result</span>!
`; // note: innerHTML was used due to <span> tags

const startQuizButton = document.createElement("button");
startQuizButton.setAttribute("class", "next-btn button");
startQuizButton.setAttribute("id", "start-quiz-btn button");
startQuizButton.innerText = "Start Quiz";

// During quiz DOM elements
const quizContainer = document.createElement("div");
quizContainer.setAttribute("class", "quiz-container main-container");

const currentQuestion = document.createElement("p");
currentQuestion.setAttribute("class", "text");
currentQuestion.setAttribute("id", "question");

const nextButton = document.createElement("button");
nextButton.setAttribute("class", "next-btn button");
nextButton.setAttribute("id", "next-btn");

const answerOne = document.createElement("button");
answerOne.setAttribute("class", "answer-btn button");
answerOne.setAttribute("id", "answer-one");

const answerTwo = document.createElement("button");
answerTwo.setAttribute("class", "answer-btn button");
answerTwo.setAttribute("id", "answer-two");

const answerThree = document.createElement("button");
answerThree.setAttribute("class", "answer-btn button");
answerThree.setAttribute("id", "answer-three");

const answerFour = document.createElement("button");
answerFour.setAttribute("class", "answer-btn button");
answerFour.setAttribute("id", "answer-four");

const answerResult = document.createElement("h3");
answerResult.setAttribute("class", "result");
answerResult.setAttribute("id", "result");

// Post Quiz DOM elements
const finalResultContainer = document.createElement("div");
finalResultContainer.setAttribute("class", "result-container main-container");

const resultsParagraph = document.createElement("p");
resultsParagraph.setAttribute("class", "text");
resultsParagraph.setAttribute("id", "final-result");

const userNameInput = document.createElement("input");
userNameInput.setAttribute("class", "name-input");
userNameInput.setAttribute("id", "name-input");
userNameInput.setAttribute("placeholder", "User Name");

/* Because the input and submit button are not inside a form,
this required attribute is set purely for the tooltip.
See the comment inside the saveNewScore function
(located in scores.js) for clarification. */
userNameInput.setAttribute("required", "true");
userNameInput.setAttribute("maxlength", "8");

const submitScoreButton = document.createElement("button");
submitScoreButton.setAttribute("class", "next-btn button");
submitScoreButton.setAttribute("id", "submit-btn");
submitScoreButton.innerText = "Submit Score";

const warning = document.createElement("p");
warning.setAttribute("class", "warning");
warning.setAttribute("id", "warning");
warning.innerText = `
Warning: this quiz is designed to test your knowledge and compare scores against other students. If you wish to compare scores against yourself, please annotate your submitted username with a number. Duplicate username submissions will result in the previous score being overwritten!
`;

// High Scores DOM elements
const highScoresContainer = document.createElement("div");
highScoresContainer.setAttribute("class", "scores-container main-container");

const highScoresHeading = document.createElement("h2");
highScoresHeading.setAttribute("class", "high-scores-heading");
highScoresHeading.setAttribute("id", "high-scores-heading");
highScoresHeading.innerText = "High Scores";

const loadedData = document.createElement("div");
loadedData.setAttribute("class", "high-scores-output");
loadedData.setAttribute("id", "output-container");

//////// Footer DOM Elements ////////

const footerContainer = document.getElementById("footer-container");

const viewScores = document.createElement("a");
viewScores.setAttribute("class", "internal-link");
viewScores.setAttribute("id", "scoreboard");
viewScores.innerText = "View Scores";

const tryAgain = document.createElement("a");
tryAgain.setAttribute("class", "internal-link");
tryAgain.setAttribute("id", "try-again");
tryAgain.innerText = "Take Quiz";