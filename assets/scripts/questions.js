const rightAnswer = () => {
    correctAnswer = "none";
    emoji.src = happy;
    answerResult.style.display = "block";
    answerResult.innerText = "Correct!";
    score = score + 10;
    currentScore.innerText = `${score}`;
    paused = true;
    nextButton.style.visibility = "visible";
    nextButton.innerText = "Next";
};

const wrongAnswer = () => {
    correctAnswer = "none";
    emoji.src = sad;
    answerResult.style.display = "block";
    answerResult.innerText = "Incorrect...";
    timer = timer - 10;
    timeLeft.innerText = `${timer}`;
    paused = true;
    nextButton.style.visibility = "visible";
    nextButton.innerText = "Next";
};

const startQuiz = () => {
    nextButton.removeEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextQuestion);
    answerOne.addEventListener('click', answerOneClicked);
    answerTwo.addEventListener('click', answerTwoClicked);
    answerThree.addEventListener('click', answerThreeClicked);
    answerFour.addEventListener('click', answerFourClicked);
    setInterval(countdown, 1000);
    answerOne.style.display = 'block';
    answerTwo.style.display = 'block';
    answerThree.style.display = 'block';
    answerFour.style.display = 'block';
    nextQuestion();
};

const answerOneClicked = () => {
    const answer = "A";
    if (answer === correctAnswer) {
        rightAnswer();
    } else if (correctAnswer === "B" || correctAnswer === "C" || correctAnswer === "D") {
        wrongAnswer();
    } else {
        return;
    };
};

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

const questionOne = () => {
    activeQuestion = "Question One";
    paused = false;
    correctAnswer = "B";
    currentQuestion.innerText = "Which of the following is not a primitive?";
    answerOne.innerText = "String";
    answerTwo.innerText = "Object";
    answerThree.innerText = "Boolean";
    answerFour.innerText = "All of the Above";
    nextButton.style.visibility = "hidden";
};

const questionTwo = () => {
    activeQuestion = "Question Two";
    paused = false;
    correctAnswer = "A";
    currentQuestion.innerText = "Which of the following denotes an array?";
    answerOne.innerText = "[ ]";
    answerTwo.innerText = "( )";
    answerThree.innerText = "{ }";
    answerFour.innerText = "' '";
    nextButton.style.visibility = "hidden";
};

const questionThree = () => {
    activeQuestion = "Question Three";
    paused = false;
    correctAnswer = "D";
    currentQuestion.innerText = "Which of the following declares a variable?";
    answerOne.innerText = "let";
    answerTwo.innerText = "const";
    answerThree.innerText = "var";
    answerFour.innerText = "All of the Above";
    nextButton.style.visibility = "hidden";
};

const questionFour = () => {
    activeQuestion = "Question Four";
    paused = false;
    correctAnswer = "C";
    currentQuestion.innerText = "What will console.log(1.0 + '2.2'); output?";
    answerOne.innerText = "1.02.2";
    answerTwo.innerText = "3.2";
    answerThree.innerText = "12.2";
    answerFour.innerText = "1.2.2";
    nextButton.style.visibility = "hidden";
};

const questionFive = () => {
    activeQuestion = "Question Five";
    paused = false;
    correctAnswer = "A";
    currentQuestion.innerText = "Which of the following operands checks for strict equality?";
    answerOne.innerText = "===";
    answerTwo.innerText = "==";
    answerThree.innerText = "!==";
    answerFour.innerText = "!=";
    nextButton.style.visibility = "hidden";
};

const questionSix = () => {
    activeQuestion = "Question Six";
    paused = false;
    correctAnswer = "D";
    currentQuestion.innerText = "Which of the following variable names follows the correct naming convention?";
    answerOne.innerText = "new-variable";
    answerTwo.innerText = "newvariable";
    answerThree.innerText = "new_variable";
    answerFour.innerText = "newVariable";
    nextButton.style.visibility = "hidden";
};

const questionSeven = () => {
    activeQuestion = "Question Seven";
    paused = false;
    correctAnswer = "B";
    currentQuestion.innerText = "What will console.log(0 == true); output?";
    answerOne.innerText = "0 == true";
    answerTwo.innerText = "false";
    answerThree.innerText = "true";
    answerFour.innerText = "0";
    nextButton.style.visibility = "hidden";
};

const questionEight = () => {
    activeQuestion = "Question Eight";
    paused = false;
    correctAnswer = "C";
    currentQuestion.innerText = "Which of the following is the correct way to check the equality of 3 variables?";
    answerOne.innerText = "(X == Y) & (Y == Z)";
    answerTwo.innerText = "X = Y = Z";
    answerThree.innerText = "(X == Y) && (Y == Z)";
    answerFour.innerText = "(X != Y) && (Y != Z)";
    nextButton.style.visibility = "hidden";
};

const questionNine = () => {
    activeQuestion = "Question Nine";
    paused = false;
    correctAnswer = "C";
    currentQuestion.innerText = "Which of the following is the equivalent to 'My name is ' + name + '!'?";
    answerOne.innerText = "'My name is ' + name!";
    answerTwo.innerText = "'My' 'name' 'is' 'name!'";
    answerThree.innerText = "`My name is ${name}!`";
    answerFour.innerText = "None of the Above";
    nextButton.style.visibility = "hidden";
};

const questionTen = () => {
    activeQuestion = "Question Ten";
    paused = false;
    correctAnswer = "A";
    currentQuestion.innerText = "Which of the following is a numeric data type?";
    answerOne.innerText = "NaN";
    answerTwo.innerText = "null";
    answerThree.innerText = "undefined";
    answerFour.innerText = "None of the Above";
    nextButton.style.visibility = "hidden";
};

const resultsScreen = () => {
    paused = true;
}

const nextQuestion = () => {
    emoji.src = thinking;
    answerResult.style.display = "none";
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
    } else if (activeQuestion === "Question Ten") {
        resultsScreen();
    };
};

nextButton.addEventListener('click', startQuiz);