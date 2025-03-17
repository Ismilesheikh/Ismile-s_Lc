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
finally{
document.getElementById('loader').style.display='none';}

  
}

function createQuestionElement(questionId, questionText, answers,imgLinks) {
  const queAnsDiv = document.createElement('div');
  queAnsDiv.className = 'que_ans';

  const questionDiv = document.createElement('div');
  questionDiv.className = 'que';
  const questionP = document.createElement('p');
  questionP.id = questionId;
  questionP.innerText = questionText;
  const imgDiv=document.createElement('div');
  imgDiv.className='imgDiv';
  const image=document.createElement('img');
  image.id=`${questionId}_img`;
  image.src=imgLinks;
  image.alt='';
  
  const snoP = document.createElement('p');
 snoP.className = 'sno';
  snoP.innerText = `Q${questionId.slice(1)}.`;
  questionDiv.appendChild(snoP);
  questionDiv.appendChild(questionP);
imgDiv.appendChild(image);
  const answersDiv = document.createElement('div');
  answersDiv.className = 'ans';

  answers.forEach((answer, index) => {
    const answerButton = document.createElement('button');
    answerButton.id = `${questionId}_ans${index + 1}`;
    answerButton.innerText = answer;
    answersDiv.appendChild(answerButton);
  });

  queAnsDiv.appendChild(questionDiv);
  queAnsDiv.appendChild(imgDiv);
  queAnsDiv.appendChild(answersDiv);

  // Create and append the custom button
  const checkButton = document.createElement('button');
  checkButton.className = 'checkButton';
  checkButton.id = `${questionId}_ans`;
  checkButton.innerText = 'See Answer';
  queAnsDiv.appendChild(checkButton);

  return queAnsDiv;
}
let img_links=['','','','','https://th.bing.com/th/id/R.c7e89b930f8aa73cf72d5f167d1d16ed?rik=3obl%2fhI6QdNIMA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2ffree-beautiful-place-wallpaper-hd-173.jpg&ehk=92RRpT4hrYheMDBZkK0HhLLXx9%2fGDjnafeDmbgjE1K8%3d&risl=&pid=ImgRaw&r=0']


getUsers().then(data => {
  if (data && data.length > 0) {
    // Set chapter name
let chName=document.getElementById("chname");
let picContainer=document.getElementById("pPic");
    chName.innerHTML = data[1].B7;
const chPic =document.createElement('img');
chPic.src=data[1].Q7;
chPic.className='chPic';
picContainer.appendChild(chPic);

    let totalQuestion =Number(data[2].Answer7);
    

    // Generate questions and answers
    const questionsContainer = document.getElementById('questionsContainer');
    for (let i = 1; i <=totalQuestion; i++) {
      const questionText = data[2 * i + 1].Q7;
      const answers = [
        data[2 * i + 2].A7,
        data[2 * i + 2].B7,
        data[2 * i + 2].C7,
        data[2 * i + 2].D7,
      ];
      const questionElement = createQuestionElement(`q${i}`, questionText, answers,`${data[2*i+1].D7}`);
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
  rightAnswer=sum(Number(data[2*i+2].Answer7));
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