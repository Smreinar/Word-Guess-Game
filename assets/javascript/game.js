//This JS File is linked to index.html for Psychic Game
let computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//global varibles
var computerAnswer = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];

let guessedLetters = [];
//console.log("Computer Guess: " + computerAnswer)
//functions for each
function computerAnswerFun() {
    document.getElementsByClassName('.computer').style.display = "none";
};

//reset
function resetComputerAnswer(){
    computerAnswer = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    
}
//computer guess

//user guess 
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (userGuess === computerAnswer) {
        console.log("correct")
        resetComputerAnswer()
        
    }
    console.log(userGuess)
    // console.log("User Guess: " + userGuess)
    
}

// if guess false

//if guess true