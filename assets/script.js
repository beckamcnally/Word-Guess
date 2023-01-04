var wordBank = ["car", "shea", "doggy", "bensan"]


var guessBtn = document.getElementById("guessbtn")
var userInput = document.getElementById("userInput")
var intro = document.querySelector(".intro-box");
var startBtn = document.querySelector(".start-btn");
var gameBox = document.querySelector(".game-box");
var timeleft = document.querySelector(".time-left");
var resultScreen = document.querySelector(".result-screen");
var currentWord = "";



function startGame() {
    intro.setAttribute("class", "hidden");
    gameBox.removeAttribute("class", "hidden");

    getWord();
   
}

function getWord() {

    var index = Math.floor(Math.random() * wordBank.length);
        currentW = this.wordBank[index];
        console.log(currentW);

    currentWord = currentW.split('');
    console.log(currentWord);
    displayBlanks()
}

function displayBlanks() {
var gameBoxul = document.createElement("ul")
gameBox.appendChild(gameBoxul)

    for (var index = 0; index < currentWord.length; index++) {
        var letters = currentWord[index];
        var gameBoxli = document.createElement("li")
        gameBoxul.appendChild(gameBoxli)
        // gameBox.textContent = letters
        console.log(letters)
    }    
}

function displayCorrect(){
  var userGuess = userInput.value;
  console.log(userGuess)
    // if ()
}

guessBtn.addEventListener("click", displayCorrect); 
startBtn.addEventListener("click", startGame);

// Pull up a word
// convert the word to an array
// iterate over index to return # of letters
// # letters => spaces for letters
// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses
// ???
// if time runs out => game over
// localstorage for wins and losses


