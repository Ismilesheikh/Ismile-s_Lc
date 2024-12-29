

async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbygr8n8K9pNjuIJMfxvum3O5XchYsP4qP3gK4fONc9WEREDVrUjivD76cCt64IOBzlh/exec',
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

  //student iii-------

  document.getElementById('welcome3').innerHTML =data[65].D;

  document.getElementById('name3').innerHTML =data[65].D;
  document.getElementById('rel3').innerHTML =data[66].C;
  document.getElementById('pname3').innerHTML = data[66].D;
  document.getElementById('dob3').innerHTML =data[67].D;
  document.getElementById('mno3').innerHTML = data[68].D;
  document.getElementById('class3').innerHTML = data[69].D;
  document.getElementById('sec3').innerHTML = data[70].D;
  document.getElementById('rate3').innerHTML = data[71].D;

  document.getElementById('sdate3').innerHTML = data[73].C;
  document.getElementById('today3').innerHTML = data[73].D;
  document.getElementById('tmonths3').innerHTML = data[73].E
  document.getElementById('days3').innerHTML = data[73].F;
document.getElementById('tamount3').innerHTML = data[73].G;
  document.getElementById('tpaid3').innerHTML = data[73].H;
  document.getElementById('due3').innerHTML = data[73].I;

  document.getElementById('pdate13').innerHTML = data[76].D;
  document.getElementById('pamount13').innerHTML = data[76].E;

  document.getElementById('pdate23').innerHTML = data[77].D;
  document.getElementById('pamount23').innerHTML = data[77].E;

  document.getElementById('pdate33').innerHTML = data[78].D;
  document.getElementById('pamount33').innerHTML = data[78].E;

  document.getElementById('pdate43').innerHTML = data[79].D;
  document.getElementById('pamount43').innerHTML = data[79].E;

  document.getElementById('pdate53').innerHTML = data[80].D;
  document.getElementById('pamount53').innerHTML = data[80].E;

  document.getElementById('pdate63').innerHTML = data[81].D;
  document.getElementById('pamount63').innerHTML = data[81].E;

document.getElementById('pdate73').innerHTML = data[82].D;
  document.getElementById('pamount73').innerHTML = data[82].E;

  document.getElementById('total3').innerHTML = data[88].E;
  
});






    //password for student iii

document.getElementById('button3').addEventListener('click', function(){
  let correctPassword ="Ismile@2024";
  let Password = document.getElementById("psw3").value;
  if(correctPassword===Password){
      document.getElementById("student3").style.display="block";
      document.getElementById("validate3").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("student3").style.display="block";
    document.getElementById("validate3").style.display="none";
   }

   else{document.getElementById("alert3").innerHTML="Enter Correct Password";}
  }

  });

  