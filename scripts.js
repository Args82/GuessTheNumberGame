console.log('loaded');

// steps: user guess number
// handler form to enter guess
//display higher or lower or you win

var guessNumberGame = {};


guessNumberGame.makeGuess = function(guess){
  if(guess == this.answer){
  this.winGame();
}else{
  this.promptUser(guess);
}
};
guessNumberGame.promptUser = function(guess){
  if(guess > this.answer){
    var message = "You guessed " + guess + ". Guess Lower! ";
    this.$promptArea.text(message);
  } else {
    var message = "You guessed " + guess + ". Guess Higher! ";
    this.$promptArea.text(message);
  }
};

guessNumberGame.winGame = function(){
  this.$promptArea.text('YOU WIN!');
};

guessNumberGame.guessFormHandler = function(){
  var scope = this;
    this.$guessForm.on('submit', function(e){
      e.preventDefault();
      var guessInput = $(this).find('input');
      var guess = guessInput.val();
      scope.makeGuess(guess);

    });
};
guessNumberGame.init = function($guessForm, $promptArea){
  //init = initialize
  var possibleAnswerMax = 100;
  this.answer = Math.floor(Math.random()*possibleAnswerMax);
  this.$guessForm = $guessForm;
  this.$promptArea = $promptArea;
  this.guessFormHandler();
  //.Math floor cuts off decimal
};



//********
//using
$(function(){
  var $guessForm = $('#guess-handler');
  var $promptArea = $('#user-prompt');
  guessNumberGame.init($guessForm, $promptArea);
});
