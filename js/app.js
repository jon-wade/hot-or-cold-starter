
$(document).ready(function(){
	//start a new game when the page loads
    newGame();








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
    console.log(num);
}

function generateNumber() {
    return Math.floor((Math.random() * 100) +1);
}


