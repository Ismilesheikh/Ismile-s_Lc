const picWindow=document.getElementById("picWindow");
let profileButton = document.getElementById('profile');

profileButton.addEventListener('click', function() {
  picWindow.style.display = 'block';
});

document.getElementById('back').addEventListener('click',function() {
  picWindow.style.display='none';
})
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

finally{
document.getElementById('loader').style.display='none';}

  }

  getUsers().then(data => {

const profile_Img =document.createElement('Img');
profile_Img.src=data[5].profileImage;
profile.appendChild(profile_Img);
const winPic=document.createElement('img');
winPic.src=data[5].profileImage;
picWindow.appendChild(winPic);

const time=new Date();
let sec = time.getSeconds();
console.log(sec);

    let mainContainer = document.getElementById('main');
    let mainImage = document.createElement('img');
    if(sec>40){
      mainImage.src =data[5].Image;
    }
    else if(sec>20){
      mainImage.src = data[6].Image;
    }

    else{
      mainImage.src = data[7].Image;
    }
    mainContainer.appendChild(mainImage);


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
let newsf=news(data[i+23].Link,data[i+23].Text,i);
}


let totalNotice=data[3].Total;

function notice(noticeLink,noticeText,noticeNo){
let noticeContainer = document.getElementById('noticeContainer');
let noticeLinks = document.createElement('a');
noticeLinks.href = noticeLink;
noticeContainer.appendChild(noticeLinks);
const noticeButton = document.createElement('button');
const buttonText = document.createElement('p');
buttonText.innerHTML = `${noticeNo}.${noticeText}`;
noticeButton.appendChild(buttonText);
noticeLinks.appendChild(noticeButton);

}
for(let i=1;i<=totalNotice;i++){
let noticef=notice(data[i+2].Link,data[i+2].Text,i);

}

let infoDiv=document.getElementById('infoDiv');
const infoPic=document.createElement('img');
  infoPic.src=data[6].profileImage;
  infoDiv.appendChild(infoPic);


 function myInfo(infoText,infoId){
  const infoP=document.createElement('p');
  infoP.innerText=infoText;
  infoP.className=infoId;
  infoDiv.appendChild(infoP);
}

let totalInfo=data[6].totalInfo;
for(let i=1;i<=totalInfo;i++){

  let myInfoF=myInfo(data[i+5].infoText,data[i+5].infoId);
}


let invest=document.getElementById('invest');
function share(shareTexts){
const shareDiv=document.createElement('div');
shareDiv.className='shareDiv';
shareTexts.forEach((shareText,index)=>{
const shareBut=document.createElement('button');
shareBut.className='shareButton';
shareBut.innerText=shareText;
shareDiv.appendChild(shareBut);
});
  
invest.appendChild(shareDiv);
  
}
for (let i=0;i<parseInt(data[16].shareName);i++){
let shareTexts=[data[i+18].shareName,data[i+18].sharePrice,data[i+18].totalSharePrice];
  let sharef=share(shareTexts);
}


function investInfo(buttonId,investText){
const investButton=document.createElement('button');
investButton.id=buttonId;
investButton.className=buttonId;
investButton.innerText=investText;
invest.appendChild(investButton);}

for(let i=1;i<=parseInt(data[4].In);i++){
  let investInfo1=investInfo(`button${i}`,data[i+4].In)

}
  if(Number(data[7].In)<0){
    document.getElementById('button3').style.color='red';
    document.getElementById('button4').style.color='red';

  }
  else {
    document.getElementById('button3').style.color='green';
    document.getElementById('button4').style.color='green';
  }

  document.getElementById('myName').addEventListener('click',function() {
    document.getElementById('myInfo').style.display='block';
  })

  document.getElementById('back2').addEventListener('click', function() {
  document.getElementById('myInfo').style.display = 'none';
})


      }
     );

function UpdateTime() {

let x = new Date();
let y = new Date("2025-03-03 20:47:00");
let z = new Date("2025-03-25 33:30:00");
let hour=parseInt( (Number(x)-Number(y))/(1000*60*60));
let hour2=parseInt( (Number(x)-Number(z))/(1000*60*60));
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
counter.style.color='green';

if(hour2<7*24){document.getElementById('mas').innerHTML=`${hour2} <=> ${7*24-hour2}`;
  document.getElementById('mas').style.color='red';}

else{document.getElementById('mas').innerHTML=`Welldone its been ${parseInt(hour2/24)} days mean ✂️👦💇‍♂️`;
document.getElementById('mas').style.color='green';}


};

setInterval(UpdateTime,1000);