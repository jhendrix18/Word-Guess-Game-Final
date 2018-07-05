//  reference to dom elms. ============================================================================================================

var $newGameButton = document.getElementById('getnextquote');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesLeft = document.getElementById('guesses-left');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');


// Global Variables ================================================================================================================================

var wordBank = ['michigan', 'indiana', 'california', 'im really hungry'];
var wins = 0;
var losses = 0; 
var guessesLeft = 0;
var gameRunning = false;
var pickedWord = '';
var pickedwordPlaceholderArr = []; /*set as an array to set a type to the picked placeholder, otherwise wouldn't understand what type of push*/
var guessedLetterBank = [];
var incorrectLetterBank = [];

// Functions:================================================================================================================================

function newGame() {
    // Resets all info for a new game. 
    gameRunning = true;
    guessesLeft = 8;
    guessedLetterBank = [];
    incorrectLetterBank = [];
    pickedwordPlaceholderArr = [];


    // picks a new word for our game
    pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // create placeholders out of new picked word. Also, for loop written to identify if the character is a space, if so, push an empty
    // space, if not, push an underscore or create an underline for the letter space
    //QUESTION- why won't mine work? For some reason it wont push a space, seems to create an underscore for everything

    for (var i = 0; i < pickedWord.length; i++) {
        if(pickedWord[i] === ' ') {
            pickedwordPlaceholderArr.push(' ');
        } else {
            pickedwordPlaceholderArr.push('_ ');
        }
    }

    // Write all new game info to the DOM. Still not entirely sure what this means.... need to reseatch DOM elements. 
    $guessesLeft.textContent = guessesLeft;
    $placeholders.textContent = pickedwordPlaceholderArr.join('');
    $guessedLetters.textContent = incorrectLetterBank;
}


// Write letterGuess function, which takes in the letter the user guesses and sees if it is in the selected word
//Two criteria- 1) is the gsame currently running? Don't want the logic running if we're not in the game
// 2) has my letter already been guessed? Don't want to penalize users for mistaken keystrokes. 
// Notes: if indexOf(letter) returns a -1, it means that letter is not in the letter bank (word)

function letterGuess(letter) {
    console.log(letter);

    if (gameRunning === true && guessedLetterBank.indexof(letter) === -1) {
        // run game logic
    } 
    else {
        if (!gameRunning) {
            alert ("The game isn't running, click on new game button to start a new game");
        } else {
            alert ("You've already guessed that latter, try another one!")
        }
    }
}

    $newGameButton.addEventListener('click', newGame);