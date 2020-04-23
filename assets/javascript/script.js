/// variable for pulling the time id from html
var timeEl = document.querySelector("#time");

//variable for starting the timer with the start button
var startEl = document.querySelector("#start");
var questionCardEl = document.querySelector("#questions-card");
var startCardEl = document.querySelector("#start-card");
var questions = [
    {
        title: "q1",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        title: "q2",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        title: "q3",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        title: "q4",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        title: "q5",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    },
    {
        title: "q6",
        choices: ["option", "option 2", "option 3", "option 4"],
        answer: "option 2"
    }
]

// set seconds to what it starts at
var secondsLeft = 60;
// question index stars at zero to go through loop
var currentQIndex = 0;
//start of function timer function
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

//start timer when start button is clicked function
startEl.onclick = startBtn;
function startBtn() {
    //when start button is clicked, hide the intro information located in startCard id on home page
    startCardEl.classList.add("hide");
    //when start button is clicked, show the new questionCard id on home page
    questionCardEl.classList.remove("hide");
    setTime();
    getQuestion();
}
