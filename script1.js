
const QUESTIONS = [
  {
    q: "Coulomb’s law gives the force between:",
    options: [
      "Two moving charges",
      "Two stationary point charges",
      "Two magnetic poles",
      "A charge and a current"
    ],
    answerIndex: 1
  },
  {
    q: "Kirchhoff’s Current Law (KCL) is based on:",
    options: [
      "Conservation of momentum",
      "Conservation of energy",
      "Conservation of charge",
      "Newton’s third law"
    ],
    answerIndex: 2
  },
  {
    q: "The SI unit of electric field is:",
    options: [
      "Newton",
      "Volt",
      "Newton/Coulomb",
      "Joule/Coulomb"
    ],
    answerIndex: 2
  },
  {
    q: "Ohm’s law is valid only if:",
    options: [
      "Temperature is constant",
      "Voltage is constant",
      "Current is very high",
      "Resistance is zero"
    ],
    answerIndex: 0
  },
  {
    q: "The capacitance of a parallel plate capacitor is given by:",
    options: [
      "C = ε₀ A / d",
      "C = d / (ε₀ A)",
      "C = ε₀ d / A",
      "C = A / (d ε₀)"
    ],
    answerIndex: 0
  }
];

const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDiv = document.getElementById('result');

function buildQuiz() {
  quizDiv.innerHTML = '';
  QUESTIONS.forEach((item, qIndex) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    const qText = document.createElement('p');
    qText.className = 'question-text';
    qText.textContent = `${qIndex + 1}. ${item.q}`;
    card.appendChild(qText);

    
    const optionsContainer = document.createElement('div');
    optionsContainer.style.display = 'flex';
    optionsContainer.style.flexDirection = 'column';
    optionsContainer.style.gap = '8px';

    item.options.forEach((opt, optIndex) => {
      const label = document.createElement('label');
      label.className = 'option';
      
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${qIndex}`;
      input.value = optIndex;
      input.setAttribute('aria-label', opt);

      const span = document.createElement('span');
      span.textContent = opt;

      label.appendChild(input);
      label.appendChild(span);
      optionsContainer.appendChild(label);

    
      label.addEventListener('click', () => {
        input.checked = true;
      });
    });

    card.appendChild(optionsContainer);
    quizDiv.appendChild(card);
  });


  resultDiv.textContent = '';
}

function gradeQuiz() {
  let score = 0;
  const cards = document.querySelectorAll('.question-card');
  cards.forEach((card, qIndex) => {
    const chosen = card.querySelector('input[type="radio"]:checked');
    const options = Array.from(card.querySelectorAll('.option'));
    
    options.forEach(o => { o.classList.remove('correct','wrong'); });

    const correctIndex = QUESTIONS[qIndex].answerIndex;
 
    const correctOptionLabel = options[correctIndex];
    correctOptionLabel.classList.add('correct');

    if (chosen) {
      const chosenIndex = Number(chosen.value);
      if (chosenIndex === correctIndex) {
        score++;
      } else {
        
        options[chosenIndex].classList.add('wrong');
      }
    } else {
     
    }
  });

  resultDiv.textContent = `You scored ${score} out of ${QUESTIONS.length}.`;
}

submitBtn.addEventListener('click', () => {
  gradeQuiz();
  
  submitBtn.disabled = true;
  Array.from(document.querySelectorAll('input[type="radio"]')).forEach(i => i.disabled = true);
});

resetBtn.addEventListener('click', () => {

  buildQuiz();
  submitBtn.disabled = false;
  resultDiv.textContent = '';
});


buildQuiz();
