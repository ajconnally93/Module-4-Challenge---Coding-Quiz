// both are HTML elements, startButton is a Button, quizQuestions is a Main

// <button id="startButton">Click Here to Begin</button>
// <main id="quizQuestions">
    // <section>Question 1: should you</section>
// </main>
var startButton = document.getElementById("startButton");
var quizQuestions = document.getElementById("quizQuestions");

// properly displays 'TEST TEST TEST TEST TEST' to console
console.log("TEST TEST TEST TEST TEST");

// returns 'Null' in console
console.log(startButton);

function startQuiz () {
    console.log("ABCDEFGHIJKLMNOP");
    quizQuestions.style.display = block;
}

// Can call function and 'ABCDEFGHIJKLMNOP' will properly log to console. However, quizQuestions doesn't change to block Display
startQuiz ();

// Returns error in console: 
// Uncaught TypeError: Cannot read properties of null (reading 'style')
    // at startQuiz (script.js:18:19)
    // at script.js:22:1
startButton.addEventListener('click', startQuiz);