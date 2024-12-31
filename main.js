let x = new Date();
let y = new Date("2024-12-30 10:00:00");
let hour=parseInt( (Number(x)-Number(y))/(1000*60*60));
let min =parseInt( (Number(x)-Number(y))/(1000*60))-hour*60;
let sec =parseInt( (Number(x)-Number(y))/(1000))-hour*60*60-min*60;

document.getElementById('counter').innerHTML= hour+ ':'+ min +':'+sec;
