function printHighScore() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function(score) {
        var liTag = document.createElement("li");
        liTag.textContent = score.score;

        var olEl = document.getElementById("scoreTable");
        olEl.appendChild(liTag);
    });
}

function clearAllScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.getElementById("clearScores").onclick = clearAllScores;

printHighScore();