/// variable for pulling the time id from html
var timeEl = document.querySelector("#time");

// set seconds to what it starts at
var secondsLeft = 60;

//start of function
function setTime() {
    var timerInterval = setInterval(function () {
        //deduction of seconds from the timer
        secondsLeft--;
        //what I want to populate to the page in textContent
        timeEl.textContent = "Time: " + secondsLeft;

        //if statement saying if counter is zero stop the timer
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
        // counting in milliseconds
    }, 1000);
}

setTime();