//Declare variables
	var alphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var userGuess = [];
	var userInput;
	var randomLetter;
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;

	//Computer selects random letter from array
	var randomLetter = alphaArray[Math.floor(Math.random() * alphaArray.length)];
	console.log(randomLetter);

	document.getElementById("wins").innerHTML = 0;
		if (userInput === randomLetter) {
			for (var l = 0; l < 10; l++); {
				document.getElementById("wins").innerHTML + 1;
				console.log(userInput);
			}

	document.getElementById("losses").innerHTML = 0;
		if (guessesLeft === 0) {
			for (var k = 0; k < 10; k++); {
				document.getElementById("losses").innerHTML + 1;
		}
	document.getElementById("guessesLeft").innerHTML = 9;
		if (userInput != randomLetter) {
			// for (var i = 0; i < 10; i++); {
			// 	document.getElementById("userGuess").innerHTML + ", ";
			// }

			for (var j = guessesLeft; j > 0; j++); {
				document.getElementById("guessesLeft").innerHTML - 1;
			}
		}

	//User selects key
	document.onkeyup = function(event) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
			document.getElementById("userGuess").innerHTML = userInput;
	}

	function pushToArray() {
		userGuess.push(userInput);
	}

	document.getElementById("userGuess").innerHTML + ", ";			
				

				// if (guessesLeft === 0) {
				// 	for (var k = 0; k < 10; k++); {
				// 		document.getElementById("losses").innerHTML + 1;
				// 	}

				// }

		// 		if (userInput === randomLetter) {
		// 			for (var l = 0; l < 10; l++); {
		// 				document.getElementById("wins").innerHTML + 1;
		// 			}

		// 			//function gameReset(var userGu)
		// 		}
		// }}
