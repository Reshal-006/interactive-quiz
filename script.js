// these are all the questions of the mcq
const quizData = [
    {
    numb: 1,
    question: "Which HTML element is not considered a landmark element ?",
    correctAnswer: "<ul>",
    option: [
        "<form>", 
        "<main>",
        "<nav>",
        "<ul>"
    ]

},

{
    numb: 2,
    question: "Which of the following CSS property specifies the origin of the background image ?",
    correctAnswer: "background origin",
    option: [
        "background-size",
        "size",
        "background-origin",
        "origin"
    ]
},

{
    numb: 3,
    question: "How to display preformatted text in HTML ?",
    correctAnswer: "<pre>",
    option: [
        "<p>",
        "<pre>",
        "<hr>",
        "All of the above"
    ]

},

{
    numb: 4,
    question: "Which of the following is the correct syntax for using the HTML style attribute ?",
    correctAnswer: "<tagname style = 'property:value;'>",
    option: [
        "<tagname style = 'property:value;'>",
        "<tagname style = 'property;'>",
        "<tagname style>",
        "None of the above"
    ]

},

{
    numb: 5,
    question: "How to stop an interval timer in JavaScript ?",
    correctAnswer: "clearInterval",
    option: [
        "clearTimer",
        "intervalOver",
        "clearInterval",
        "Can't say"
    ]
},

{
    numb: 6,
    question: "The most basic part of any HTML page is ?",
    correctAnswer: "ASCII Text",
    option: [
        "Text",
        "Binary",
        "ASCII Text",
        "HTML"
    ]
},

{
    numb: 7,
    question: "Which property allows an image link to show a text label ?",
    correctAnswer: "alt",
    option: [
        "alternative",
        "alt",
        "str",
        "None of the above"
    ]
},

{
    numb: 8,
    question: "Which of the following methods is used to access HTML elements using JavaScript ?",
    correctAnswer: "Both 1 and 2",
    option: [
        "getElementById()",
        "getElementsByClassName()",
        "Both 1 and 2",
        "None of the above"
    ]
},

{
    numb: 9,
    question: "How do we write a multiple line comment in JavaScript ?",
    correctAnswer: "/* */",
    option: [
        "/* */",
        "//",
        "$",
        "# #"
    ]
},

{
    numb: 10,
    question: "How can we add more importance to a property/value than normal ?",
    correctAnswer: "!important",
    option: [
        "IMPORTANT",
        "bold",
        "$important",
        "!important"
    ]
}

];

const questionSection = document.getElementById('questionSection');
const questionContainer = document.querySelector("#que_text");
const optionsContainer = document.querySelectorAll(".option_list");
const resultElement = document.getElementById("score_text");
let countdown = document.getElementById("countdown");
const timerInterval = setInterval(updateTimer, 1000);
const nextButton = document.getElementById("next_btn");
const resultBox = document.getElementById("result_box");
const icon = document.getElementById("crown_icon");
const radioButtons = document.getElementsByName("mcq");
var score = 0;
let currentQuestion = 0;
let currentOption = 0;
let timeLeft = 15;
let click = 0
const message = document.getElementById("congrats");
const divBox = document.getElementById("div_counter_box");
const gif = document.getElementById("end_gif");

//code to make the timer run
function updateTimer() {
    countdown.textContent = `${timeLeft}s`;
    if (currentQuestion<quizData.length){
        if (timeLeft <= 0) {
            nextButton.click(); 
        }
        timeLeft--;
    }
    
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    timeLeft = 15;
}

let div = document.querySelectorAll(".div_counter");
function blockList() {
    for (let i = 0; i < quizData.length; i++){
        if (currentQuestion === i){ 
        div[i].style.backgroundColor = "#418836"
        }
    }
};
blockList();

