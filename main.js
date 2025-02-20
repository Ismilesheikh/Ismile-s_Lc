
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
