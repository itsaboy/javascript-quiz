// Quiz Functions //

// Starts the quiz when the nextButton DOM element is clicked
const startQuiz = () => {
    timeLeft.innerText = '60';

    // Sets the interval for the countdown function (located in global.js)
    setInterval(countdown, 1000);

    // Calls the nextQuestion function
    nextQuestion();
};

/* Right and wrong answer functions called based on whether the user
answers a question correctly or incorrectly */ 
const rightAnswer = () => {
    /* correctAnswer must be set to none after a question is answered,
    otherwise the user can still click answer buttons which will call
    their corresponding functions */ 
    correctAnswer = "none";

    // Changes source of the emoji SVG based on the answer 
    emoji.src = happy;

    /* Shows the answerResult DOM element and adds text informing
    the user of whether the answer was correct or incorrect */
    answerResult.style.display = "block";
    answerResult.innerText = "Correct!";

    // Adds 10 points to user's score and updates the DOM element
    score = score + 10;
    currentScore.innerText = `${score}`;

    // Pauses the timer 
    paused = true;

    /* Displays the nextButton DOM element so the user can go
    on to the next question */
    nextButton.style.visibility = "visible";
    nextButton.innerText = "Next";
};

// See above comments for everything here except timer and timeLeft
const wrongAnswer = () => {
    correctAnswer = "none";

    emoji.src = sad;

    answerResult.style.display = "block";
    answerResult.innerText = "Incorrect...";

    // Subtracts 10 seconds from the timer and updates the DOM element
    timer = timer - 10;
    timeLeft.innerText = `${timer}`;
    
    paused = true;

    nextButton.style.visibility = "visible";
    nextButton.innerText = "Next";
};

/* Functions for each multiple-choice answer button called by the corresponding 
event listeners */
const answerOneClicked = () => {
    const answer = "A";

    /* Determines whether the user answered the question correctly based on the correctAnswer
    variable (located in global.js) and updated by the function for each individual question */
    if (answer === correctAnswer) {
        rightAnswer();
    } else if (correctAnswer === "B" || correctAnswer === "C" || correctAnswer === "D") {
        wrongAnswer();
    /* Breaks out of this function if a multiple-choice answer button is clicked when correctAnswer
    variable is set to none, see comment on lines 31 to 33 */
    } else {
        return;
    };
};

// See above comments
const answerTwoClicked = () => {
    const answer = "B";

    if (answer === correctAnswer) {
        rightAnswer();
    } else if (correctAnswer === "A" || correctAnswer === "C" || correctAnswer === "D") {
        wrongAnswer();
    } else {
        return;
    };
};

// See above comments
const answerThreeClicked = () => {
    const answer = "C";

    if (answer === correctAnswer) {
        rightAnswer();
    } else if (correctAnswer === "A" || correctAnswer === "B" || correctAnswer === "D") {
        wrongAnswer();
    } else {
        return;
    };
};

// See above comments
const answerFourClicked = () => {
    const answer = "D";

    if (answer === correctAnswer) {
        rightAnswer();
    } else if (correctAnswer === "A" || correctAnswer === "B" || correctAnswer === "C") {
        wrongAnswer();
    } else {
        return;
    };
};

// Question functions
const questionOne = () => {
    /* Sets the activeQuestion variable (located in global.js) so the nextQuestion function
    knows where the user is in the order of asked questions */
    activeQuestion = "Question One";

    // Starts the timer
    paused = false;

    // Sets the correct answer for this question
    correctAnswer = "B";

    // Updates the text in the currentQuestion DOM element
    currentQuestion.innerText = "Which of the following is not a primitive?";

    // Updates the text in the multiple-choice answer buttons DOM elements
    answerOne.innerText = "String";
    answerTwo.innerText = "Object"; // correct answer
    answerThree.innerText = "Boolean";
    answerFour.innerText = "All of the Above";

    // Hides the next question button
    nextButton.style.visibility = "hidden";
};

