//constructor for letter object

function Letter(letter){
    this.value = letter.toUpperCase();
    this.isGuessed = false;
    this.checkLetter = function(userInput){
        if(userInput.toUpperCase() === this.value){
            this.isGuessed = true;
            console.log(this.isGuessed);
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
