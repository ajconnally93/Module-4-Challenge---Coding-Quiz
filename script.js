// both are giving error
var startQuizButton = document.getElementById("startButton");
var quizQuestionsList = document.getElementById("quizQuestions");

console.log("TEST TEST TEST TEST TEST");

var startQuiz = function () {
    // display quiz
    console.log("ABCDEFGHIJKLMNOP");
    quizQuestionsList.style.display = block;
}

startQuizButton.addEventListener('click', startQuiz);