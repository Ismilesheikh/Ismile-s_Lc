

async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbytVmk8MTSdpq9pcO3LoFYFqJkCUl81b3ojjt46__fo1G5ZZO08VIQunWUTg9rHbVhv/exec',
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


  //student ii-------

  document.getElementById('welcome2').innerHTML =data[35].D;

  document.getElementById('name2').innerHTML =data[35].D;
  document.getElementById('rel2').innerHTML =data[36].C;
  document.getElementById('pname2').innerHTML = data[36].D;
  document.getElementById('dob2').innerHTML =data[37].D;
  document.getElementById('mno2').innerHTML = data[38].D;
  document.getElementById('class2').innerHTML = data[39].D;
  document.getElementById('sec2').innerHTML = data[40].D;
  document.getElementById('rate2').innerHTML = data[41].D;

  document.getElementById('sdate2').innerHTML = data[43].C;
  document.getElementById('today2').innerHTML = data[43].D;
  document.getElementById('tmonths2').innerHTML = data[43].E
  document.getElementById('days2').innerHTML = data[43].F;
document.getElementById('tamount2').innerHTML = data[43].G;
  document.getElementById('tpaid2').innerHTML = data[43].H;
  document.getElementById('due2').innerHTML = data[43].I;

  document.getElementById('pdate12').innerHTML = data[46].D;
  document.getElementById('pamount12').innerHTML = data[46].E;

  document.getElementById('pdate22').innerHTML = data[47].D;
  document.getElementById('pamount22').innerHTML = data[47].E;

  document.getElementById('pdate32').innerHTML = data[48].D;
  document.getElementById('pamount32').innerHTML = data[48].E;

  document.getElementById('pdate42').innerHTML = data[49].D;
  document.getElementById('pamount42').innerHTML = data[49].E;

  document.getElementById('pdate52').innerHTML = data[50].D;
  document.getElementById('pamount52').innerHTML = data[50].E;

  document.getElementById('pdate62').innerHTML = data[51].D;
  document.getElementById('pamount62').innerHTML = data[51].E;

document.getElementById('pdate72').innerHTML = data[52].D;
  document.getElementById('pamount72').innerHTML = data[52].E;


  document.getElementById('total2').innerHTML = data[58].E

});

//password for student ii
  document.getElementById('button2').addEventListener('click', function(){
    let correctPassword ="Ismile@2024";
    let Password = document.getElementById("psw2").value;
    if(correctPassword===Password){
        document.getElementById("student2").style.display="block";
        document.getElementById("validate2").style.display="none";
    }
  
     else{if(Password=== "7563876753"){
      document.getElementById("student2").style.display="block";
      document.getElementById("validate2").style.display="none";
     }
  
     else{document.getElementById("alert2").innerHTML="Enter Correct Password";}
    }
  
    });