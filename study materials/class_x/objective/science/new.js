
async function getUsers() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyujs1_9BWkbFvUmxKcQxQZdhlD13gvqzuO2LfOrTXn2frViyq1qf-Va486qgm7q1w/exec',
        {
          method: 'GET',
        },
      );
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  function createQuestionElement(questionId, questionText, answers) {
    const queAnsDiv = document.createElement('div');
    queAnsDiv.className = 'que_ans';
  
    const questionDiv = document.createElement('div');
    questionDiv.className = 'que';
    const questionP = document.createElement('p');
    questionP.id = questionId;
    questionP.innerText = questionText;
    questionDiv.appendChild(questionP);
  
    const answersDiv = document.createElement('div');
    answersDiv.className = 'ans';
  
    answers.forEach((answer, index) => {
      const answerButton = document.createElement('button');
      answerButton.id = `${questionId}_ans${index + 1}`;
      answerButton.innerText = answer;
      answersDiv.appendChild(answerButton);
    });
  
    queAnsDiv.appendChild(questionDiv);
    queAnsDiv.appendChild(answersDiv);
  
    return queAnsDiv;
  }
  
  getUsers().then(data => {
    if (data && data.length > 0) {
      // Set chapter name
      document.getElementById("chName").innerHTML = data[1].B6;
  
      // Generate questions and answers
      const questionsContainer = document.createElement('div');
      for (let i = 1; i <= 12; i++) {
        const questionText = data[2 * i + 1].Q6;
        const answers = [
          data[2 * i + 2].A6,
          data[2 * i + 2].B6,
          data[2 * i + 2].C6,
          data[2 * i + 2].D6,
        ];
        const questionElement = createQuestionElement(`q${i}`, questionText, answers);
        questionsContainer.appendChild(questionElement);
      }
  
      document.body.appendChild(questionsContainer);
    }
  });












let correctAnswerCounter = 0;

function incrementCorrectAnswerCounter() {
  correctAnswerCounter++;
  document.getElementById("correctCounter").innerText = `Correct Answers: ${correctAnswerCounter}`;
}

function handleButtonClick(buttonId, isCorrect) {
  const button = document.getElementById(buttonId);
  button.style.background = isCorrect ? 'green' : 'red';
  button.style.color = 'white';
  button.disabled = true;
  if (isCorrect) {
    incrementCorrectAnswerCounter();
  }
}

document.getElementById("ans4_e").addEventListener('click', function() {
  document.getElementById("ans4_e").innerHTML = ans_seen;
});

// Question No 5 style change
document.getElementById("ans5_a").addEventListener('click', function() {
  handleButtonClick("ans5_a", false);
});

document.getElementById("ans5_b").addEventListener('click', function() {
  handleButtonClick("ans5_b", false);
});

document.getElementById("ans5_c").addEventListener('click', function() {
  handleButtonClick("ans5_c", false);
});

document.getElementById("ans5_d").addEventListener('click', function() {
  handleButtonClick("ans5_d", false);
});

document.getElementById("ans5_e").addEventListener('click', function() {
    document.getElementById("ans5_e").style.background = 'purple';
    document.getElementById("ans5_e").style.color = 'white';
    document.getElementById("ans5_c").style.background = 'green';
  document.getElementById("ans5_e").innerHTML = ans_seen;
});

// Add this element to your HTML to display the counter
// <p id="correctCounter">Correct Answers: 0</p>