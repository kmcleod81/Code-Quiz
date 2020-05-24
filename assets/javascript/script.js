// Global variables:
/// variable for pulling the time id from html
var timeEl = document.querySelector("#time");
//element for answerArea to populate
var answerArea = document.querySelector("#answerArea");
//element for results to populate
var resultEl = document.querySelector("#result-card");
//element to save initials
var saveEl = document.querySelector("#saveBtn");
//element to add initials
var initialsEl = document.querySelector("#initials");
//element for Score
var scoreEl = document.querySelector("#score");

var timerInterval;
var interval;

//variable for starting the timer with the start button
var startEl = document.querySelector("#start");
var questionCardEl = document.querySelector("#questions-card");
var startCardEl = document.querySelector("#start-card");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: 3,
    },
    {
        title: "The condition in an if/else statement is enclosed with:",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer: 2,
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["1. Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer: 4,
    },
    {
        title: "String values must be enclosed with _____ when being assigned to variables",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: 3,
    },
    {
        title: "A very useful tool used during web development and debugging in printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console log"],
        answer: 4,
    },
]

// set seconds to what it starts at
var secondsLeft = 75;
var answerPaneShow = 2000;
// question index stars at zero to go through loop
var currentQIndex = 0;
//start of function timer function
function setTime() {
    timerInterval = setInterval(function () {
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
    var userSelection = element.target.outerText;
    //grabbing info from userSelection and stopping it at the "." to use the number before it
    var userSelectNum = parseInt(userSelection.split(".")[0])
    //check to see if the answer is correct

    if (userSelectNum === questions[currentQIndex].answer) {
        showAnswerPane("Correct Answer!");
    } else {
        showAnswerPane("Wrong Answer!");
        secondsLeft -= 15;
    }
    //increment curent question index
    currentQIndex++;

    //after incrementing, check to see if there are more questions. If not, then end the game.
    if (currentQIndex < questions.length) {
        /// there are more questions
        getQuestion();
    } else {
        /// there are no more questions
        endQuiz();

    }
}

// function for showing the answer pane
function showAnswerPane(value) {
    clearInterval(interval);
    interval = setInterval(function () {
        answerPaneShow -= 100;
        answerArea.textContent = value;
        //if statement saying if counter is zero stop the timer
        if (answerPaneShow === 0) {
            answerArea.textContent = "";
            clearInterval(interval);
        }
        // counting in milliseconds
    }, 100);
}


function endQuiz() {
    //when quiz is over, stop timer
    clearInterval(timerInterval);
    //when quiz is over, hide the questions and buttons card
    questionCardEl.classList.add("hide");
    //when quiz is over, show the result element
    resultEl.classList.remove("hide");
    //when quiz is over, show the score
    scoreEl.textContent = "Score: " + secondsLeft;
}

//when the save button is clicked after entering ititials
saveEl.onclick = saveBtn;
function saveBtn() {
    //put the highScores into local storage if the save button is clicked, or don't when there's nothing
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var initials = initialsEl.value;
    var newScore = {
        score: secondsLeft, initials: initials,
    }
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // redirect the user to the high scores page which will display all of the high scores
    location.href = "highScores.html";
}

