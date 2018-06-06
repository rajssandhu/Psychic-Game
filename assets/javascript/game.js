var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = []

function startOver (){
    guessesLeft = 10;
    guessesSoFar = []
    computerLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log (computerLetter)
}

startOver();

function newLetter () {
    guessesSoFar = []
    guessesLeft = 10;
    computerLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log (computerLetter)
}

document.onkeyup = function(event){
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guessesSoFar.indexOf(userGuess) === -1){
        guessesSoFar.push(userGuess);
    }
    else {
        guessesLeft++
    }

    if (userGuess === computerLetter) {
        wins++;
        alert ("You may just be a Psychic!")
        newLetter();
    }

    else {
        guessesLeft --;
        userGuess = guessesSoFar;
        alert ("Try Again")
    }
    if (guessesLeft === 0) {
        alert ("You are not a not a Psychic :(")
        losses++
        startOver()
    }

document.querySelector('#wins').innerHTML = "Wins: " + wins;
document.querySelector('#losses').innerHTML = "Losses: " + losses;
document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector('#guessesSoFar').innerHTML = "Your Guesses so far: " + guessesSoFar ;

};
    




