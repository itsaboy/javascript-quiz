const pushNewScore = () => {
    userObject = {
        name: userNameInput.value,
        score: finalScore
    };
    localStorage.setItem('userObject.name', JSON.stringify(userObject.name));
    localStorage.setItem('userObject.score', JSON.stringify(userObject.score));
    highScores();
};

const loadScores = () => {
    let getNames = JSON.parse(localStorage.getItem('userObject.name'));
    let getScores = JSON.parse(localStorage.getItem('userObject.score'));
    userNameOutput.append(getNames);
    userScoreOutput.append(getScores);
};