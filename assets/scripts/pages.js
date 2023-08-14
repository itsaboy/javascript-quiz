//////// Functions that append the DOM ////////

// Info page that explains the rules of the quiz
const preQuiz = () => {
    emoji.src = salute;

    // Clears the DOM 
    main.querySelectorAll("*").forEach(e => e.remove());
    tryAgain.remove();
    loadedData.innerText = "";

    // Appends created DOM elements
    main.append(infoContainer);
    infoContainer.append(infoParagraph);
    infoContainer.append(startQuizButton);
    footerContainer.append(viewScores);

    // Adds event listener to button and link
    startQuizButton.addEventListener("click", duringQuiz);
    viewScores.addEventListener("click", highScores);
};

// Quiz page that displays questions and answers
const duringQuiz = () => {
    // Clears the DOM
    main.querySelectorAll("*").forEach(e => e.remove());
    viewScores.remove();

    // Removes button and link event listener from memory
    startQuizButton.removeEventListener("click", duringQuiz);
    viewScores.removeEventListener("click", highScores);

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
    nextButton.addEventListener("click", nextQuestion);
    answerOne.addEventListener("click", answerOneClicked);
    answerTwo.addEventListener("click", answerTwoClicked);
    answerThree.addEventListener("click", answerThreeClicked);
    answerFour.addEventListener("click", answerFourClicked);

    // Starts the Quiz
    startQuiz();   
};

// Page that displays the final score the user received 
const postQuiz = () => {
    timesUp = true; // See comment (located in global.js) for details
    finalScore = score + timer;
    // Clears the DOM
    main.querySelectorAll("*").forEach(e => e.remove());

    /* Removes nextQuestionButton and all answerButton event listeners
    from memory */
    nextButton.removeEventListener("click", nextQuestion);
    answerOne.removeEventListener("click", answerOneClicked);
    answerTwo.removeEventListener("click", answerTwoClicked);
    answerThree.removeEventListener("click", answerThreeClicked);
    answerFour.removeEventListener("click", answerFourClicked);

    /* Changes emoji image source based on the user"s
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
    submitScoreButton.addEventListener("click", saveNewScore);
};

// High scores page that displays the results of previous quiz takers
const highScores = () => {
    // Clears the DOM
    main.querySelectorAll("*").forEach(e => e.remove());
    viewScores.remove();

    // Removes event listeners from memory
    submitScoreButton.removeEventListener("click", saveNewScore);
    viewScores.removeEventListener("click", highScores);

    // Appends created DOM elements
    main.append(highScoresContainer);
    highScoresContainer.append(highScoresHeading);
    highScoresContainer.append(loadedData);
    footerContainer.append(tryAgain);

    // Adds event listener to link
    tryAgain.addEventListener("click", refresh);

    // Loads and displays previous results from local storage
    loadScores();
}

/* Loads the quiz info page by default when
 site is refreshed/first loaded */
preQuiz();