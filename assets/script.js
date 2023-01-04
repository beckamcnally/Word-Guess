var wordBank = ["car", "shea", "doggy", "bensan"]

var guessedLetters = document.getElementById("guessedLetters")
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

function startGame() {
    intro.setAttribute("class", "hidden");
    gameBox.removeAttribute("class", "hidden");
    interval = setInterval(clock, 1000) 
    getWord();
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
function displayBlanks() {
var gameBoxul = document.createElement("ul")
gameBox.appendChild(gameBoxul)

    for (var index = 0; index < currentWord.length; index++) {
        letters = currentWord[index];
        var gameBoxli = document.createElement("li")
        gameBoxul.appendChild(gameBoxli)
        // gameBox.textContent = letters
        console.log(currentWord)
    }    
}

function gameOver() {
    clearInterval(interval)
    timeleft.setAttribute("class", "hidden"); 
    resultScreen.removeAttribute("class", "hidden");
    gameBox.addAttribute("class", "hidden"); // not hiding
    
    if (time < 0){
        timeleft.textContent = "0";
    }
} 

// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses

function printWrong(e) {
    console.log(e)
    userKUp =  e.key;
    guessedLetters.textContent =  userKUp 
}; // need to figure out how to get it to add to the letters instead of just show the

document.addEventListener("keydown", function (event) {
   
var userGuess =  event.key.toLowerCase();
  console.log(userGuess)
  if (currentWord.includes(userGuess)) {
    console.log("yes")
  } else {
    allowedGuesses --;

    document.addEventListener("keyup", printWrong)
    if (allowedGuesses === 0){
        gameOver()
    } // goes to game over but still lets you guess
  }

//     var winCondition = false;
});

function clock(){
    time--;
    timeleft.textContent = time;
   
    if (time === 0) {
        gameOver()
    } //added so that if the time runs out it will end the game
}

// userInput.addEventListener("keydown", displayCorrect(event){
//     console.log (event)
// });
// guessBtn.addEventListener("click", displayCorrect); 
startBtn.addEventListener("click", startGame);

// moved pseudo code to corresponding functions 

