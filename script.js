// TODOS: CREATE HISCORES PAGE. CREATE WAY TO SAVE HISCORES. CREATE WAY FOR USERS TO ENTER THEIR HISCORES + INITIALS. CREATE DYNAMIC TIMER & TIMER FUNCTIONALITY

// write functions for each TODO and call at the end of 

var time = 60;
var score = 0;

setInterval(function()
{
if (time>0) {
    time --;
    document.getElementById('timer').textContent = 'TIMER:' + time +' SECONDS'};
}, 1000);

document.getElementById('currentScore').textContent = 'CURRENT SCORE: ' + score;

var startButton = document.getElementById("startButton");

// Discovered a Jquery function which will allow me to set the visibility of multiple buttons with the same class through another jquery function ending in either .visible(); or .invisible();
(function($) {
    $.fn.invisible = function() {
        return this.each(function() {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function() {
        return this.each(function() {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

// IMPORTANT NOTE: I did not come up with the questions&answers. However, the code and structure is my own.
var wholeQuiz = [
    {
        question: 'Question 1: If we declare a variable, let test = 1, then later, reassign, stating test = 2, what will happen?',
        choices: ['A. test will equal 1', 'B. test will equal 2', 'C. TypeError', 'D. undefined'],
        answer: 'B. test will equal 2'
    }

    , {
        question: 'Question 2: If we declare a variable, let test = 1, then later, reassign, stating var test = 2, what will happen if both are in the same scope?',
        choices: ['A. both variables will be declared', 'B. JavaScript will raise a SyntaxError', 'C. var test will reassign let test', 'D. var test will be ignored as test is already declared'],
        answer: 'B. JavaScript will raise a SyntaxError'
    }

    , {
        question: 'Question 3: The expression 8 >= 8 evaluates to:',
        choices: ['A. True', 'B. False'],
        answer: 'A. True'
    }

    , {
        question: 'Question 4: The expression 8 === "8" evaluates to:',
        choices: ['A. True', 'B. False'],
        answer: 'B. False'
    }

    , {
        question: 'Question 5: What is the main differences between let and const?',
        choices: ['A. let can be reassigned, const cannot be reassigned', 'B. let cannot be reassigned, const can be reassigned', 'C. let is functional scope, while const is block scope', 'D. let is block scope, while const is functional scope'],
        answer: 'A. let can be reassigned, const cannot be reassigned'
    }
]

// displayQuiz () will hide the 'Click Here to Begin' button and display the Div container 'quizQuestions' - which will contain all questions as children of said container. However, the questions & answers are hidden by default until the event listener uses the following functions to display them when it is time for the user to answer them.
function displayQuiz () {
    quizQuestions.style.display = 'block';
    startButton.style.display = 'none';
}
startButton.addEventListener('click', displayQuiz);

// this function is what actually begins the quiz, startQuiz () begins by displaying the 1st question and 1st set of answer choices, the later functions within the event listeners below will be explained as they are defined
function startQuiz () {
    document.getElementById("quizQuestion1").style.display = 'block';
    document.getElementById("quizQuestion1").innerHTML = Object(wholeQuiz[0].question);
    $(".buttons1").visible();
    var i = 0;
    $(".buttons1").each(function() {
        $(this).html(wholeQuiz[0].choices[i]);
        i++;
    });
    document.getElementById('quizQuestions').onclick= function(e){
        console.log(e.target.innerText);
    
        if(e.target.innerText === wholeQuiz[0].answer){
            time +=15;
        }else{time -=15}
    }
    $(document).on('click', '.buttons1', displayQuestion2);
    $(document).on('click', '.buttons2', displayQuestion3);
    $(document).on('click', '.buttons3', displayQuestion4);
    $(document).on('click', '.buttons4', displayQuestion5);
}

// each displayQuestion# function will follow the same pattern
function displayQuestion2 () {
    // First hides the previous question and buttons(answer choices)
    document.getElementById("quizQuestion1").style.display = 'none';
    $(".buttons1").invisible();
    // Then displays the 2nd question and its corresponding answer choices(buttons)
    document.getElementById("quizQuestion2").innerHTML = Object(wholeQuiz[1].question);
    $(".buttons2").visible();
    // Discovered use of .each jquery function to loop through a class of buttons and individually assign each a different value
    var i = 0;
    $(".buttons2").each(function() {
        $(this).html(wholeQuiz[1].choices[i]);
        i++;
    });
    // Adds 15 seconds if answer is correct, subtracts 15 seconds if answer is wrong
    ////////////////////STILL NEED TO FIX THE CONSOLE LOGS//////////////////////////
    //////////////////////NOW WORKS, NEED TO FIX OTHER PIECES OF CODE W/ OTHER QUESTIONS////////////////////
    document.getElementById('quizQuestions').onclick= function(e){
        console.log(e.target.innerText)
        if(e.target.innerText === wholeQuiz[1].answer){
            time +=15;
            score +=15;
            console.log("CORRECT " + score);
        } else {
            time -=15;
            score -=15;
            console.log("INCORRECTINCORRECTINCORRECTINCORRECT " + score);
        }
    }
}

function displayQuestion3 () {
    document.getElementById("quizQuestion2").style.display = 'none';
    $(".buttons2").invisible();
    document.getElementById("quizQuestion3").innerHTML = Object(wholeQuiz[2].question);
    $(".buttons3").visible();
    var i = 0;
    $(".buttons3").each(function() {
        $(this).html(wholeQuiz[2].choices[i]);
        i++;
    });

    document.getElementById('quizQuestions').onclick= function(e){
        console.log(e.target.innerText)
    
        if(e.target.innerText === wholeQuiz[2].answer){
            time +=15;
        }else{time -=15}
    }
}

function displayQuestion4 () {
    document.getElementById("quizQuestion3").style.display = 'none';
    $(".buttons3").invisible();
    document.getElementById("quizQuestion4").innerHTML = Object(wholeQuiz[3].question);
    $(".buttons4").visible();
    var i = 0;
    $(".buttons4").each(function() {
        $(this).html(wholeQuiz[3].choices[i]);
        i++;
    });

    document.getElementById('quizQuestions').onclick= function(e){
        console.log(e.target.innerText)
    
        if(e.target.innerText === wholeQuiz[3].answer){
            time +=15;
        }else{time -=15}
    }
}

function displayQuestion5 () {
    document.getElementById("quizQuestion4").style.display = 'none';
    $(".buttons4").invisible();
    document.getElementById("quizQuestion5").innerHTML = Object(wholeQuiz[4].question);
    $(".buttons5").visible();
    var i = 0;
    $(".buttons5").each(function() {
        $(this).html(wholeQuiz[4].choices[i]);
        i++;
    });

    document.getElementById('quizQuestions').onclick= function(e){
        console.log(e.target.innerText)
    
        if(e.target.innerText === wholeQuiz[4].answer){
            time +=15;
        }else{time -=15}
    }

    // PUT FUNCTIONS HERE TO CAPTURE HISCORES AND USE LOCAL STORAGE
    // TAKE SCORE 

    // PUT EMPTY INPUT BOX IN HTML FOR HISCORES - SET DISPLAY TO BLOCK AS WELL
    // STORE EVENT.VALUE AND SCORE IN LOCAL STORAGE

    // ALSO CREATE WAY TO SEE IF TIMER WENT BELOW 15-0 TO GO AHEAD AND DISPLAY A 'YOU LOSE' PAGE THING

}

startQuiz ();