var currentQuestionIndex = 0;
var time = 60;
var timerId;

var questions = [
    { 
        question: "What does HTML stand for?", 
        answers: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"], 
        correct: 1 
    },
    { 
        question: "Which HTML tag is used to define an image?", 
        answers: ["<img>", "<image>", "<pic>", "<picture>"], 
        correct: 0 
    },
    { 
        question: "What property is used in CSS to change the text color?", 
        answers: ["font-color", "text-color", "color", "background-color"], 
        correct: 2 
    },
    { 
        question: "Which JavaScript function displays a message with an OK button?", 
        answers: ["alert()", "message()", "popup()", "console.log()"], 
        correct: 0 
    },
    { 
        question: "Which tag is used to link an external CSS file?", 
        answers: ["<css>", "<link>", "<style>", "<stylesheet>"], 
        correct: 1 
    },
    { 
        question: "How do you create a variable in JavaScript?", 
        answers: ["variable carName;", "var carName;", "v carName;", "let carName;"], 
        correct: 1 
    },
    { 
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
        answers: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], 
        correct: 2 
    },
    { 
        question: "How do you write a 'for' loop in JavaScript?", 
        answers: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5 do"], 
        correct: 1 
    },
    { 
        question: "In CSS, how do you select an element with the id 'demo'?", 
        answers: [".demo", "demo", "#demo", "*demo"], 
        correct: 2 
    },
    { 
        question: "How can you make a numbered list in HTML?", 
        answers: ["<dl>", "<ol>", "<list>", "<ul>"], 
        correct: 1 
    }
];