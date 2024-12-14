function fun(){
let correctPassword ="Ismile";
let Password=document.getElementById("psw").value;
if(correctPassword===Password){
    document.getElementById("students").style.display="block";
    document.getElementById("validate").style.display="none";
}
else{alert("enter correct password");}


}