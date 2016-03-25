console.log('loaded');

// steps: user guess number
// handler form to enter guess
//display higher or lower or you win

var guessNumberGame = {};

//create method for ansewer
guessNumberGame.init = function($guessForm, $promptArea){
  //init = initialize
  var possibleAnswerMax = 100;
  this.answer = Math.floor(Math.random()* possibleAnswerMax);
  this.$guessForm = $guessForm;
  this.$promptArea = $promptArea;
  this.guessFormHandler();
  //.Math floor cuts off decimal
};
guessNumberGame.makeGuess = function(guess){
  if(guess == this.answer){
    this.winGame();
  }else{
    this.tryAgain();
  }
};
guessNumberGame.winGame = function(){
  this.$promptArea.text('You Win!');

}
guessNumberGame.tryAgain = function(){
  this.$promptArea.text('Guess Again!');
}

guessNumberGame.guessFormHandler = function(){
  var scope = this;
    this.$guessForm.on('submit', function(e){
      e.preventDefault();
      var guessInput = $(this).find('input')
      var guess = guessInput.val();
      scope.makeGuess(guess);

    })
};

//make guess function


//********
//using
$(function(){
  var $guessForm = $('#guess-handler')
  var $promptArea = $('#user-prompt')
  guessNumberGame.init($guessForm, $promptArea);

});
