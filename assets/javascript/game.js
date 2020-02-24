//This JS File is linked to index.html for Psychic Game
let computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//global varibles
var computerAnswer = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
var guessedLetters = [];
var win = 0;
var lost = 0;
var lives = 9;



//console.log("Computer Guess: " + computerAnswer);
//functions for each
function lettersGuessed() {
    document.getElementsById("userGuesses").innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ')
}

function computerAnswerFun() {
    document.getElementsByClassName('.computer').style.display = "none";
};

//reset functions
function resetComputerAnswer(){
    computerAnswer = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    
}

function resetRound(){
    guessedLetters = [];
    lives = 9;
}

//Dom
let guessDom = document.getElementsByClassName("userGuesses");
let livesDom = document.getElementById("guessesLeft");



//user guess 
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var wins = win
     
    if (userGuess === computerAnswer) {
        wins++;
        alert("Your Guess '" + userGuess + "' Was Correct");
        guessedLetters.push(userGuess);
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        
        resetComputerAnswer();
           
    } if (userGuess != computerAnswer){
        lives--;
        guessedLetters.push(userGuess);
        guessDom[0].innerHTML = guessedLetters.join(' ');
        livesDom.innerHTML = lives;
    }

   


    
    
    console.log(userGuess);
    // console.log("User Guess: " + userGuess);
    
}

// if guess false

//if guess true