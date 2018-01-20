const inquirer = require('inquirer');
const Word = require('./word.js');
const fs = require('fs');
var solution = "";
var guesses = [];
var remainingGuesses = 20;
let chosenWord = new Word;
var letterArray = [];

function startGame(){
inquirer
.prompt([
    {
        type:'confirm',
        name:'startGame',
        message:"Would you like to start playing Murder, She Wrote Hangman?"
    }
])
.then(function(answers){
    if(answers.startGame){
        chosenWord.pickWord();
        solution = chosenWord.word;
        console.log("word: ", chosenWord.word);   
        for(var i = 0; i<chosenWord.word.length; i++){
        var k = chosenWord.addLetters(chosenWord.word[i]);  
        letterArray.push(k);
        };   
        chosenWord.displayWord(letterArray);        
        Ask();
    }
    else{
        console.log("An error has occurred. Please start the game over.");
    }
});
};

function Ask(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'letterGuess',
            message: "What letter would you like to guess?"
          }
    ])
    .then(function(answer){
        console.log(`You guessed ${answer.letterGuess}. \nYou have ${remainingGuesses} guesses left.`);
        chosenWord.displayWord(letterArray);
        guesses.push(answer.letterGuess);
        remainingGuesses--;
        console.log(letterArray);
        if(answer.letterGuess&&remainingGuesses>0){
            Ask();
        }
        else if (remainingGuesses===0){
            console.log(`Game over! You have 0 guesses remaining. \n Would you like to play again?`);
            startGame();
        }
        else{
            console.log("Choose a letter.");
        }
    });
};

startGame();