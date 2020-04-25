function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    var highScoresEL = $("#highScores");
    highScores.forEach(score => {
        var li = $("<li>");
        li.text(score.score + " : " + score.initials);
        highScoresEL.append(li);
    });
}

displayHighScores();

$("#clear").on("click", function (e) {
    localStorage.clear();
    $("#highScores").html("");
});