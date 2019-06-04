
// define wordbank
var wordBank = ["shark", "whale", "orca", "sculpin", "tuna", "snail", "crab", "ray"];

//define global variables       
        var wins = 0;
        var loss = 0;
        var guesses = 0;
        var displayWord = "";
        var badLetters = "";
        var isUsed = 0;
        var isLetter = true;
        var guessWord = " ";


//test if input is a letter
function validate(strValue) {
  var objRegExp  = /^[a-z]+$/;
  return objRegExp.test(strValue);
}

//test if letter is new
function isNewLetter(input) {
    //test if a bad letter is already used
    for (var k = 0; k <= badLetters.length; k++) {
        if(input === badLetters.charAt(k)){
        isUsed = 1;
        return false;
        break;
        }
        else {
            isUsed = 0;
        }
    }
    if (isUsed === 0) {
//test if letter is correct and already used
for (var l = 0; l <= displayWord.length; l++) {
        if(input === displayWord.charAt(l)){
            isUsed = 1;
            return false;
            break;
        }
        else {
            isUsed = 0;
        }
    }
        return true;
    }
}


var guessMe = wordBank[Math.floor(Math.random() * wordBank.length)];

//display our word to us
        document.getElementById("wordToGuess").innerHTML = guessMe;
//convert word to blank spaces

        for (var j = 0; j <= guessMe.length -1; j++ ) {
            var displayWord = displayWord + "_ ";
        }

        document.getElementById("text").innerHTML = displayWord;

//capture a key
document.onkeyup= function(event){
// test if input is a letter
    inputKey = event.key;
    var userGuess = inputKey.toLowerCase();
    isLetter = validate(userGuess);
    newKey = isNewLetter(userGuess);
    loop = 0;
// if userGuess.length >1 then user pressed a functino key and not a letter
    if(isLetter === true && userGuess.length <2 && newKey === true)  
    {   
// compare user input to correct answer;
        for (var i = 0; i <= guessMe.length -1; i++) {
        didWin=0;
        if(userGuess===guessMe.charAt(i)){
             guesses=guesses+1;
             wins = wins + 1;
             didWin = 1;
                
                document.getElementById("wins").innerHTML = "Correct Guesses  : " + wins;
                document.getElementById("guesses").innerHTML = "Total Guesses  : " + guesses;
             //replace blank with letter
               function rep() {
                if (i === 0) {
                displayWord = setCharAt(displayWord, i, userGuess);
            }
                else {displayWord = setCharAt(displayWord, (i + i), userGuess)};
                ;
                loop = loop + 1;
                // alert(i);
                // alert(loop);
                // alert(guessWord);
                document.getElementById("text").innerHTML = displayWord;

                }

                function setCharAt(displayWord,index,chr) {
                     if(index > displayWord.length-1) return displayWord;
                     return displayWord.substr(0,index) + chr + displayWord.substr(index+1);
                }

               function repTwo() {
                guessWord = setCharAtTwo(guessWord, i, userGuess);
                }

                function setCharAtTwo(guessWord,index,chr) {
                     if(index > guessWord.length-1) return guessWord;
                     return guessWord.substr(0,index) + chr + guessWord.substr(index+1);
                }
            rep();
            repTwo();
            // alert(guessWord);
            document.getElementById("text").innerHTML = displayWord;

//test if we have the whole world complete
                if(guessWord==guessMe) {
                    alert("You FUCKING WIN!");
                    wins = 0;
                    loss = 0;
                    guesses = 0;
                    displayWord = "";
                    badLetters = "";
                    guessWord = "";
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
        //not a correct guess
            if(didWin===0 && i===guessMe.length-1) 
                {
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
