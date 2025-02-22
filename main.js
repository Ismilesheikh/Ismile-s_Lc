async function getUsers() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycby2PYONyCQwdJUYPFifarV1X4AzWJVOJYgkPUwOvmKvYAvId3P9imPl5Or_XIHEJ0e_/exec',
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

  getUsers().then(data => {

    
function news(newsLink,newsText,newsNo){
let newsContainer = document.getElementById('newsContainer');
let newsLinks = document.createElement('a');
newsLinks.href = newsLink;
newsContainer.appendChild(newsLinks);
const newsButton = document.createElement('button');
const buttonText = document.createElement('p');
buttonText.innerHTML = `${newsNo}.${newsText}`;
newsButton.appendChild(buttonText);
newsLinks.appendChild(newsButton);

}
let totalNews =data[23].Total;

for(let i=1;i<=totalNews;i++){
let newsf=news(data[i+22].Link,data[i+22].Text,i);
}


      }
     );

function UpdateTime() {

let x = new Date();
let y = new Date("2025-02-20 13:31:00");
let hour=parseInt( (Number(x)-Number(y))/(1000*60*60));
let min =parseInt( (Number(x)-Number(y))/(1000*60))-hour*60;
let sec =parseInt( (Number(x)-Number(y))/(1000))-hour*60*60-min*60;
let days=parseInt(hour/24);
if(hour.toString().length<2){
hours=`0${hour}`.slice(-2);
}

else{hours=hour;}

if(min.toString().length<2){
mins=`0${min}`.slice(-2);
}

else{mins=min;}


if(sec.toString().length<2){
secs=`0${sec}`.slice(-2);
}

else{secs=sec;}




if(hour>7*24*30){document.getElementById('counter').innerHTML="It's Time to Cut You Hairs";}
else
{document.getElementById('counter').innerHTML='The Hours:'+ hours+ ':'+ mins +':'+secs;};
document.getElementById('days').innerHTML=`Days : Hour 🎂 ${days} : ${hour-24*days}`;
counter.style.color='green';};

setInterval(UpdateTime,1000);
