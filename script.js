var startButton = document.getElementById("startButton");

// Jquery function to set the visibility of multiple buttons with the same class
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




// IMPORTANT NOTE: I did not come up with the questions. However, the code and structure is my own.
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
// somehow need to get this quiz to cycle through the questions and evaluate the answers - perhaps with a checkAnswer () function?

// Will now properly hide buttons - NOT FUNCTIONAL WITH QUIZ, BUT TESTED SO I CAN GET BUTTONS TO HIDE
function displayQuestion2 () {
    document.getElementById("quizQuestion1").style.display = 'none';
    $(".buttons1").invisible();

    document.getElementById("quizQuestion2").innerHTML = Object(wholeQuiz[1].question);
    $(".buttons2").visible();

    // document.getElementById("quizChoices2A").innerHTML = Object(wholeQuiz[1].choices[0]);
    // document.getElementById("quizChoices2B").innerHTML = Object(wholeQuiz[1].choices[1]);
    // document.getElementById("quizChoices2C").innerHTML = Object(wholeQuiz[1].choices[2]);
    // document.getElementById("quizChoices2D").innerHTML = Object(wholeQuiz[1].choices[3]);


    var i = 0;
    $(".buttons2").each(function() {
        $(this).html(wholeQuiz[1].choices[i]);
        i++ ;
    });

    // EXPLAIN RABBIT HOLE TO GRADER
    // for (var i = 0; i < wholeQuiz[1].choices.length; i++) {
    //     // document.getElementsByClassName("buttons2").innerHTML = Object(wholeQuiz[1].choices[i]);
    //     // var content = Object(wholeQuiz[1].choices[i]);
    //     // $('.buttons2').text(Object(wholeQuiz[1].choices[i]));
    //     console.log(i);
    //     $('.buttons2').html(wholeQuiz[1].choices[i]);
    // }

}

function startQuiz () {
    // Display first question in wholeQuiz array
    // Once first question in wholeQuiz array is answered, display next question & answer choices while hiding first question & answer choices
    document.getElementById("quizQuestion1").innerHTML = Object(wholeQuiz[0].question);
    document.getElementById("quizChoices1A").innerHTML = Object(wholeQuiz[0].choices[0]);
    document.getElementById("quizChoices1B").innerHTML = Object(wholeQuiz[0].choices[1]);
    document.getElementById("quizChoices1C").innerHTML = Object(wholeQuiz[0].choices[2]);
    document.getElementById("quizChoices1D").innerHTML = Object(wholeQuiz[0].choices[3]);

    $(document).on('click', '.buttons1', displayQuestion2);

    // displayQuestion2 ();


    // document.getElementById("quizQuestion1").childNodes.addEventListener('click', displayQuestion2);
    // add event listener for the first set of buttons

    // document.getElementById("quizChoices2A").innerHTML = Object(wholeQuiz[1].choices[0]);
    // document.getElementById("quizChoices2B").innerHTML = Object(wholeQuiz[1].choices[1]);
    // document.getElementById("quizChoices2C").innerHTML = Object(wholeQuiz[1].choices[2]);
    // document.getElementById("quizChoices2D").innerHTML = Object(wholeQuiz[1].choices[3]);

    // document.getElementById("quizQuestion3").innerHTML = Object(wholeQuiz[2].question);
    // document.getElementById("quizChoices3A").innerHTML = Object(wholeQuiz[2].choices[0]);
    // document.getElementById("quizChoices3B").innerHTML = Object(wholeQuiz[2].choices[1]);

    // document.getElementById("quizQuestion4").innerHTML = Object(wholeQuiz[3].question);
    // document.getElementById("quizChoices4A").innerHTML = Object(wholeQuiz[3].choices[0]);
    // document.getElementById("quizChoices4B").innerHTML = Object(wholeQuiz[3].choices[1]);

    // document.getElementById("quizQuestion5").innerHTML = Object(wholeQuiz[4].question);
    // document.getElementById("quizChoices5A").innerHTML = Object(wholeQuiz[4].choices[0]);
    // document.getElementById("quizChoices5B").innerHTML = Object(wholeQuiz[4].choices[1]);
    // document.getElementById("quizChoices5C").innerHTML = Object(wholeQuiz[4].choices[2]);
    // document.getElementById("quizChoices5D").innerHTML = Object(wholeQuiz[4].choices[3]);
}

startQuiz ();


function displayPlaceholder () {
    quizQuestions.style.display = 'block';
    startButton.style.display = 'none';
}

// Displays quiz questions all at once now
startButton.addEventListener('click', displayPlaceholder);