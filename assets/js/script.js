var beginButton = document.getElementById("begin-button");
var nextButton = document.getElementById("next-button");
var questionLabel = document.getElementById('question');
var countDown = document.getElementById('timout');
var randomQuestions = 0;
var scoreBoard =0;

var questionList =  [ //created an array of questions and answers. 
    {
        question: "Which of these is NOT one of the seven primitive data types?",
        answers: [
            {answer: "Char", correct: true},
            {answer: "Boolean", correct: false},
            {answer: "String", correct: false},
            {answer: "Number", correct: false}
        ]
    },
    {
        question: "What is the correct way to implement a linear gradient color?",
        answers: [
            {answer: "background: linear-gradient()", correct: true},
            {answer: "background-color: linear-gradient()", correct: false},
            {answer: "color: linear-gradient()", correct: false},
            {answer: "linear-gradient: background-color()", correct: false}
        ]
    }, 
    {
        question: "What does HTML stand for?",
        answers: [
            {answer: "Hyper Text Markup Lingo", correct: false},
            {answer: "Hyper Text Meta Language", correct: false},
            {answer: "Hyper Transfer Markup Language", correct: false},
            {answer: "Hyper Text Markup Language", correct: true}
        ]
    },
    {
        question: "Fill in the blank: DOM stands for ___ Object Model",
        answers: [
            {answer: "Dimension", correct: false},
            {answer: "Display", correct: false},
            {answer: "Document", correct: true},
            {answer: "Desktop", correct: false}
        ]
    },
    {
        question: "Fill in the blank: Full-time students are allowed ___ tutoring sessions a week.",
        answers: [
            {answer: "Three", correct: false},
            {answer: "One", correct: false},
            {answer: "Two", correct: true},
            {answer: "Four", correct: false}
        ]
    },
    {
        question: "Where do we link a CSS file into an HTML file?",
        answers: [
            {answer: "Head", correct: true},
            {answer: "Body", correct: false},
            {answer: "Header", correct: false},
            {answer: "Footer", correct: false}
        ]
    },
    {
        question: "Which programming language did we learn first?",
        answers: [
            {answer: "HTML", correct: true},
            {answer: "CSS", correct: false},
            {answer: "Javascript", correct: false},
            {answer: "Befunge", correct: false}
        ]
    },
    {
        question: "Which of these would add a hover effect in CSS?",
        answers: [
            {answer: "hover.element", correct: false},
            {answer: "flow.element", correct: false},
            {answer: "hover:element", correct: false},
            {answer: "element:hover", correct: true}
        ]
    }
]

beginButton.addEventListener("click", start);
nextButton.addEventListener("click", next);


function start() {
    beginButton.setAttribute("style", "display: none");
    timer();
    randomizer(); //executing the function when the eventlistener for start is clicked
    nextButton.setAttribute("style", "display: initial"); 
}

function randomizer() { //function that will replace 'question' with a question from the listed array   
        //console.log(questionList[i].question);//test to confirm that question list is being read. 
        questionLabel.innerText = questionList[randomQuestions].question;  


    answerBars(); 
    }


function answerBars() {
    for (var a = 0; a < questionList[randomQuestions].answers.length; a++) {
        //console.log(questionList[randomQuestions].answers[a].answer); //test to see if answers were loggin
        //console.log(document.getElementById('answer-'+ (a+1)).innerText) //test to see if answers were logging to their proper spots
        document.getElementById('answer-'+ (a+1)).innerText = questionList[randomQuestions].answers[a].answer;
        document.getElementById('answer-'+ (a+1)).setAttribute("data-set", questionList[randomQuestions].answers[a].correct);
        document.getElementById('answer-'+ (a+1)).addEventListener("click", answerCheck);
        }
    } 

function next() { //adds ability to cycle to the next question
    randomizer(); 
    randomQuestions = randomQuestions+1;
    }


function answerCheck(event) {
    var checker = event.target.getAttribute("data-set");
    if (checker == true) {
        scoreBoard++;
    }
}
console.log(scoreBoard);

    /*for (let i = 0; i < questionList[randomQuestions].answers.length; i++) {
        if (questionList[randomQuestions].answers[i].correct == true) {
            scoreBoard++;
        }
    }
}
console.log(scoreBoard);*/


function timer() {
    setTimeout(halfTime, 1000 * 10);
    setTimeout(gameOver, 1000 * 20);
}


function halfTime() {
    alert("10 seconds left!");
}
function gameOver() {
    alert("Game Over!");
}