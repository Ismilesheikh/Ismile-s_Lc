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
  const snoP = document.createElement('p');
 snoP.className = 'sno';
  snoP.innerText = `Q${questionId.slice(1)}.`;
  questionDiv.appendChild(snoP);
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
    document.getElementById("chName").innerHTML = data[1].B7;

    // Generate questions and answers
    const questionsContainer = document.getElementById('questionsContainer');
    for (let i = 1; i <=32; i++) {
      totalQuestion=i;
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
    
  

let correctAnswerCounter = 0;

function incrementCorrectAnswerCounter() {
  correctAnswerCounter++;
  document.getElementById("correctCounter").innerText = `Correct Answers: ${correctAnswerCounter}/${totalQuestion}`;
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

const correctAnswers = [];
function sum(rightAnswer) {
  return correctAnswers.push(rightAnswer);
}
for(let i=1; i<=totalQuestion;i++){
  rightAnswer=sum(Number(data[2*i+2].Answer6));
}


const correctAnswerss = [3, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]; // Specify correct answers for each question
for (let i = 1; i <=totalQuestion; i++) {
  const correctAnswerIndex = correctAnswers[i - 1]; // Get the correct answer index for the current question
  
  for (let j = 1; j <= 4; j++) {
    const isCorrect = (j === correctAnswerIndex);
    document.getElementById(`q${i}_ans${j}`).addEventListener('click', function() {
      handleButtonClick(`q${i}_ans${j}`, isCorrect);
    });
  }
  
  for (let j = 1; j <= 4; j++){
    document.getElementById(`q${i}_ans${j}`).addEventListener('click', function() {
document.getElementById(`q${i}_ans${correctAnswerIndex}`).disabled = true;
    })
  }
  

  document.getElementById(`q${i}_ans`).addEventListener('click', function() {
    document.getElementById(`q${i}_ans`).style.background = 'purple';
    document.getElementById(`q${i}_ans`).style.color = 'white';
    document.getElementById(`q${i}_ans`).innerHTML = "Answer shown";
    document.getElementById(`q${i}_ans${correctAnswerIndex}`).style.background = 'lightgreen';
    document.getElementById(`q${i}_ans${correctAnswerIndex}`).style.color = 'white';
    document.getElementById(`q${i}_ans${correctAnswerIndex}`).disabled = true;
  });
  
  
}




}


});