var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var choicesEl = document.querySelector("#questionAnswers");
var questionsEl = document.querySelector("#questionCard")

var currentQuestion = 0;
var time = questions.length * 15;
var timerId;

function startQuiz() {
    var introScreenEl = document.getElementById("#introScreen");
    introScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[questionList]

    var questionTextEl = document.getElementById("questionPrompt")
    questionTextEl.textContent = currentQuestion.questionText;

    choicesEl.innerHTML = "";

    currentQuestion.options
}