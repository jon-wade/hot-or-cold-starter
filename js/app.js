//global variables

var guesses=0;
var num=0;

//main body

$(document).ready(function(){
	//start a new game when the page loads
    newGame();

    //get input from user
    getInput();

	//event listeners
	//new game clicked?
    $('a.new').click(function(){
        console.log('new game clicked');
        newGame();
    });




	/*--- Display information modal box ---*/
  	$('.what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});


});


  



function newGame() {
    //generate random number between 1 and 100
    num = generateNumber();
    console.log("Random number: " + num); //debug code
    //clear the input box
    $('#userGuess').val("");
    //clear the previous guesses from list
    $('ul#guessList li').remove();
    //reset feedback message
    $('#feedback').text("Make Your Guess!"); //placeholder message
    //reset guesses variable
    guesses = 0;
    //output guesses number to page
    $('#count').text(guesses);
}

function generateNumber() {
    return Math.floor((Math.random() * 100) +1);
}

function getInput() {
    $('#guessButton').click(function(){

        var input = $('#userGuess').val();

        console.log(input); //debug code

        //validate user input goes here
        if (isNaN(parseInt(input))) {
            //reset input box if input is NaN
            console.log("is NaN");
            $('#userGuess').val("");
            $('#feedback').text("Not a valid number! Try again");
        }
        else {
            //convert input into integer and compare to random number
            feedback(input);
            //insert previous guesses into list
            $('ul#guessList').append("<li>" + input + "</li>");
            //increment guesses
            guesses++;
            //output guess number to page
            $('#count').text(guesses);
            //clear the input box ready for next guess
            $('#userGuess').val("");
        }

    });
}

function feedback(input) {
    //convert input into integer and compare to random number
    if (guesses == 0) {
        if (Math.abs(num - (parseInt(input, 10))) > 50) {
            $('#feedback').text("Ice Cold");
        }
        else if (Math.abs(num - (parseInt(input, 10))) > 30) {
            $('#feedback').text("Cold");
        }
        else if (Math.abs(num - (parseInt(input, 10))) > 20) {
            $('#feedback').text("Warm");
        }
        else if (Math.abs(num - (parseInt(input, 10))) > 10) {
            $('#feedback').text("Hot");
        }
        else if (Math.abs(num - (parseInt(input, 10))) > 20) {
            $('#feedback').text("Very Hot");
        }
        else if (num - (parseInt(input, 10)) == 0) {
            $('#feedback').text("Correct");
        }
    }
    if (guesses>0) {
            var currentGuess = parseInt(input, 10);
            var lastGuess = parseInt($('ul#guessList li:last').text(), 10);
            var currentDiff = Math.abs(num - currentGuess);
            var lastDiff = Math.abs(num - lastGuess);
            console.log(currentDiff, lastDiff);
            if (currentGuess == num) {
                $('#feedback').text("Correct");
            }
            else {
                if (currentDiff < lastDiff) {
                    $('#feedback').text("Warmer");
                }
                else {
                    $('#feedback').text("Colder");

            }
        }
    }
}


