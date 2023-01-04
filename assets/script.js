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
    timeleft.setAttribute("class", "hidden"); 
    clearInterval(interval)
} 


// variable to hold our word
// input submit
// input = current word array
// input === display the letter
// !== add input to guesses
userInput.addEventListener("keydown", function (event) {
    console.log (event)
var userGuess =  event.key.toLowerCase();;
  console.log(userGuess)

  if (currentWord.includes(userGuess)) {
    console.log("yes")
    userInput.textContent= ""
  } else {
    userInput.textContent= ""
    guessedLetters.textContent = userGuess
  }

//     var winCondition = false;
//   


});

function clock(){
    time--;
    timeleft.textContent = time;
    
    

    if (time <= 0) {
        endGame ()
    } //added so that if the time runs out it will end the game
}

// userInput.addEventListener("keydown", displayCorrect(event){
//     console.log (event)
// });
// guessBtn.addEventListener("click", displayCorrect); 
startBtn.addEventListener("click", startGame);


// moved pseudo code to corresponding functions 

