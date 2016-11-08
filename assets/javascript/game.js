//Declare variables
var alphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var userGuess = [];
var userInput
var randomLetter;
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var randomLetter = alphaArray[Math.floor(Math.random() * alphaArray.length)];
console.log(randomLetter);

document.getElementById("wins").innerHTML = wins + 1*0;
document.getElementById("losses").innerHTML = losses + 1*0;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

	document.onkeyup = function(event) {
		
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
			for (var i = 0; i < 10; i++); {
				userGuess.push(userInput);
			}
				
					if (userInput != randomLetter) {
						for (var i = 0; i < 10; i++); {
							document.getElementById("userGuess").innerHTML + ", ";
						}

						for (var i = guessesLeft; i > 0; i++); {
							document.getElementById("guessesLeft").innerHTML - 1;
						}
					}

					if (guessesLeft === 0) {
						for (var i = 0; i < 10; i++); {
							document.getElementById("losses").innerHTML + 1;
						}

					}

					if (userInput === randomLetter) {
						for (var i = 0; i < 10; i++); {
							document.getElementById("wins").innerHTML + 1;
						}

						//function gameReset(var userGu)
					}
			}
	}