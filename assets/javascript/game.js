var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;

resetGame();
game();

document.onkeyup = function(event) { // taking user's input
  var userGuess = event.key;
  if (userGuess === answer) { // if their guess is right
    win();
    alert("You have won!");
  } else if (guessesLeft === 1) { // if their guess is wrong and they are out of guesses
    lost();
    alert("You have lost!"); 
  } else { // if their guess is wrong
    wrong(userGuess);
  }

  game();
}

function game() {
    var alreadyGuessed = document.getElementById("alreadyGuessed");
    var lossesP = document.getElementById("losses"); //lossesP because of <p> element
    var winsP = document.getElementById("wins"); 
    var guessLeft = document.getElementById("guessesLeft");
  winsP.innerHTML = wins; 
  lossesP.innerHTML = losses; // Googled the error: need to have a P because it is within a paragraph element.
  guessLeft.innerHTML = guessesLeft;
  alreadyGuessed.innerHTML = guessedLetters.join("  "); // .join learned from W3 schools.  This adds the letters to the other ones instead.  Kind of like our append tool without adding a div or like parseInt without numbers
}


function wrong(letter) { // calling function to decrement guessesLeft by 1 each time guess is wrong
    guessesLeft--; // decrement guesses by 1
    guessedLetters.push(letter); //.push learned from lecture
  }

function win() { //calling function for when the user wins
  wins++;
  resetGame();
}

function lost() { // calling function for when guesses are up
  losses++;
  resetGame();
}

function resetGame() {
  guessesLeft = 10;
  guessedLetters = [];
  answer = letters[Math.floor(Math.random() * letters.length)];
  // console.log("Letter to guess: " + answer);
}

