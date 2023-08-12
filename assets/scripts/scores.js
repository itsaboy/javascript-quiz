const pushNewScore = () => {
    userObject = {
        name: userNameInput.value,
        score: finalScore
    };
    localStorage.setItem('userObject.name', JSON.stringify(userNameInput.value));
    localStorage.setItem('userObject.score', JSON.stringify(finalScore));
    highScores();
};

const loadScores = () => {
    let getNames = JSON.parse(localStorage.getItem('userObject.name'));
    let getScores = JSON.parse(localStorage.getItem('userObject.score'));
    if (getScores || getNames != null) {
        userNameOutput.append(getNames);
        userScoreOutput.append(getScores);
    };  
};