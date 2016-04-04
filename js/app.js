var guesses=0;

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
    var num = generateNumber();
    console.log("Random number: " + num);
    //clear the input box
    $('#userGuess').val("");
    //clear the previous guesses
    $('ul#guessList li').remove();
    //reset feedback message
    $('#feedback').text("Make Your Guess!"); //placeholder message
    //reset guesses variable
    guesses = 0;
    //output guess number to page
    $('#count').text(guesses);
}

function generateNumber() {
    return Math.floor((Math.random() * 100) +1);
}

function getInput() {
    $('#guessButton').click(function(){
        var input = $('#userGuess').val();
        console.log(input);
        //provide feedback
        $('#feedback').text("Feedback goes here"); //placeholder message
        //insert previous guesses into list
        $('ul#guessList').append("<li>" + input + "</li>");
        //increment guesses
        guesses++;
        //output guess number to page
        $('#count').text(guesses);
    });
}


