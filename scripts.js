var $startBtn = document.querySelector("#startBtn");
var $startPrompt = document.querySelector("#startPrompt");
var $questionCard = document.querySelector("#questionCard");
var $questionPrompt = document.querySelector("#questionPrompt");
var $questionAnswers = document.querySelector("#questionAnswers");
var $highScoreBtn = document.querySelector("#highScoreBtn");
var $timer = document.querySelector("#timer");
var $questions = document.querySelector(".questions");
var $questionChoices = document.querySelector(".questionChoices");
var time = 200;
var score = 0;

var timerInterval;
var currentQuestion = 0;

$startBtn.addEventListener("click", function (e) {
  $startPrompt.classList.add("hide");
  $questionPrompt.classList.remove("hide");
  $timer.classList.remove("hide");
  $startBtn.style.display = "none";
  $questionCard.textContent = $questionCard[0].question;
  $questionCard[0].Answer.forEach(function (item) {});
});

function renderQuestion() {
  $questionChoices.innerHTML = "";
  $questions.textContent = question[currentQuestion].text;
  question[currentQuestion].options.forEach(function (items) {
    var $btn = document.createElement("button");
    $btn.textContent = item;
    $questionChoices.append($btn);
  });
}

var questionList = [
  {
    questionText: "What is NOT part of the CRUD method?",
    options: ["Create", "Delete", "Update", "Restore"],
    Answer: "Restore",
  },
  {
    questionText: "What 3 languages make up most websites?",
    options: [
      "HTML, Java, CSS",
      "Bootstrap, JQuery, Handlebars",
      "HTML, CSS, Javascript",
      "Javascript, SQL, Node",
    ],
    Answer: "HTML, CSS, Javascript",
  },
  {
    questionText: "What is JQuery?",
    options: [
      "A Web API library for Javascript",
      "A game show",
      "A mod for Javascript",
      "Some web developer's rap name",
    ],
    Answer: "A Web API library for Javascript",
  },
  {
    questionText: "Where can we save user data from a website?",
    options: ["Local Storage", "Cookies", "Webtokens", "All of the Above"],
    Answer: "All of the Above",
  },
  {
    questionText: "Where is SQL used?",
    options: [
      "Front-end",
      "Back-end",
      "Middleware",
      "Independent of the web app",
    ],
    Answer: "Back-end",
  },
  {
    questionText: "Which of these does NOT declare a variable?",
    options: ["this", "const", "var", "let"],
    Answer: "this",
  },
];

$highScoreBtn.addEventListener("click", highScoreDisplay);
function highScoreDisplay() {
  console.log("High Score");
}
$startBtn.addEventListener("click", function (e) {
  $timer.textContent = time;
  setInterval(function () {
    time--;
    time.textContent = time;
  }, 2000);
  $startBtn.style.display = "none";
  updateQuestion(0);
});

function updateQuestion($index) {
  var currentQuestion = questionList[$index];
  $questionPrompt.innerText = currentQuestion.questionText;
  for (question of questionList) {
    console.log(question);
    $questionBox = document.getElementById("questionCard");
    $questionHeader = document.createElement("h2");
    $questionHeader.textContent = question.questionText;
    $questionBox.append($questionHeader);
    for (option of question.options) {
      optionBtn = document.createElement("button");
      optionBtn.textContent = option;
      $answerBox = document.getElementById("questionAnswers");
      $answerBox.append(optionBtn);
      $answerBox.append(document.createElement("br"));

      var correctAnswer = option == question.Answer;

      if (correctAnswer) {
        optionBtn.addEventListener("click", handleCorrectAnswerClick);
      } else {
        optionBtn.addEventListener("click", handleWrongANswerClick);
      }
    }
  }
}

function handleCorrectAnswerClick() {
  score++;
}

function handleWrongANswerClick() {
  score--;
  time -= 30;
}

var correctAnswerHandler = function () {
  score++;
  $highScoreBtn.innerText = score;
  updateQuestion($index + 1);
  $optionA.remove($optionA.children[1]);
};

var wrongAnswerHandler = function () {
  score--;
  $highScoreBtn.innerText = score;
  updateQuestion($index + 1);
  $optionB.remove($optionB.children[1]);
};
