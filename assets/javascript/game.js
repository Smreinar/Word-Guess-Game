//This JS File is linked to index.html for Psychic Game
let computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//global varibles
var computerAnswer = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
var guessedLetters = [];
var win = 0;
var lost = 0;
let lives = 9;



//console.log("Computer Guess: " + computerAnswer);
//functions for each

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
let lossDom = document.getElementById("losses");
let winDom = document.getElementById("wins")

console.log(computerAnswer)

//user guess 
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
     
    if (userGuess != computerAnswer){
        lives--;
        guessedLetters.push(userGuess);
        guessDom[0].innerHTML = guessedLetters.join(' ');
        livesDom.innerHTML = lives;
        }

        if (userGuess === computerAnswer) {
        win++;
        winDom.innerHTML = win;
        livesDom.innerHTML = '9';
        guessDom[0].innerHTML = [];
        resetRound();
        resetComputerAnswer();
        }
        if (lives == 0) {
            lost++;
            lossDom.innerHTML = lost;
            livesDom.innerHTML = '9';
            guessDom[0].innerHTML = [];
            resetRound();
            resetComputerAnswer();
        }

   


    
    
    console.log(userGuess);
    // console.log("User Guess: " + userGuess);
    
}

// if guess false

//if guess true