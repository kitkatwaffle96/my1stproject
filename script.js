const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  
  // GENERAL KNOWLEDGE OF INDIA
  {
    question: 'Whoch Article of the Constitution defines the term state in Indian context?',
    answers: [
      { text: 'Article 17', correct: false },
      { text: 'Article 12', correct: true },
      { text: 'Article 20', correct: false },
      { text: 'Article 15', correct: false }
    ]
  },
  {
    question: 'Who was the first Indian to win the World Amateur Billiards title?',
    answers: [
      { text: 'Michael Jones', correct: false },
      { text: 'Manoj Kothari', correct: false },
      { text: 'Wilson Jones', correct: true },
      { text: 'Geet Sethi', correct: false }
    ]
  },
  {
    question: 'By which Constitutional Amendment Act was the number of Lok Sabha seats increased from 525 to 545?',
    answers: [
      { text: 'The Forty-second Amendment Act, 1978', correct: false },
      { text: 'The Twientieth Amendment Act, 1966', correct: false },
      { text: 'Thirty-first Constitutiona Amendment Act, 1978', correct: true },
      { text: 'none of the above', correct: false }
    ]
  },
  {
    question: 'Article 169 of the Constitution allows Parliament to either create or abolish:',
    answers: [
      { text: 'Legislative Councils in States', correct: true },
      { text: 'Specifies the number of seats for the Lok Sabha', correct: false },
      { text: 'Specifies the number of seats for the Rajya Sabha', correct: false },
      { text: 'Specifies Fundamental duties', correct: false }
    ]
  },
  {
    question: 'Whoch Article of the Constitution of india lays down that any section of the citizens shall have the right to conserve its distinct language, script or culture ?',
    answers: [
      { text: 'Article 21', correct: false },
      { text: 'Article 19', correct: false },
      { text: 'Article 39', correct: false },
      { text: 'Article 29', correct: true }
    ]
  },
  {
    question: 'Income tax in India was introduced by:',
    answers: [
      { text: 'William Jones', correct: false },
      { text: 'James Wilson', correct: true },
      { text: 'Nicholas Kaldor', correct: false },
      { text: 'Mahavir Tyagi', correct: false }
    ]
  },
  {
    question: 'Securities and Exchange /board of India (SEBI) was established on:',
    answers: [
      { text: 'April 12, 1982', correct: false },
      { text: 'April 12, 1988', correct: true },
      { text: 'July 9, 1985', correct: false },
      { text: 'July 5, 1992', correct: false }
    ]
  },
  {
    question: 'Indian National Song was written by:',
    answers: [
      { text: 'Pingali Venkayya', correct: false },
      { text: 'Dr Bhimrao Ambedkar', correct: false },
      { text: 'Rabindranath Tagore', correct: false },
      { text: 'Bankim Chandra Chatterjee', correct: true }
    ]
  },
  {
    question: 'The oldest among the spoken literary languages of South India is:',
    answers: [
      { text: 'Kannada', correct: false },
      { text: 'Tamil language', correct: true },
      { text: 'Malyalam', correct: false },
      { text: 'Telugu', correct: false }
    ]
  },
  {
    question: 'Who wrote the book The Wonder that was India ',
    answers: [
      { text: 'A.L. Baansal', correct: true },
      { text: 'R.K. Mehta', correct: false },
      { text: 'Jawahar Lal Nehru', correct: false },
      { text: 'J. Joshi', correct: false }
    ]
  }
]
