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

  // Create and append the custom button
  const checkButton = document.createElement('button');
  checkButton.className = 'checkButton';
  checkButton.id = `${questionId}_ans`;
  checkButton.innerText = 'See Answer';
  queAnsDiv.appendChild(checkButton);

  return queAnsDiv;
}

getUsers().then(data => {
  if (data && data.length > 0) {
    // Set chapter name
    document.getElementById("chName").innerHTML = data[1].B6;

    // Generate questions and answers
    const questionsContainer = document.getElementById('questionsContainer');
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
  }


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
}// Question No 1 style change
document.getElementById("q1_ans1").addEventListener('click', function() {
  handleButtonClick("q1_ans1", true);
});

document.getElementById("q1_ans2").addEventListener('click', function() {
  handleButtonClick("q1_ans2", false);
});

document.getElementById("q1_ans3").addEventListener('click', function() {
  handleButtonClick("q1_ans3", false);
});

document.getElementById("q1_ans4").addEventListener('click', function() {
  handleButtonClick("q1_ans4", false);
});

document.getElementById("q1_ans").addEventListener('click', function() {
    document.getElementById("q1_ans").style.background = 'purple';
    document.getElementById("q1_ans").style.color = 'white';
  document.getElementById("q1_ans").innerHTML = "Answer shown";
  document.getElementById("q1_ans1").style.background = 'green';
  document.getElementById("q1_ans1").style.color = 'white';
  document.getElementById("q1_ans1").disabled = "true";
});


});