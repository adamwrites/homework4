var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro")
var title = document.querySelector(".title")
var currentQuestion = document.querySelector(".currentQuestion");
var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");
var answerContain = document.querySelector(".answerContainer");
var currentQuestionNumber = 1
var questionAnswers = [3,1,4]
var countDown;
var count = 75;
var initials = document.querySelector("#initials")


function checkAnswer(answerID){
    if (questionAnswers[currentQuestionNumber - 1] == answerID){
        alert("Correct!");
    }
    else {
        count = count - 10;
        alert("Wrong answer");   
    }
    currentQuestionNumber++;

    if(currentQuestionNumber == 4){
        finishQuiz()
    }
    else {
        question();
    }
}

function finishQuiz(){
    clearInterval(countDown);
    answerOne.style.display = "none"
    answerTwo.style.display = "none"
    answerThree.style.display = "none"
    answerFour.style.display = "none"
    currentQuestion.textContent = "Highscores:"
    document.querySelector("#submit").style.display = "block"
    initials.style.display = "block"
}

function submit(){
        var scoreList = JSON.parse(localStorage.getItem("scores"));
    if (scoreList == null)
        scoreList = [];
    scoreList.push({initials: initials.value,score: count});
   
    localStorage.setItem("scores", JSON.stringify(scoreList));
}


function startQuiz() {
    console.log("Quiz has started");
    intro.style.display = "none";
    startButton.style.display = "none";
    questionOne();
    startTimer();
}

function startTimer() {
    countDown = setInterval(function(){
         count--;
         var timer = document.querySelector(".timer")
        timer.textContent = "Timer: " + parseInt(count)

        if (count <= 0){
            alert("Game Over");
            clearInterval(countDown);
        }
    }, 1000);
}

function question(){
    switch(currentQuestionNumber){
        case 1:
        questionOne();
        break;
        case 2:
        questionTwo();
        break;
        case 3:
        questionThree();
        break;
    }
}

function questionOne() {
    currentQuestion.textContent = "Commonly used data types do NOT inclued:";
    answerOne.style.display = "list-item";
    answerTwo.style.display = "list-item";
    answerThree.style.display = "list-item";
    answerFour.style.display = "list-item";
    answerOne.textContent = "Strings";
    answerTwo.textContent = "Booleans";
    answerThree.textContent = "Alerts";
    answerFour.textContent = "Numbers";
}

function questionTwo() {
    currentQuestion.textContent = "The condition for an if/else statement is enclosed within:";
    answerOne.textContent = "Parenthesis";
    answerTwo.textContent = "Square Brackets";
    answerThree.textContent = "Quotations";
    answerFour.textContent = "Curly Brackets";
}
function questionThree() {
    currentQuestion.textContent = "Arrays in Javascript can be used to store:";
    answerOne.textContent = "Numbers and Strings";
    answerTwo.textContent = "Other Arrays";
    answerThree.textContent = "Booleans";
    answerFour.textContent = "All of the Above";
}

function answerOneHandler(event) {
    checkAnswer(1);
}
function answerTwoHandler(event) {
    checkAnswer(2);
}
function answerThreeHandler(event) {
    checkAnswer(3);
}
function answerFourHandler(event) {
    checkAnswer(4);
}
startButton.addEventListener("click", startQuiz);
answerOne.addEventListener("click", answerOneHandler);
answerTwo.addEventListener("click", answerTwoHandler);
answerThree.addEventListener("click", answerThreeHandler);
answerFour.addEventListener("click", answerFourHandler);
document.querySelector("#submit").addEventListener("click", submit);