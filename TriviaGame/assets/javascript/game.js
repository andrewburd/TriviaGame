var questions[{
  "question": "What is the capital of Maryland"
  "option1": "Frederick"
  "option2": "Bethesda"
  "option3": "Annapolis"
  "option4": "Baltimore"
  "answer": "3"
}, {
  "question": "What is the capital of North Carolina"
  "option1": "Durham"
  "option2": "Raleigh"
  "option3": "Charolette"
  "option4": "New Bern"
  "answer": "2"
}, {  
  "question": "What is the capital of New York"
  "option1": "Albany"
  "option2": "New York"
  "option3": "Nyack"
  "option4": "White Plains"
  "answer": "1"
}, {
  "question": "What is the capital of California"
  "option1": "San Francisco"
  "option2": "San Jose"
  "option3": "Los Angeles"
  "option4": "Pasedena"
  "answer": "4"
}
]

var currentQuestion = 0;
var score = 0;

var container = document.getElementbyId('quizContainer');
var Question = document.getElementbyId('question');
var opt1 = document.getElementbyId('opt1');
var opt2 = document.getElementbyId('opt2');
var opt3 = document.getElementbyId('opt3');
var opt4 = document.getElementbyId('opt4');

function askQuestion (questionIndex) {
  var q = questions[questionIndex];
  questions.textContent = (questionIndex + 1) + '. ' +q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

var counter = '0'
function setup(){
  noCanvas();
  var timer = select('#timer');
  timer.html(counter);

  function timeIt(){
    counter++;

  }
  setInterval (timeIt, 1000);
}

