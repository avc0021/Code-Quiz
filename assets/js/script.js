const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const quizTitle = document.getElementById('quiz-title')
const timeLeft = document.getElementById('time-left')
let seconds = document.getElementById('seconds')
let quizEnd = document.getElementById('game-over')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById ('answer-buttons')
i = 50;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)

// Timer starts at 50secs
function countDown() {
    i = i - 1;
    if (i < 50) {
        timeLeft.innerHTML= i;
    } 
    if (i < 1) {
        window.clearInterval(update);
        quizEnd.classList.remove('hide');
    }
}
update = setInterval("countDown()",1000)

//Starts quiz and remove title/start button and begin timer
function startGame() {
    startButton.classList.add('hide')
    quizTitle.classList.add('hide')
    quizEnd.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    
    timeLeft.classList.remove('hide')
    seconds.classList.remove('hide')
    questionContainerElement.classList.remove('hide')
    
    countDown()
    setNextQuestion()
}

// Moves to next question
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Presents the question after clicking start
function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innertext = answer.text
        button.classList.add('btn')
        if (answer.correct) {
           button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
// Selected answer presents Wrong / Correct text
function selectAnswer(){

}

// Questions for quiz
const questions = [
    {
        question:'Conditional Statements must include which of the following?',
        answer: [
            { text: 'banana', correct: false },
            { text: 'for', correct: false },
            { text: 'if', correct: true },
            { text: 'var', correct: false }

        ]

    },
    {
        question:'Select the option that best describes a variable.',
        answer: [
            { text: 'A named location for a value that gets store in a browser memory when ran.', correct: true },
            { text: 'Wrapped in double quotes.', correct: false },
            { text: 'First letter of first word is not capalized and every word after starts with capalized letter.', correct: false },
            { text: 'Executes the callback repeatedly at set interval.', correct: false }

        ]

    },
    {
        question:'Which of the following selections are NOT a data type?',
        answer: [
            { text: 'String', correct: false },
            { text: 'Boolean', correct: false },
            { text: 'camelCasing', correct: true },
            { text: 'Null', correct: false }

        ]

    },
    {
        question:'When referencing a house, a web devloper may consider HTML as the foundation/frame and CSS as the design. What would a web devloper consider Javascript? ',
        answer: [
            { text: 'Grotto', correct: false },
            { text: 'Floor', correct: false },
            { text: 'Electricity', correct: true },
            { text: 'Water', correct: false }

        ]

    },
    {
        question:'Which one of the following selections best describe setInterval?',
        answer: [
            { text: 'Sync local repository with remote repository.', correct: false },
            { text: 'Executes callback after set delay.', correct: false },
            { text: 'Executes the call back repeadtly at a set interval.', correct: true },
            { text: 'Navigates to different branch in repository.', correct: false }

        ]

    }
]
//Enter initals to save highscore