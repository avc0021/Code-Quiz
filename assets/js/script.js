const startButton = document.getElementById('start-btn')
const quizTitle = document.getElementById('quiz-title')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click',startGame)


//Start quiz after click start button
function startGame() {
    startButton.classList.add('hide')
    quizTitle.classList.add('hide')
    questionContainerElement.classList.remove('hide')

}


//Questions
function setNextQuestion(){

}

function selectAnswer(){


}
//Enter initals to save highscore