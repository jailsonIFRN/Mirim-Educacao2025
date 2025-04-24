const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const options = document.getElementById('options');
const answerElement = document.getElementById('answer');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');

let currentQuestion = 0;

const questions = [
    { question: '2 x 0 = ?', options: ['2', '0', '1'], answer: '0' },
    { question: '2 x 1 = ?', options: ['2', '4', '6'], answer: '2' },
    { question: '2 x 2 = ?', options: ['2', '4', '6'], answer: '4' },
    { question: '2 x 3 = ?', options: ['3', '9', '6'], answer: '6' },
    { question: '2 x 4 = ?', options: ['8', '9', '12'], answer: '8' },
    { question: '2 x 5 = ?', options: ['5', '15', '10'], answer: '10' },
    { question: '2 x 6 = ?', options: ['12', '8', '18'], answer: '12' },
    { question: '2 x 7 = ?', options: ['7', '16', '14'], answer: '14' },
    { question: '2 x 8 = ?', options: ['8', '18', '16'], answer: '16' },
    { question: '2 x 9 = ?', options: ['18', '16', '27'], answer: '18' },
    { question: '2 x 10 = ?', options: ['10', '20', '30'], answer: '20' },
    
    { question: '0 x 2 = ?', options: ['2', '1', '0'], answer: '0' },
    { question: '1 x 2 = ?', options: ['2', '4', '6'], answer: '2' },
    { question: '3 x 2 = ?', options: ['3', '9', '6'], answer: '6' },
    { question: '4 x 2 = ?', options: ['8', '9', '12'], answer: '8' },
    { question: '5 x 2 = ?', options: ['5', '15', '10'], answer: '10' },
    { question: '6 x 2 = ?', options: ['12', '8', '18'], answer: '12' },
    { question: '7 x 2 = ?', options: ['7', '16', '14'], answer: '14' },
    { question: '8 x 2 = ?', options: ['8', '18', '16'], answer: '16' },
    { question: '9 x 2 = ?', options: ['18', '16', '27'], answer: '18' },
    { question: '10 x 2 = ?', options: ['10', '20', '30'], answer: '20' },
    
    { question: '3 x 0 = ?', options: ['2', '3', '0'], answer: '0' },
    { question: '3 x 1 = ?', options: ['2', '3', '6'], answer: '3' },
    { question: '3 x 2 = ?', options: ['2', '4', '6'], answer: '6' },
    { question: '3 x 3 = ?', options: ['9', '6', '12'], answer: '9' },
    { question: '3 x 4 = ?', options: ['4', '9', '12'], answer: '12' },
    { question: '3 x 5 = ?', options: ['5', '10', '15'], answer: '15' },
    { question: '3 x 6 = ?', options: ['6', '12', '18'], answer: '18' },
    { question: '3 x 7 = ?', options: ['7', '13', '21'], answer: '21' },
    { question: '3 x 8 = ?', options: ['8', '16', '24'], answer: '24' },
    { question: '3 x 9 = ?', options: ['9', '27', '29'], answer: '27' },
    { question: '3 x 10 = ?', options: ['10', '20', '30'], answer: '30' },

    { question: '0 x 3 = ?', options: ['2', '3', '0'], answer: '0' },
    { question: '1 x 3 = ?', options: ['2', '3', '6'], answer: '3' },
    { question: '2 x 3 = ?', options: ['2', '4', '6'], answer: '6' },
    { question: '3 x 3 = ?', options: ['9', '6', '12'], answer: '9' },
    { question: '4 x 3 = ?', options: ['4', '9', '12'], answer: '12' },
    { question: '5 x 3 = ?', options: ['5', '10', '15'], answer: '15' },
    { question: '6 x 3 = ?', options: ['6', '12', '18'], answer: '18' },
    { question: '7 x 3 = ?', options: ['7', '13', '21'], answer: '21' },
    { question: '8 x 3 = ?', options: ['8', '16', '24'], answer: '24' },
    { question: '9 x 3 = ?', options: ['9', '27', '29'], answer: '27' },
    { question: '10 x 3 = ?', options: ['10', '20', '30'], answer: '30' },
    
    
    { question: '4 x 0 = ?', options: ['4', '1', '0'], answer: '0' },
    { question: '4 x 1 = ?', options: ['5', '6', '4'], answer: '4' },
    { question: '4 x 2 = ?', options: ['6', '8', '14'], answer: '8' },
    { question: '4 x 3 = ?', options: ['10', '14', '12'], answer: '12' },
    { question: '4 x 4 = ?', options: ['14', '14', '16'], answer: '16' },
    { question: '4 x 5 = ?', options: ['18', '16', '20'], answer: '20' },
    { question: '4 x 6 = ?', options: ['24', '20', '16'], answer: '24' },
    { question: '4 x 7 = ?', options: ['26', '28', '24'], answer: '28' },
    { question: '4 x 8 = ?', options: ['30', '30', '32'], answer: '32' },
    { question: '4 x 9 = ?', options: ['36', '34', '32'], answer: '36' },
    { question: '4 x 10 = ?', options: ['38', '38', '40'], answer: '40' },

    { question: '0 x 4 = ?', options: ['4', '1', '0'], answer: '0' },
    { question: '1 x 4 = ?', options: ['5', '6', '4'], answer: '4' },
    { question: '2 x 4 = ?', options: ['6', '8', '14'], answer: '8' },
    { question: '3 x 4 = ?', options: ['10', '14', '12'], answer: '12' },
    { question: '4 x 4 = ?', options: ['14', '14', '16'], answer: '16' },
    { question: '5 x 4 = ?', options: ['18', '16', '20'], answer: '20' },
    { question: '6 x 4 = ?', options: ['24', '20', '16'], answer: '24' },
    { question: '7 x 4 = ?', options: ['26', '28', '24'], answer: '28' },
    { question: '8 x 4 = ?', options: ['30', '30', '32'], answer: '32' },
    { question: '9 x 4 = ?', options: ['36', '34', '32'], answer: '36' },
    { question: '10 x 4 = ?', options: ['38', '38', '40'], answer: '40' }
];

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    for (let i = 0; i < options.children.length; i++) {
        options.children[i].textContent = question.options[i];
    }
    answerElement.textContent = ""; // Limpar resposta anterior
}

function checkAnswer(option) {
    const selectedAnswer = option.textContent;
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedAnswer === correctAnswer) {
        answerElement.textContent = "Resposta correta!";
        answerElement.classList.remove('incorrect');
        answerElement.classList.add('correct');
        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(showQuestion, 1000); // Espera 1 segundo antes de exibir a próxima pergunta
        } else {
            showResult();
        }
    } else {
        answerElement.textContent = "Resposta incorreta. Tente novamente.";
        answerElement.classList.remove('correct');
        answerElement.classList.add('incorrect');
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultElement.textContent = "Parabéns! Você completou todas as perguntas.";
}

function restartGame() {
    currentQuestion = 0;
    resultContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    showQuestion();
}

// Inicializar o jogo
showQuestion();
