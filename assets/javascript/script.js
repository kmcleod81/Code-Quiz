/// variable for pulling the time id from html
var timeEl = document.querySelector("#time");

//variable for starting the timer with the start button
var startEl = document.querySelector("#start");
var questionCardEl = document.querySelector("#questions-card");
var startCardEl = document.querySelector("#start-card");
var questions = [
    {
        title: "Commonly used data types DO NOT inclide:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3. Alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with:",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer: "3. Parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["1. Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "String values mst be enclosed with _____ when being assigned to variables",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: "3. Quotes"
    },
    {
        title: "A very useful tool used during web development and debugging in printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console log"],
        answer: "4. Console log"
    },
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

function getQuestion() {
    // generates question to populate
    var nextQuestion = questions[currentQIndex];
    var questionElTitle = document.querySelector("#question");
    questionElTitle.textContent = nextQuestion.title;

    // generates option 1 to populate
    var button1El = document.querySelector("#option1");
    button1El.textContent = nextQuestion.choices[0];
    button1El.onclick = checkAnswer;

    // generates option 2 to populate
    var button2El = document.querySelector("#option2");
    button2El.textContent = nextQuestion.choices[1];
    button2El.onclick = checkAnswer;

    // generates option 3 to populate
    var button3El = document.querySelector("#option3");
    button3El.textContent = nextQuestion.choices[2];
    button3El.onclick = checkAnswer;

    // generates option 4 to populate
    var button4El = document.querySelector("#option4");
    button4El.textContent = nextQuestion.choices[3];
    button4El.onclick = checkAnswer;
}

function checkAnswer(element) {
    alert(element);
}
