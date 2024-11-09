const quizData = [
    {
        numb: 1,
        question: "Which HTML element is not considered a landmark element?",
        correctAnswer: "<ul>",
        option: ["<form>", "<main>", "<nav>", "<ul>"]
    },
    {
        numb: 2,
        question: "Which of the following CSS property specifies the origin of the background image?",
        correctAnswer: "background-origin",
        option: ["background-size", "size", "background-origin", "origin"]
    },
    {
        numb: 3,
        question: "How to display preformatted text in HTML?",
        correctAnswer: "<pre>",
        option: ["<p>", "<pre>", "<hr>", "All of the above"]
    },
    {
        numb: 4,
        question: "Which of the following is the correct syntax for using the HTML style attribute?",
        correctAnswer: "<tagname style = 'property:value;'>",
        option: ["<tagname style = 'property:value;'>", "<tagname style = 'property;'>", "<tagname style>", "None of the above"]
    },
    {
        numb: 5,
        question: "How to stop an interval timer in JavaScript?",
        correctAnswer: "clearInterval",
        option: ["clearTimer", "intervalOver", "clearInterval", "Can't say"]
    },
    {
        numb: 6,
        question: "The most basic part of any HTML page is?",
        correctAnswer: "ASCII Text",
        option: ["Text", "Binary", "ASCII Text", "HTML"]
    },
    {
        numb: 7,
        question: "Which property allows an image link to show a text label?",
        correctAnswer: "alt",
        option: ["alternative", "alt", "str", "None of the above"]
    },
    {
        numb: 8,
        question: "Which of the following methods is used to access HTML elements using JavaScript?",
        correctAnswer: "Both 1 and 2",
        option: ["getElementById()", "getElementsByClassName()", "Both 1 and 2", "None of the above"]
    },
    {
        numb: 9,
        question: "How do we write a multiple line comment in JavaScript?",
        correctAnswer: "/* */",
        option: ["/* */", "//", "$", "# #"]
    },
    {
        numb: 10,
        question: "How can we add more importance to a property/value than normal?",
        correctAnswer: "!important",
        option: ["IMPORTANT", "bold", "$important", "!important"]
    }
];

const questionSection = document.getElementById('questionSection');
const questionContainer = document.querySelector("#que_text");
const optionsContainer = document.querySelectorAll(".option_list");
const resultElement = document.getElementById("score_text");
const countdown = document.getElementById("countdown");
const nextButton = document.getElementById("next_btn");
const resultBox = document.getElementById("result_box");
const icon = document.getElementById("crown_icon");
const divBox = document.getElementById("div_counter_box");
const gif = document.getElementById("end_gif");
const message = document.getElementById("congrats");

let totalTime = 15;  
let timerInterval = setInterval(updateTimer, 1000);
let currentQuestion = 0;
let score = 0;
let userAnswer = [];
let click = 0;
const correctAnswerIndex = [3, 2, 1, 0, 2, 2, 1, 2, 0, 3];

// Timer functionality
function updateTimer() {
    countdown.textContent = `${totalTime}s`;
    if (totalTime <= 0) {
        clearInterval(timerInterval);  // Stop the timer
        nextButton.click();  // Trigger next question or finish quiz
    }
    totalTime--;
}

function resetTimer() {
    totalTime = 15;  // Reset to 15 seconds
}

// Highlight selected option
function selectedOption() {
    optionsContainer.forEach((option, index) => {
        option.onclick = () => {
            click++;
            if (click === 1) {
                userAnswer.push(index);
            } else if (click > 1) {
                userAnswer.pop();
                userAnswer.push(index);
            }
            optionsContainer.forEach(opt => opt.style.backgroundColor = "aliceblue");
            option.style.backgroundColor = "#cea3ce";
        }
    });
}
selectedOption();

// Reset option colors for new question
function newOption() {
    optionsContainer.forEach(option => option.style.backgroundColor = "aliceblue");
}

// Load question and options
function loadQuestion() {
    let question = quizData[currentQuestion];
    questionContainer.textContent = question.question;
    document.getElementById("total_que").innerHTML = `<strong>Question ${currentQuestion + 1} of ${quizData.length}</strong>`;
}

function loadOptions() {
    let options = quizData[currentQuestion].option;
    optionsContainer.forEach((option, i) => {
        option.textContent = options[i];
    });
}

// Next button functionality
nextButton.onclick = () => {
    if (currentQuestion < quizData.length - 1) {
        if (currentQuestion === quizData.length - 2) {
            nextButton.textContent = "Submit";
        }
        currentQuestion++;
        resetTimer();
        click = 0;
        loadQuestion();
        loadOptions();
        newOption();
    } else {
        showResult();
    }
}

// Display final score
function showResult() {
    for (let i = 0; i < quizData.length; i++) {
        if (userAnswer[i] === correctAnswerIndex[i]) {
            score++;
        }
    }
    countdown.style.display = "none";
    resultBox.style.display = "block";
    icon.style.display = "block";
    questionSection.style.display = "none";
    nextButton.style.display = "none";
    divBox.style.display = "none";
    resultElement.innerHTML = `<strong><h2>Your Score is ${score} out of ${quizData.length}</h2></strong>`;
    gif.style.display = "block";

    // Display messages based on score
    if (score < 5) {
        message.innerHTML = "<strong><h2>Below average, better luck next time!</h2></strong>";
    } else if (score >= 5 && score < 8) {
        message.innerHTML = "<strong><h2>You did fairly well, aim higher now!</h2></strong>";
    } else {
        message.innerHTML = "<strong><h2>Amazing! Keep it up!</h2></strong>";
    }

    // Hide GIFs after delay
    setTimeout(() => {
        gif.style.display = "none";
    }, 3000);
}

// Initialize quiz
loadQuestion();
loadOptions();
