var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#startBtn");
var getScoresBtn = document.querySelector("#getScoresBtn");
var choicesEl = document.querySelector("#questionAnswers");
var questionsEl = document.querySelector("#questions");
var correctAnswerEl = document.querySelector("#correctAnswer");
var questionCounter = 0;

var questionList = [
  {
    question: "What is NOT part of the CRUD method?",
    options: ["Create", "Delete", "Update", "Restore"],
    Answer: "Restore",
  },
  {
    question: "What 3 languages make up most websites?",
    options: [
      "HTML, Java, CSS",
      "Bootstrap, JQuery, Handlebars",
      "HTML, CSS, Javascript",
      "Javascript, SQL, Node",
    ],
    Answer: "HTML, CSS, Javascript",
  },
  {
    question: "What is JQuery?",
    options: [
      "A Web API library for Javascript",
      "A game show",
      "Javascript documentation",
      "Some web developer's rap name",
    ],
    Answer: "A Web API library for Javascript",
  },
  {
    question: "Where can we save user data from a website?",
    options: ["Local Storage", "Cookies", "Webtokens", "All of the Above"],
    Answer: "All of the Above",
  },
  {
    question: "Where is SQL used?",
    options: [
      "Front-end",
      "Back-end",
      "Middleware",
      "Independent of the web app",
    ],
    Answer: "Back-end",
  },
  {
    question: "Which of these does NOT declare a variable?",
    options: ["this", "const", "var", "let"],
    Answer: "this",
  },
];

var currentQuestion = 0;
var time = questionList.length * 10;
var timerId;


function startQuiz() {
  var introScreenEl = document.getElementById("introScreen");
  introScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;

  console.log(questionList[0].question);
  console.log(questionList[0].options);

  getQuestion();
}

function getQuestion() {
  var questions = questionList[questionCounter].question;
  var options = questionList[questionCounter].options;
  console.log(options);
  // var questionCounter = questionList++;
  var currentOption = options;
  var currentQuestion = questions;

  var questions = questionList.questions;

  // console.log(questions);

  var questionTextEl = document.getElementById("questionPrompt");
  questionTextEl.textContent = currentQuestion;

  choicesEl.innerHTML = "";


  options.forEach(function (option, i) {
    console.log(option);
    var optionButton = document.createElement("button");
    optionButton.setAttribute("class", "options");
    optionButton.setAttribute("value", currentOption);

    optionButton.textContent = i + 1 + ". " + option;

    optionButton.onclick = answerClick;

    choicesEl.appendChild(optionButton);
  });
}

function answerClick() {
  // console.log(questions);
  var answer = questionList[questionCounter].Answer;
  // console.log(answer);
  if (answer !== questionList[questionCounter].Answer) {
    
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

  if (questionList === questionCounter) {
    quizEnd();
  } else {
    choicesEl.innerHTML = "";
    questionCounter++;
    console.log(questionCounter);
    getQuestion(questionCounter);
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
