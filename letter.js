//constructor for letter object

function Letter(letter){
    this.value = letter.toUpperCase();
    this.isGuessed = false;
    //this method could be a prototype instead
    this.checkLetter = function(userInput){
        if(userInput === this.value){
            this.isGuessed = true;
        }
        else{
            this.isGuessed = false;
        }
    };
    this.displayLetter = function(){
        if(this.isGuessed){
            return this.value;
        }
        else{
            return "__";
        }
    };
};

module.exports = Letter;
