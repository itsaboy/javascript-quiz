let timer = 60;
let score = 0;
let paused = true;
let activeQuestion = "none";
let correctAnswer = "none";

const countdown = () => {
    if (paused === false) {
        timer--;
        timeLeft.innerText = `${timer}`;
    } else {
        timeLeft.innerText = `${timer}`;
    };
};

const rightAnswer = () => {
    correctAnswer = "none";
    emoji.src = happy;
    answerResult.style.visibility = "visible";
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
    answerResult.style.visibility = "visible";
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
    answerOne.style.visibility = 'visible';
    answerTwo.style.visibility = 'visible';
    answerThree.style.visibility = 'visible';
    answerFour.style.visibility = 'visible';
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
    correctAnswer = "A";
    currentQuestion.innerText = "Question One";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionTwo = () => {
    activeQuestion = "Question Two";
    paused = false;
    correctAnswer = "B";
    currentQuestion.innerText = "Question Two";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionThree = () => {
    activeQuestion = "Question Three";
    paused = false;
    correctAnswer = "C";
    currentQuestion.innerText = "Question Three";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionFour = () => {
    activeQuestion = "Question Four";
    paused = false;
    correctAnswer = "D";
    currentQuestion.innerText = "Question Four";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionFive = () => {
    activeQuestion = "Question Five";
    paused = false;
    correctAnswer = "A";
    currentQuestion.innerText = "Question Five";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionSix = () => {
    activeQuestion = "Question Six";
    paused = false;
    correctAnswer = "B";
    currentQuestion.innerText = "Question Six";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionSeven = () => {
    activeQuestion = "Question Seven";
    paused = false;
    correctAnswer = "C";
    currentQuestion.innerText = "Question Seven";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionEight = () => {
    activeQuestion = "Question Eight";
    paused = false;
    correctAnswer = "D";
    currentQuestion.innerText = "Question Eight";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionNine = () => {
    activeQuestion = "Question Nine";
    paused = false;
    correctAnswer = "A";
    currentQuestion.innerText = "Question Nine";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const questionTen = () => {
    activeQuestion = "Question Ten";
    paused = false;
    correctAnswer = "B";
    currentQuestion.innerText = "Question Ten";
    answerOne.innerText = "Answer One";
    answerTwo.innerText = "Answer Two";
    answerThree.innerText = "Answer Three";
    answerFour.innerText = "Answer Four";
    nextButton.style.visibility = "hidden";
};

const resultsScreen = () => {
    paused = true;
}

const nextQuestion = () => {
    emoji.src = thinking;
    answerResult.style.visibility = "hidden";
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