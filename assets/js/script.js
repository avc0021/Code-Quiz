const startButton = document.getElementById('start-btn')
const quizTitle = document.getElementById('quiz-title')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click',startGame)


//Start quiz and remove title/start button
function startGame() {
    startButton.classList.add('hide')
    quizTitle.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


//Questions
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(){


}

const questions = [
    {
        question:'Conditional Statements must include which of the following?',
        answer: [
            { text: 'banana', correct: false },
            { text: 'for', correct: false },
            { text: 'if', correct: true },
            { text: 'var', correct: false }

        ]

    }
]
//Enter initals to save highscore