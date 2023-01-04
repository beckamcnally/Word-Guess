var wordBank = ["car", "shea", "doggy", "bensan"]

var turnsLeft = document.getElementById("turnsLeft")
var guessedLetters = document.getElementById("guessedLetters")
var lossField = document.getElementById("lossField");
var winField = document.getElementById("winField");
var guessBtn = document.getElementById("guessbtn")
var userInput = document.getElementById("userInput")
var intro = document.querySelector(".intro-box");
var startBtn = document.querySelector(".start-btn");
var gameBox = document.querySelector(".game-box");
var timeleft = document.querySelector(".time-left");
var resultScreen = document.querySelector(".result-screen");
var currentWord = "";
var time = 150;
var interval;
var letters;
var allowedGuesses = 10

var wins = localStorage.getItem("wins", wins);
var losses = localStorage.getItem("losses", losses);


function startGame() {
    intro.setAttribute("class", "hidden");
    gameBox.removeAttribute("class", "hidden");
    turnsLeft.textContent = allowedGuesses
    interval = setInterval(clock, 1000)
    getWord();

    localStorage.setItem("losses", losses)
    localStorage.setItem("wins", wins)

    // var cumulativeW = localStorage.getItem("wins", wins);
    // var cumulativeL = localStorage.getItem("losses", losses);
}

// Pull up a word
function getWord() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentW = this.wordBank[index];
    currentWord = currentW.split('');
    displayBlanks()
}

// convert the word to an array
// iterate over index to return # of letters
// # letters => spaces for letters
function displayBlanks(userGuess) {
    var gameBoxul = document.createElement("ul")
    gameBox.appendChild(gameBoxul)
    var letterArray = [];


    for (var index = 0; index < currentWord.length; index++) { //This creates the spaces for the characters
        letters = currentWord[index];
        var gameBoxli = document.createElement("li")
        gameBoxul.appendChild(gameBoxli)
        letterArray = letters.split("")



        // console.log(letterArray[0])
        // console.log(userGuess === letterArray[0])
        // if (userGuess === letterArray[0]) {
        //     gameBoxli.textContent = letterArray[0];

    }


    // gameBoxli.textContent = letters

    console.log(currentWord)

    // console.log(typeof (letters))
}


function gameOver() {
    clearInterval(interval)
    timeleft.setAttribute("class", "hidden");
    resultScreen.removeAttribute("class", "hidden");
    gameBox.setAttribute("class", "hidden");

    if (time < 0) {
        losses++;
        timeleft.textContent = "0";
    }


    winField.textContent = cumulativeW;
    lossField.textContent = cumulativeL;



}

// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses

function printWrong(e) {
    console.log(e)
    userKUp = e.key;
    guessedLetters.textContent = userKUp
}; // need to figure out how to get it to add to the letters instead of just show the

document.addEventListener("keydown", function (event) {
    allowedChars = "qwertyuiopasdfghjklzxcvbnm"
    var userGuess = event.key.toLowerCase();
    var charList = allowedChars.split('')

    // console.log(event.key.includes(allowedChars))
    if (userGuess.includes(allowedChars)) {
        console.log('yep')
    }
    console.log(userGuess)


    if (currentWord.includes(userGuess)) {
        console.log("yes")
    } else {
        allowedGuesses--;
        turnsLeft.textContent = allowedGuesses

        document.addEventListener("keyup", printWrong)
        if (allowedGuesses === 0) {
            losses++;
            gameOver()
        } // added so that if you run out of lives the game ends
    }

    //     var winCondition = false;
});

function clock() {
    time--;
    timeleft.textContent = time;

    if (time === 0) {
        gameOver()
    } //added so that if the time runs out it will end the game
}


startBtn.addEventListener("click", startGame);



