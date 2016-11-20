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
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        // modal pops up when time runs out
        if (--timer < 0) {
            timer = duration;
            $("#timeUpModal").modal("show");
            $("#modalButton").click(function() {
            	$("#submitButton").click();
            });
        }
    }, 1000);
}

jQuery(function ($) {
    var twoMinutes = 10,
        display = $("#timeRemaining");
    startTimer(twoMinutes, display);
});
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



