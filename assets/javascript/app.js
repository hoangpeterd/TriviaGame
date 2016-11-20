$(document).ready(function () {
// variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
// end variables

//hide and display divs
$("#startButton").click(function() {
	$("#startPage").hide();
	$("#triviaPage").show();
});

$("#submitButton").click(function() {
	$("#triviaPage").hide();
	$("#resultsPage").show();
});
//end hide and display divs

//timer functions
var interval = setInterval(function() {
    var timer = $('#timeRemaining').html();
    timer = timer.split(':');
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    seconds -= 1;
    if (minutes < 0) return clearInterval(interval);
    if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
    if (seconds < 0 && minutes != 0) {
        minutes -= 1;
        seconds = 59;
    }
    else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
    $('#timeRemaining').html(minutes + ':' + seconds);
    
    if (minutes == 0 && seconds == 0)
        clearInterval(interval);
  //   	Event.preventDefault ();
		// $('#timeUpModal').modal('show');
  //   	$("#modalButton").click(function() {
  //           $("#submitButton").click();
  //       });

}, 1000);
// end timer functions

//function that checks the answers
function checkAnswer() {
	$("input:checked").each(function(){
		var checkedValue = $(this).val()
		if (checkedValue == "true") {
			correctAnswers++;
		} else {
			incorrectAnswers++;
		}
	})

	unanswered = 22 - (correctAnswers + incorrectAnswers)
	//display results onto html results page
	$("#correctAnswers").html(correctAnswers);
	$("#incorrectAnswers").html(incorrectAnswers);
	$("#unanswered").html(unanswered);
	console.log(correctAnswers);
	console.log(incorrectAnswers);
	console.log(unanswered);
}

$(document).on("click", "#submitButton", function(){
	checkAnswer();
})
// end checkAnswer function

});



