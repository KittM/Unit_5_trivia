$(document).ready(function () {
     
     //event listeners

})

//variables
var trivia = {
     correct: 0,
     incorrect: 0,
     unanswered: 0,
     currentSet: 0,
     timer: 20,
     timerOn: false,
     timerId: '',

     //questions
     questions: {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
          q5: '',
          q6: '',
          q7: '',
          q8: '',
          q9: '',
          q10: '',
     },

     //options
     options: {
          q1: [''],
          q2: [''],
          q3: [''],
          q4: [''],
          q5: [''],
          q6: [''],
          q7: [''],
          q8: [''],
          q9: [''],
          q10: [''],  
     },

     // answers
     answers: {
          q1: '',
          q2: '',
          q3: '',
          q4: '',
          q5: '',
          q6: '',
          q7: '',
          q8: '',
          q9: '',
          q10: '',    
},

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


