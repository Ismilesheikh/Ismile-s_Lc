
function UpdateTime() {

let x = new Date();
let y = new Date("2025-01-10 10:17:00");
let hour=`0${parseInt( (Number(x)-Number(y))/(1000*60*60))}`.slice(-2);
let min =`0${parseInt( (Number(x)-Number(y))/(1000*60))-hour*60}`.slice(-2);
let sec =`0${parseInt( (Number(x)-Number(y))/(1000))-hour*60*60-min*60}`.slice(-2);
if(hour>7*24){document.getElementById('counter').innerHTML="It's Time to Cut You Hairs";}
else
{document.getElementById('counter').innerHTML='The Hours:'+ hour+ ':'+ min +':'+sec;};

counter.style.color='green';};

setInterval(UpdateTime,1000);
