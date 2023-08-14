/* Saves the user"s name and score as a key value pair to
local storage. Once saved the user is immediately shown the
high scores page. */
const saveNewScore = () => {    
    const userName = userNameInput.value;
    const userScore = finalScore;

    // Sets userName to "none" if no input is entered
    if (userNameInput.value !== "") {
        localStorage.setItem("none", userScore);
    } else {
        localStorage.setItem(userName, userScore);
    };

    highScores();
};

/* Loads the key value pairs saved locally into a data variable,
then converts the data into a string format. Outputs the string to
the loadedData DOM element. See NOTE below. */
const loadScores = () => {
    const data = {...localStorage};
    let stringData = JSON.stringify(data);

    loadedData.innerHTML = `
    <h3 class="output">${sanitize(stringData)}</h3>
    `;
};

/* This cleans up the JSON string so that the output to the user is in
simple plain text. By replacing "," with "<br>" each key value pair is displayed
on a new line when set to the loadedData.innerHTML in the loadScores function.

NOTE: Because each key relies on a user input, it is prudent to also sanitize the
output to innerHTML by replacing <script> tags with a blank space in order to 
reduce the possibility of a XSS attack!! */
const sanitize = (data) => {
    const cleaned = data.replaceAll(":", "").replaceAll("[", "").replaceAll("\"", " ").replaceAll("]", " ").replaceAll("{", " ").replaceAll("}", " ").replaceAll(",", "<br>").replaceAll("<script>", "").replaceAll("</script>", "");
    return cleaned;
};