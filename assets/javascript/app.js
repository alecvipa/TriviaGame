// Create questions
// Create multiple choice function
// Create timer. When it gets to 0 GAME OVER
// If the user finish the trivia, set finish button that take you to a review of your answers

$(document).ready(function () {
    var time = 60;
    var intervalId;
    var clockRunning = false;
    var goods = 0;
    var mistakes = 0;
    var answers = 0;
    var images = "../TriviaGame/assets/images/toy-stor.jpg";
    $("#questions").hide();
    $(".reset").hide();
    
    
    
    
    $("#startbtn").click(function() {
        function stop() {

            clearInterval(intervalId);
            clockRunning = false;
          }
        function reset() {
            $("#questions").show();
            $("#test").text("00:00");
            

        }
        reset ();
        function start() {
            if (!clockRunning) {
                intervalId = setInterval(count, 1000);
                clockRunning = true;
                console.log(clockRunning);
            }
        }
        start();

        function count() {
            time--;

            var converted = timeConverter(time);
            console.log(converted);
          
            $("#test").text(converted);
            
          }
          count();

        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            console.log(minutes);
            var seconds = t - (minutes * 60);
            console.log(seconds);

            if (seconds === 0 || answers === 4) {
                alert("FINISHED");
                stop();
                $("#questions").html("<img src=" + images + " width='600px'>" + "<br>" + "Correct answers: " + goods + "<br>" + "Incorrect answers: " + mistakes + "<br>");
                $(".reset").show()
                $("#questions").css("height","700");

               
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            

            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;

        }
        


       
       
        
    
    });
    $(".btn").click(function(){
        nameid = $(this).attr("class");

        if (nameid === "btn answer" || nameid === "Al btn answer") {
            console.log("okay");
            goods++;
            answers++;
            console.log("goods: " + goods);

        } else {
            mistakes++;
            answers++;
            console.log("mistakes: " + mistakes);
        }


    });

});