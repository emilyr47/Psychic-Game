//errors:
//odd message appearing under Wins and Losses
//game won't reset until guesses are -1


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
  } else if (guessesLeft === -1) { // if their guess is wrong and they are out of guesses
    lost();
    alert("You have lost!"); 
  } else { // if their guess is wrong
    wrong(userGuess);
  }

  game();
}

function game() {
    var alreadyGuessed = document.getElementById("alreadyGuessed");
    var losses = document.getElementById("losses"); 
    var wins = document.getElementById("wins"); 
    var guessLeft = document.getElementById("guessesLeft");
  wins.innerHTML = wins; // These aren't showing up right
  losses.innerHTML = losses; // These aren't showing up right
  guessLeft.innerHTML = guessesLeft;
  alreadyGuessed.innerHTML = guessedLetters.join("  "); // "".join learned from W3 schools.  This adds the letters to the other ones instead of having to append or not parseInt
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
  console.log("Letter to guess: " + answer); // using for testing TAKE OUT LATER
}

