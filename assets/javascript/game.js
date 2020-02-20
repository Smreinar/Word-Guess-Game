//This JS File is linked to index.html for Psychic Game
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
 
let wins = []
  
let computerGuess = Math.floor(Math.random() * alphabet.length);
 console.log(computerGuess)
  //Dom manipulation
let userGuess = document.getElementsByClassName("yourGuess");
let winner = document.getElementsByClassName("wins");
let lost = document.getElementsByClassName("losses");
let guesses = document.getElementsByClassName("guessesLeft");
  // Setup event function for key press
document.addEventListener('keypress', (event) => {
    
let keyword = String.fromCharCode(event.keyCode);
    
    if (yourGuess.indexOf(keyword) > -1) {
        winner.push(keyword);

        wins[computerGuess.indexOf(keyword)] = keyword;
        winner[0].innerHTML = wins.join(+ 1);
    };
});
