//constructor for the word object
const Letter = require("./letter.js");
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function Word(){
    this.wordChoices = ["MURDER, SHE WROTE", "ANGELA LANSBURY", "SETH HAZLITT", "AMOS TUPPER", "JESSICA FLETCHER", "MORT METZGER", "ANDY BROOM", "HARRY MCGRAW", "GRADY FLETCHER"];
    this.word = "";
    this.truthiness = 0;            
    this.pickWord = function(){
        console.log("this ran");
        this.word = this.wordChoices[Math.floor(Math.random()*this.wordChoices.length)+1];
        console.log("word", this.word);        
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
    this.checkWin = function(){
        if(myLetter.isGuessed === true){
            this.truthiness++;
        }
     };
};



module.exports = Word;





