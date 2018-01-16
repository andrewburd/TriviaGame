$( document ).ready(function() {

  var game = {
    questions: [
    {
        question: 'What is the capital of Maryland?',
        possibles: ['Frederick', 'Annapolis', 'Rockville', 'Baltimore'],
        id: 'question-one',
        answer: 1
    }, {
      question: 'What is the capital of New York',
      possibles: ['New York', 'Albany', 'White Plains', 'Nyack'],
      id: 'question-two',
      answer: 1
    }, {
      question: 'What is the capital of South Carolina?',
      possibles: ['Charleston', 'Greenville', 'Columbia', 'Myrtle Beach'],
      id: 'question-three',
      answer: 2
    }, {
      question: 'What is the capital of Georgia?',
      possibles: ['Savannah', 'Augusta', 'Decatur', 'Atlanta'],
      id: 'question-four',
      answer: 3
    }, {
      question: 'What is the capital of Virginia?',
      possibles: ['Richmond', 'Fredericksburg', 'Roanoke', 'Arlington'],
      id: 'question-five',
      answer: 0
    }, {
      question: 'What is the capital of Colorado?',
      possibles: ['Boulder', 'Denver', 'Vail', 'Fort Collins', 'Grand Junction'],
      id: 'question-six',
      answer: 1

    }, {
      question: 'What is the capital of Arizone?',
      possibles: ['Mesa', 'Sun City', 'Phoenix', 'Tuscon'],
      id: 'question-seven',
      answer: 2
    }, {
      question: 'What is the capital of Connecticut?',
      possibles: ['Middletown', 'New Haven', 'Durham', 'Hartford'],
      id: 'question-eight',
      answer: 3
    }
    ]}

  var message = 'Game Over!';

    $(".startGame").on("click", function (){

    $('.wrapper').show();
    console.log('hello');

    $(this).hide();
  });

    var number = 30;
    $('#timeLeft').on('click', run);

    function decrement(){
        
        number--;
       
        $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
        
        if (number === 0){
        
        stop();

        $('#message').html('time up!');
        checkAnswers();
        }
    }

    function run(){
        counter = setInterval(decrement, 1000);
    }
    
    function stop(){
    
        clearInterval(counter);
    }

    run();

function formTemplate(data) {

  var qString = "<form id='questionOne'>"+ data.question +"<br>";

  var possibles = data.possibles;

  for (var i = 0; i < possibles.length; i++) {
    var possible = possibles[i];
    console.log(possible);
    qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;

  }
  return qString + "</form>";
}
window.formTemplate = formTemplate;

function buildQuestions(){
  var questionHTML = ''
  for (var i = 0; i<game.questions.length; i++) {
    questionHTML = questionHTML + formTemplate(game.questions[i]);
  }
  $('#questions-container').append(questionHTML);

}

function isCorrect(question){
  var answers = $('[name='+question.id+']');
  var correct = answers.eq(question.answer);
  var isChecked = correct.is(':checked');
  return isChecked;
}

buildQuestions();

function resultsTemplate(question){
  var htmlBlock = '<div>'
  htmlBlock = htmlBlock + question.question + ': ' + isChecked;
  return htmlBlock + "</div>";
}

function checkAnswers (){

  var resultsHTML = '';
  var guessedAnswers = [];
  var correct = 0;
  var incorrect = 0;
  var unAnswered =0

  for (var i = 0; i<game.questions.length; i++) {
    if (isCorrect(game.questions[i])) {
      correct++;
    } else {

      if (checkAnswered(game.questions[i])) {
        incorrect++;
      } else {
        unAnswered++;
      }
    }
  }

  $('.results').html('Correct: '+correct+ "<br>" +'Incorrect: '+incorrect+ "<br>" +'Unanswered: '+unAnswered);
}

function checkAnswered(question){
  var anyAnswered = false;
  var answers = $('[name='+question.id+']');

  for (var i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      anyAnswered = true;
    }
  }
  return anyAnswered;
}

  $('#doneButton').on('click', function() {
  checkAnswers();
  stop();
  $("#messageDiv").html("Game Over!");
  })
});