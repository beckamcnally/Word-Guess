var wordBank = ["car", "shea", "doggy", "bensan"]


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



function startGame() {
    intro.setAttribute("class", "hidden");
    gameBox.removeAttribute("class", "hidden");
    interval = setInterval(clock, 1000) //added set interval to a var
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
        var letters = currentWord[index];
        var gameBoxli = document.createElement("li")
        gameBoxul.appendChild(gameBoxli)
        // gameBox.textContent = letters
        console.log(letters)
    }    
}

function gameOver() {
    clearInterval(interval)
} // added gameOver function 


// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses
function displayCorrect(){
  var userGuess = userInput.value;
  
  
    // if ()
}

function clock(){
    time--;
    timeleft.textContent = time;
    timeleft.setAttribute("class", "hidden"); // added so that if the game ends the clock gets hidden
    

    if (time <= 0) {
        endGame ()
    } //added so that if the time runs out it will end the game
}

guessBtn.addEventListener("click", displayCorrect); 
startBtn.addEventListener("click", startGame);


// moved pseudo code to corresponding functions 

