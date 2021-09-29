var beginButton = document.getElementById("begin-button");
var nextButton = document.getElementById("next-button");
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

function start() {
    beginButton.setAttribute("style", "display: none");
    
    nextButton.setAttribute("style", "display: initial"); //added function to hid begin button and bring the next button back
}


