/// variable for pulling the time id from html
var timeEl = document.querySelector("#time");

//element for answerArea to populate
var answerArea = document.querySelector("#answerArea");
//element for results to populate
var resultEl = document.querySelector("#result-card");
//element to save initials
var saveBtnEl = document.querySelector("#saveBtn");
//element to add initials
var initialsEl = document.querySelector("#initials");

//variable for starting the timer with the start button
var startEl = document.querySelector("#start");
var questionCardEl = document.querySelector("#questions-card");
var startCardEl = document.querySelector("#start-card");
var questions = [
    {
        title: "Commonly used data types DO NOT inclide:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: 2,
    },
    {
        title: "The condition in an if/else statement is enclosed with:",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer: 2,
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["1. Numbers & Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer: 3,
    },
    {
        title: "String values mst be enclosed with _____ when being assigned to variables",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: 2,
    },
    {
        title: "A very useful tool used during web development and debugging in printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For Loops", "4. Console log"],
        answer: 3,
    },
]

// set seconds to what it starts at
var secondsLeft = 75;
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
    var userSelection = element.target.outerText;
    //check to see if the answer is correct
    if (userSelection === questions[currentQIndex].answer) {
        answerArea.textContent = "Correct Answer!";
    } else {
        answerArea.textContent = "Wrong Answer!";
    }
    //increment curent question index
    currentQIndex++;

    //after incrementing, check to see if there are more questions. If not, then end the game.
    if (currentQIndex < questions.length) {
        /// there are more questions
        getQuestion();
    } else {
        /// there are no more questions

    }
}

function endQuiz() {
    clearInterval();
    questionCardEl.classList.add("hide");
    //when start button is clicked, show the new questionCard id on home page
    questionCardEl.classList.remove("hide");
}

// when the user accesses the page, they are shoen an intro message
// in the HTML, we could have a <div> with the intro</div>
//users can click the start button, which will start the game timer

// - variable to store the current count, set to 0 by default
// - variable to store the array of questions
// - variable to store the index of the current question they are answering

// - array of possible answers (list)
// - question (string)
// - correct answer (number, index of the answer from the array of possible answers)

// users can click the start button
// - hide the intro div
// - create a setInterval of 75000 ms.
// - update the current count to 75
// every time the interval runs, we need to decrement the current count by 1, re-render what the curren count is on the screen
// render the first question
// using DOM manipulation, create a new element (document.createElement) with the question info, and display it on the screen (appendChild)
// use a variable to store current question

// use data attributes to call buttons, corrosponds to answers

// when a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status if thier answer (coreect/incorrect for  short period of time)


// create a function called end game

// end condition
// user anseers all the questions OR
// time runs out

// When the game extends, allow the user to enter thier initials and store thier Score

// redirect the user tot the high scores page which will display all of the high scores