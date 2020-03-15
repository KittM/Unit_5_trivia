$(document).ready(function () {
     
     //event listeners

})

//variables

//questions

// answers

//intialize game
gameStart: function(){
     //reset results
     trivia.currentSet = 0;
     trivia.correct = 0;
     trivia.incorrect = 0;
     trivia.unanswered = 0;
     clearInterval(trivia.timerId);

// show game section
$('#game').show();

//empty results
$('#results').html('');

// timer
$('#timer').text(trivia.timer);

// hide start button
$('#start').hide();

//time remaining
$('#start').show();

//kickstart
trivia.question();

},

//question loop
nextQuestion : function() {
     
}


