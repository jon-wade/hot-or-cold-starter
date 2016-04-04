var guesses=0;
var num=0;

$(document).ready(function(){
	//start a new game when the page loads

    newGame();
    getInput();



	//event listeners
	//new game
    $('a.new').click(function(){
        console.log('new game clicked');
        newGame();
    });



	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
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
        
        //convert input into integer and compare to random number
        feedback(input);

        //insert previous guesses into list
        $('ul#guessList').append("<li>" + input + "</li>");
        //increment guesses
        guesses++;
        //output guess number to page
        $('#count').text(guesses);
    });
}

function feedback(input) {
    //convert input into integer and compare to random number
    if (parseInt(input, 10) < num) {
        $('#feedback').text("Too Low");
    }
    else if (parseInt(input, 10) > num) {
        $('#feedback').text("Too High");
    }
    else {
        $('#feedback').text("Correct");
    }
}


