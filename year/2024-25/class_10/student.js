

async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbwXfG04KKDbgq_2Kq287Rh2ijmJicqKYZv5JrUJA2mJnaUZfjMATxecDZaADo9e1WOR/exec',
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

document.getElementById('welcome').innerHTML =data[5].D;
  const name1 = document.getElementById('name1');

  const pname1 = document.getElementById('pname1');
  
  name1.innerHTML =data[5].D;
document.getElementById('rel1').innerHTML =data[6].C;
  pname1.innerHTML = data[6].D;
  document.getElementById('dob1').innerHTML =data[7].D;
  document.getElementById('mno1').innerHTML = data[8].D;
  document.getElementById('class1').innerHTML = data[9].D;
  document.getElementById('sec1').innerHTML = data[10].D;
  document.getElementById('rate1').innerHTML = data[11].D;
  document.getElementById('sdate1').innerHTML = data[13].C;
  document.getElementById('today1').innerHTML = data[13].D;
  document.getElementById('tmonths1').innerHTML = data[13].E
  document.getElementById('days1').innerHTML = data[13].F;
document.getElementById('tamount1').innerHTML = data[13].G;
  document.getElementById('tpaid1').innerHTML = data[13].H;
  document.getElementById('due1').innerHTML = data[13].I;

  document.getElementById('pdate11').innerHTML = data[16].D;
  document.getElementById('pamount11').innerHTML = data[16].E;

  document.getElementById('pdate21').innerHTML = data[17].D;
  document.getElementById('pamount21').innerHTML = data[17].E;

  document.getElementById('pdate31').innerHTML = data[18].D;
  document.getElementById('pamount31').innerHTML = data[18].E;

  document.getElementById('pdate41').innerHTML = data[19].D;
  document.getElementById('pamount41').innerHTML = data[19].E;

  document.getElementById('pdate51').innerHTML = data[20].D;
  document.getElementById('pamount51').innerHTML = data[20].E;

  document.getElementById('pdate61').innerHTML = data[21].D;
  document.getElementById('pamount61').innerHTML = data[21].E;

document.getElementById('pdate71').innerHTML = data[22].D;
  document.getElementById('pamount71').innerHTML = data[22].E;



  
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


document.getElementById('button1').addEventListener('click', function(){
  let correctPassword ="Ismile";
  let Password = document.getElementById("psw").value;
  if(correctPassword===Password){
      document.getElementById("students").style.display="block";
      document.getElementById("validate").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("students").style.display="block";
    document.getElementById("validate").style.display="none";
   }

   else{document.getElementById("alert").innerHTML="Enter Correct Password";}
  }

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
