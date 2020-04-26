// function to display high scores in an ordered list
function displayHighScores() {
    //getting high scores stored in local storage
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // sorting high scored in in order
    highScores.sort(function (a, b) {
        // returning high scoreds in order
        return b.score - a.score;
    });
    // setting where the high score will be apended
    var highScoresEL = $("#highScores");
    highScores.forEach(score => {
        // using the li to append
        var li = $("<li>");
        // append the high score plus a colon and initials
        li.text(score.score + " : " + score.initials);
        highScoresEL.append(li);
    });
}
// display the high scores string
displayHighScores();

// clear the local storage if the clear button is clicked
$("#clear").on("click", function (e) {
    localStorage.clear();
    $("#highScores").html("");
});