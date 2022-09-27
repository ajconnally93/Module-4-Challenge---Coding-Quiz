var startButton = document.getElementById("startButton");

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

function startQuiz () {
    // figure this out somehow...
}


function displayPlaceholder () {
    quizQuestions.style.display = 'block';
}

// Displays the placeholder text - this will need to be changed to somehow begin the quiz...
startButton.addEventListener('click', displayPlaceholder);