// get a elemnet that is a button
var questionElement = document.querySelector("section.section-container");
var timerEl = document.getElementById("countDown");
var startButton = document.querySelector("button.startBtn");
var questions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if / else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to store ____.",
  "String values must be enclosed within ____ when being assigned to variables.",
];
var totalScore = 0;
var timer = 75;
var answerArr = [
  ["strings", "booleans", "alerts", "numbers"],
  ["quotes", "curly brackets", "parentheses", "square brackets"],
  ["numbers and strings", "other arrays", "booleans", "all of the above"],
  ["commas", "curly brackets", "quotes", "parentheses"],
];

// get that element to click a function
function startQuiz() {
  // create a function the console log first then set timer later
  var setTimer = setInterval(function () {
    timer--;
    timerEl.innerHTML = timer;
    if (timer === 0) {
      clearInterval(setTimer);
    }
  }, 1000);
  setTimeout(function () {
    questionElement.innerHTML = "<h1>Timer out!</h1>";
    console.log("timer is trigger!!");
  }, 50000);

  buildQuestion(questions); // call a function
}

// buid a function that populate question into html
function buildQuestion(questions) {
  // select a html and console log it

  var questionElement = document.querySelector("section.section-container");
  // loop the build logic and insert the question text in the the para
  // build question
  var questionBox = document.createElement("div");
  for (let i = 0; i < questions.length; i++) {
    questionElement.innerHTML = "";

    var testEl = document.createElement("p");

    // insert test in element
    testEl.innerText = questions[i];
    // attach element with test to selected element

    questionBox.append(testEl);

    // call answer function
    buildAnswers(i, questionBox);

    questionElement.append(questionBox);

    console.log("this is loop on index:", i);
    // create a loop around the question data
  }
}

// build your answer to your questions
function buildAnswers(numberQuestion, currentEl) {
  var currentAnswer = answerArr[numberQuestion];
  //repeat to build element into exist element
  var answerElement = document.createElement("div");
  // create loop
  for (let i = 0; i < currentAnswer.length; i++) {
    // inside loop create element for answer
    var answerText = document.createElement("button");
    // insert text in element
    answerText.innerText = currentAnswer[i];
    answerText.onclick = function () {
      let answer = CheckQuestionAndAnswer(
        questions[numberQuestion],
        currentAnswer[i]
      );
      if (answer) {
        totalScore++;
        // select the score elelement
        let elementScore = document.getElementById("score");
        // insert totalScore into element
        elementScore.innerText = totalScore;
      }
    };
    // insert answer element in current elment
    answerElement.append(answerText);
    // make element clickable
  }

  currentEl.append(answerElement);
}

// make event function on click base on answer

function CheckQuestionAndAnswer(question, answer) {
  if (question === "Commonly used data types DO NOT include:") {
    if (answer === "alerts") {
      return true;
    }
  } else {
    if (answer === "parentheses") {
      return true;
    }
  }
  {
    if (answer === "all of the above") return true;
  }
  {
    if (answer === "quotes") return true;
  }
}

startButton.addEventListener("click", startQuiz);
