//constructor for the word object
const Letter = require("./letter.js");


function Word(){
    this.wordChoices = ["MURDER, SHE WROTE", "ANGELA LANSBURY", "SETH HAZLITT", "AMOS TUPPER", "JESSICA FLETCHER", "MORT METZGER", "ANDY BROOM", "HARRY MCGRAW", "GRADY FLETCHER"];
    this.word = "";
    this.pickWord = function(){
        console.log("this ran");
        this.word = this.wordChoices[Math.floor(Math.random()*this.wordChoices.length)+1];
        console.log("word", this.word);        
    };
    this.checkWin = function(){

    };
    this.addLetters = function(character){
        myLetter = new Letter(character);
        return myLetter;
    };
    this.displayWord = function(anArray){
        var s = "";
        for(var i = 0; i<anArray.length; i++){
          s+= anArray[i].displayLetter() + " ";
        };
        console.log(s);        
    };
};



module.exports = Word;





