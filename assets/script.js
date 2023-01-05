var wordBank = ["car", "shea", "frogs", "games"]

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
var gameBoxul = document.createElement("ul")

var currentWord = "";
var time = 150; 
var interval;
var letters;
var userGuess;
var wrongArray = [];
var allowedGuesses = 10;
var allowedChars = "qwertyuiopasdfghjklzxcvbnm"
var charList = allowedChars.split('');
var correctG = [];
var wins = 0;
var losses = 0;


function startGame() {
    intro.setAttribute("class", "hidden");
    gameBox.removeAttribute("class", "hidden");
    turnsLeft.textContent = allowedGuesses
    interval = setInterval(clock, 1000)
    losses = localStorage.getItem("losses", losses)
    wins = localStorage.getItem("wins", wins)
    getWord();

}

// Pull up a word
function getWord() {
    var index = Math.floor(Math.random() * wordBank.length);
    currentW = this.wordBank[index];
    currentWord = currentW.split('');
    displayBlanks();

}

// convert the word to an array
// iterate over index to return # of letters
// # letters => spaces for letters
function displayBlanks() {
    gameBox.appendChild(gameBoxul)
    var letterArray = [];

    document.addEventListener("keydown", function (event) {
        userGuess = event.key.toLowerCase();
        
        if (charList.includes(userGuess)) {
            answerChecker()
            console.log("the userGuess is " + userGuess)
        } else {
            return;
        }
    });

    for (var index = 0; index < currentWord.length; index++) { //This creates the spaces for the characters
        letters = currentWord[index];
        var gameBoxli = document.createElement("li")
        gameBoxul.appendChild(gameBoxli)  
    } 
    letterArray = letters.split("")
}


function gameOver() {
    clearInterval(interval)
    timeleft.setAttribute("class", "hidden");
    resultScreen.removeAttribute("class", "hidden");
    gameBox.setAttribute("class", "hidden");

    if (time < 0) {
        timeleft.textContent = "0";
    }


    localStorage.setItem("losses", losses)
    localStorage.setItem("wins", wins)

    winField.textContent = wins
    lossField.textContent = losses
}

// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses
function printWrong(e) {
    userKUp = e.key;
    wrongArray.push(userKUp)
    guessedLetters.textContent = wrongArray.toString(" ")
}; 

// check userGuesses and handles them accordingly
function answerChecker(){
    console.log("made it to the checker")

    if (currentWord.includes(userGuess)) {
        
        what2Print();
        correctG.push(userGuess)

        if (currentWord.length === correctG.length){
            wins ++;
            gameOver()
        }
    } else {
        allowedGuesses--;
        turnsLeft.textContent = allowedGuesses
       
        document.addEventListener("keyup", printWrong)
        if (allowedGuesses === 0) {
            losses ++;
            gameOver()
        } 
    }  
}

// tells answerChecker what to display for correct answer
function what2Print(){
    var listElList = document.querySelectorAll("li")
if (userGuess === currentWord[0]) {
    listElList[0].textContent = currentWord[0]
} else if (userGuess === currentWord[1]) {
    listElList[1].textContent = currentWord[1]
} else if (userGuess === currentWord[2]) {
    listElList[2].textContent = currentWord[2]
} else if (userGuess === currentWord[3]) {
    listElList[3].textContent = currentWord[3]
} else if (userGuess === currentWord[4]) {
    listElList[4].textContent = currentWord[4]
} else if (userGuess === currentWord[5]) {
    listElList[5].textContent = currentWord[5]
} else { 
    return;
}
}

// makes the set interval show and if the time runs out it will end the game
function clock() {
    time--;
    timeleft.textContent = time;

    if (time === 0) {
        losses ++;
        gameOver()
    } 
}

startBtn.addEventListener("click", startGame);