//this is to change the colour of the selected options
function selectedOption() {
    
    optionsContainer[0].onclick = () => {
        click++
        if (click == 1){
            userAnswer.push(0)
        }
        else if (click > 1){
            userAnswer.pop()
            userAnswer.push(0)
        }
        optionsContainer[0].style.backgroundColor = "#cea3ce"
        optionsContainer[1].style.backgroundColor = "aliceblue"
        optionsContainer[2].style.backgroundColor = "aliceblue"
        optionsContainer[3].style.backgroundColor = "aliceblue"
    }
    optionsContainer[1].onclick = () => {
        // userAnswer.push(1)
        
        click++
        if (click == 1){
            userAnswer.push(1)
        }
        else if (click > 1){
            userAnswer.pop()
            userAnswer.push(1)
        }
        optionsContainer[0].style.backgroundColor = "aliceblue"
        optionsContainer[1].style.backgroundColor = "#cea3ce"
        optionsContainer[2].style.backgroundColor = "aliceblue"
        optionsContainer[3].style.backgroundColor = "aliceblue"
    }
    optionsContainer[2].onclick = () => { 
        // userAnswer.push(2)
        
        click++
        if (click == 1){
            userAnswer.push(2)
        }
        else if (click > 1){
            userAnswer.pop()
            userAnswer.push(2)
        }
        optionsContainer[0].style.backgroundColor = "aliceblue"
        optionsContainer[1].style.backgroundColor = "aliceblue"
        optionsContainer[2].style.backgroundColor = "#cea3ce"
        optionsContainer[3].style.backgroundColor = "aliceblue"
    }
    optionsContainer[3].onclick = () => {  
        // userAnswer.push(3)
        console.log(userAnswer)
        click++
        if (click == 1){
            userAnswer.push(3)
        }
        else if (click > 1){
            userAnswer.pop()
            userAnswer.push(3)
        }
        optionsContainer[0].style.backgroundColor = "aliceblue"
        optionsContainer[1].style.backgroundColor = "aliceblue"
        optionsContainer[2].style.backgroundColor = "aliceblue"
        optionsContainer[3].style.backgroundColor = "#cea3ce"
    }
}
selectedOption();


//this is to change the colour back to normal for each new question
function newOption() {
    for (let i = 0; i < quizData.length-1; i++){
        if (optionsContainer[i].style.backgroundColor = "#cea3ce"){
            optionsContainer[i].style.backgroundColor = "aliceblue"
        }
    }
}

loadQuestion ();
//funciton made to load the question each time next is clicked
function loadQuestion(){
    let questions = quizData[currentQuestion];
    questionContainer.textContent = questions.question;    

    let questionNumber = document.getElementById("total_que");
    questionNumber.innerHTML = `<strong>Question ${currentQuestion + 1} of ${quizData.length}</strong>`;
}

loadOptions ();
//function to load options each time next button is clicked
function loadOptions(){
    let options = quizData[currentOption];
    for (let i = 0; i < optionsContainer.length; i++) {
        optionsContainer[i].textContent = options.option[i];
    }
    
}; 


const correctAnswerIndex = [3,2,1,0,2,2,1,2,0,3]
let userAnswer = []

// function storeAnswer() {
// for (let i = 0; i < optionsContainer.length; i++){
//     if (optionsContainer[i].style.backgroundColor = "#cea3ce"){
//         userAnswer.push(i)
//         console.log(userAnswer)
//     }
// }    
// }
// storeAnswer();

//what exactly happens after clicking the next button
nextButton.onclick = () => {
    currentQuestion++;
    currentOption++;
    blockList();
    timeLeft=15;
    click = 0;
    if (currentQuestion === quizData.length-1) {
        nextButton.textContent = "Submit";
    }
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
        loadOptions();
        newOption();
        blockList();
    }
    
    else {
        showResult();
    }
};


//function made to show the quiz result at the end
function showResult(){

    for(let i = 0;i<quizData.length -1;i++){
        if(userAnswer[i] === correctAnswerIndex[i]){
            score++;
        }
    }
    timer.style.display = "none";
    resultBox.style.display = "block";
    icon.style.display = "block";
    questionSection.style.display = "none";
    nextButton.style.display = "none";
    divBox.style.display = "none";

    resultElement.innerHTML = `<strong><h2>Your Score is ${score} out of ${quizData.length}</h2></strong>`;
    resultElement.style.display = "block";
    gif.style.display = "block";

    if (score < 5){
        message.innerHTML = `<strong><h2>Below average, better luck next time !</h2></strong>`
    }
    if (score >= 5 && score < 8){
        message.innerHTML = `<strong><h2>You did fairly well, aim higher now !</h2></strong>`
    }
    if (score >= 8){
        message.innerHTML = `<strong><h2> Amazing! Keep it up</h2></strong>`
    }
    setTimeout (() => { 
        const gif = document.getElementById("celeb");
        gif.style.display = "none";
    },3000);

    setTimeout (() => {    
    const gif2 = document.getElementById("wish");
    gif2.style.display = "none";
    },4000);
    
}