// See above comments
const questionTwo = () => {
    activeQuestion = "Question Two";

    paused = false;

    correctAnswer = "A";

    currentQuestion.innerText = "Which of the following denotes an array?";

    answerOne.innerText = "[ ]"; // correct answer
    answerTwo.innerText = "( )";
    answerThree.innerText = "{ }";
    answerFour.innerText = "' '";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionThree = () => {
    activeQuestion = "Question Three";

    paused = false;

    correctAnswer = "D";

    currentQuestion.innerText = "Which of the following declares a variable?";

    answerOne.innerText = "let";
    answerTwo.innerText = "const";
    answerThree.innerText = "var";
    answerFour.innerText = "All of the Above"; // correct answer

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionFour = () => {
    activeQuestion = "Question Four";

    paused = false;

    correctAnswer = "C";

    currentQuestion.innerText = "What will console.log(1.0 + '2.2'); output?";

    answerOne.innerText = "1.02.2";
    answerTwo.innerText = "3.2";
    answerThree.innerText = "12.2"; // correct answer
    answerFour.innerText = "1.2.2";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionFive = () => {
    activeQuestion = "Question Five";

    paused = false;

    correctAnswer = "A";

    currentQuestion.innerText = "Which of the following operands checks for strict equality?";

    answerOne.innerText = "==="; // correct answer
    answerTwo.innerText = "==";
    answerThree.innerText = "!==";
    answerFour.innerText = "!=";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionSix = () => {
    activeQuestion = "Question Six";

    paused = false;

    correctAnswer = "D";

    currentQuestion.innerText = "Which of the following variable names follows the correct naming convention?";

    answerOne.innerText = "new-variable";
    answerTwo.innerText = "newvariable";
    answerThree.innerText = "new_variable";
    answerFour.innerText = "newVariable"; // correct answer

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionSeven = () => {
    activeQuestion = "Question Seven";

    paused = false;

    correctAnswer = "B";

    currentQuestion.innerText = "What will console.log(0 == true); output?";

    answerOne.innerText = "0 == true";
    answerTwo.innerText = "false"; // correct answer
    answerThree.innerText = "true";
    answerFour.innerText = "0";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionEight = () => {
    activeQuestion = "Question Eight";

    paused = false;

    correctAnswer = "C";

    currentQuestion.innerText = "Which of the following is the correct way to check the equality of 3 variables?";

    answerOne.innerText = "(X == Y) & (Y == Z)";
    answerTwo.innerText = "X = Y = Z";
    answerThree.innerText = "(X == Y) && (Y == Z)"; // correct answer
    answerFour.innerText = "(X != Y) && (Y != Z)";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionNine = () => {
    activeQuestion = "Question Nine";

    paused = false;

    correctAnswer = "C";

    currentQuestion.innerText = "Which of the following is the equivalent to 'My name is ' + name + '!'?";

    answerOne.innerText = "'My name is ' + name!";
    answerTwo.innerText = "'My' 'name' 'is' 'name!'";
    answerThree.innerText = "`My name is ${name}!`"; // correct answer
    answerFour.innerText = "None of the Above";

    nextButton.style.visibility = "hidden";
};

// See above comments
const questionTen = () => {
    activeQuestion = "Question Ten";

    paused = false;

    correctAnswer = "A";

    currentQuestion.innerText = "Which of the following is a numeric data type?";

    answerOne.innerText = "NaN"; // correct answer
    answerTwo.innerText = "null";
    answerThree.innerText = "undefined";
    answerFour.innerText = "None of the Above";

    nextButton.style.visibility = "hidden";
};

// Function that determines where the user is in the quiz
const nextQuestion = () => {
    // Changes source of the emoji SVG 
    emoji.src = thinking;

    // Hides the answerResult DOM element
    answerResult.style.display = "none";

    /* Uses the activeQuestion variable (located in global.js) to know 
    what the next question should be */
    if (activeQuestion === "none") {
        questionOne();
    } else if (activeQuestion === "Question One") {
        questionTwo();
    } else if (activeQuestion === "Question Two") {
        questionThree();
    } else if (activeQuestion === "Question Three") {
        questionFour();
    } else if (activeQuestion === "Question Four") {
        questionFive();
    } else if (activeQuestion === "Question Five") {
        questionSix();
    } else if (activeQuestion === "Question Six") {
        questionSeven();
    } else if (activeQuestion === "Question Seven") {
        questionEight();
    } else if (activeQuestion === "Question Eight") {
        questionNine();
    } else if (activeQuestion === "Question Nine") {
        questionTen();
    // Takes user to final result screen when quiz is finished
    } else if (activeQuestion === "Question Ten") {
        paused = true;
        postQuiz();
    };
};