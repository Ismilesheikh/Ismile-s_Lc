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
// Question No 1 style change
document.getElementById("q1_ans1").addEventListener('click', function() {
  handleButtonClick("q1_ans1", false);
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
});


// Add this element to your HTML to display the counter
// <p id="correctCounter">Correct Answers: 0</p>