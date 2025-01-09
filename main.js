
function UpdateTime() {

let x = new Date();
let y = new Date("2025-01-08 23:17:00");
let hour=parseInt( (Number(x)-Number(y))/(1000*60*60));
let min =parseInt( (Number(x)-Number(y))/(1000*60))-hour*60;
let sec =parseInt( (Number(x)-Number(y))/(1000))-hour*60*60-min*60;
if(hour>7*24){document.getElementById('counter').innerHTML="It's Time to Cut You Hairs";}
else
{document.getElementById('counter').innerHTML='The Hours:'+ hour+ ':'+ min +':'+sec;};

counter.style.color='green';};

setInterval(UpdateTime,1000);
