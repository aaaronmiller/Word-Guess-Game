
// define wordbank
var wordBank = ["shark", "whale", "orca", "sculpin", "tuna", "snail", "crab", "ray"];

//define global variables       
        var wins = 0;
        var loss = 0;
        var guesses = 0;
        var displayWord = "";
        var badLetters = "";

//define function to grab a random word
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function validate(strValue) {
  var objRegExp  = /^[a-z]+$/;
  return objRegExp.test(strValue);
}


//  function newWord() {
        var guessMe = wordBank[Math.floor(Math.random() * wordBank.length)];
        // alerts for testing
        // alert(guessMe);
        // alert(wordBank);
        // };

//display our word to us
        // newWord();
        document.getElementById("wordToGuess").innerHTML = guessMe;
//convert word to blank spaces

        for (var j = 0; j <= guessMe.length -1; j++ ) {
            var displayWord = displayWord + "_";
        }

        document.getElementById("text").innerHTML = displayWord;

//capture a key
document.onkeyup= function(event){
    // test if input is a letter
    inputKey = event.key;
    var userGuess = inputKey.toLowerCase();
    isLetter = validate(userGuess);
    if(isLetter === true && userGuess.length <2)  
    {
        
        // compare user input to correct answer;
        for (var i = 0; i <= guessMe.length -1; i++) {
        var didWin=0;
        if(userGuess===guessMe.charAt(i)){
            //  alert("Win!"),
             //correct letter!
             guesses=guesses+1;
             wins = wins + 1;
             didWin = 1;
                document.getElementById("wins").innerHTML = "Correct Guesses  : " + wins;
                document.getElementById("guesses").innerHTML = "Total Guesses  : " + guesses;
             //replace blank with letter
               function rep() {
                   displayWord = setCharAt(displayWord, i, userGuess);
                //   alert(displayWord);
                  document.getElementById("text").innerHTML = displayWord;

                }

                function setCharAt(displayWord,index,chr) {
                     if(index > displayWord.length-1) return displayWord;
                     return displayWord.substr(0,index) + chr + displayWord.substr(index+1);
                }
            rep();
            document.getElementById("text").innerHTML = displayWord;

//test if we have the whole world complete
                if(displayWord==guessMe) {
                    alert("You FUCKING WIN!");
                    wins = 0;
                    loss = 0;
                    guesses = 0;
                    displayWord = "";
                    badLetters = ""; 
                    guessMe = wordBank[Math.floor(Math.random() * wordBank.length)];
                    for (var j = 0; j <= guessMe.length -1; j++ ) {
                        displayWord = displayWord + "_";
                    }
                    document.getElementById("text").innerHTML = displayWord;
                    document.getElementById("badGuesses").innerHTML = "";
                    document.getElementById("wordToGuess").innerHTML = guessMe;
                    document.getElementById("wins").innerHTML = "Correct Guesses  : ";
                    document.getElementById("guesses").innerHTML = "Total Guesses  : ";
                    document.getElementById("losses").innerHTML = "Incorrect Guesses: ";




                    

                    break;
                 

                }
                break;     

        }
        
            if(didWin===0 && i===guessMe.length-1) 
                {
                // alert(didWin + "" + i + " NO!"),
                loss = loss + 1;
                guesses = guesses + 1;
                document.getElementById("losses").innerHTML = "Incorrect Guesses: " + loss;
                document.getElementById("guesses").innerHTML = "Total Guesses  : " + guesses;
                badLetters = badLetters + userGuess +" ";
                document.getElementById("badGuesses").innerHTML = badLetters;
                break;
                } 
    }    
    }
//go back and test another letter
}
