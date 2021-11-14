var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var getScoresBtn = document.querySelector("#getScoresBtn");
var choicesEl = document.querySelector("#questionAnswers");
var questionsEl = document.querySelector("#questions");
var correctAnswerEl = document.querySelector("#correctAnswer");

var currentQuestion = 0;
var time = questionList.length * 10;
var timerId;

function startQuiz() {
  var introScreenEl = document.getElementById("introScreen");
  introScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;

  // getQuestion();
  console.log(questionList);
}

function getQuestion() {
  var questions = [questionList.question];
  var options = [questionList.options];
  var currentOption = options[questionList];
  var currentQuestion = questions[questionList];

  var questionTextEl = document.getElementById("questionPrompt");
  questionTextEl.textContent = currentQuestion;

  choicesEl.innerHTML = "";

  currentQuestion.options.forEach(function (option) {
    console.log(option);
    var optionButton = document.createElement("button");
    optionButton.setAttribute("class", "options");
    optionButton.setAttribute("value", currentOption);

    optionButton.textContent = i + 1 + ". " + [option];

    optionButton.onclick = answerClick;

    choicesEl.appendChild(optionButton);
  });
}

function answerClick() {
  if (this.value !== questions[questionList].Answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }

    timerEl.textContent = time;
    correctAnswerEl.textContent = "Incorrect";
    correctAnswerEl.style.color = "red";
  } else {
    correctAnswerEl.textContent = "Correct!";
    correctAnswerEl.style.color = "green";
  }

  questionList++;

  if (questionList === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);
  var quizEndEl = document.getElementById("quizEndScreen");

  quizEndEl.removeAttribute("class");
  var highScoreEl = document.getElementById("high-score");
  highScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveScores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  var newScore = {
    score: time,
  };
  highscores.push(newScore);
  window.localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "scorecard.html";
}

function getScores(event) {
  if (event.key === "Enter") {
    saveScores();
  }
}

getScoresBtn.onclick = saveScores;

startBtn.onclick = startQuiz;
