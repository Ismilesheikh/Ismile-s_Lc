

async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzJThb9cdFmGT9AaWXdiTc_byEv2eRssEaWIEALZk11xtub421PYBi_Eekhjscq7L_Q/exec',
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


  //student i-------

  document.getElementById('welcome1').innerHTML =data[5].D;

  document.getElementById('name1').innerHTML =data[5].D;
  document.getElementById('rel1').innerHTML =data[6].C;
  document.getElementById('pname1').innerHTML = data[6].D;
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



document.getElementById('total1').innerHTML = data[28].E;
  
 
});


//password for student i

document.getElementById('button1').addEventListener('click', function(){
  let correctPassword ="Ismile@2024";
  let Password = document.getElementById("psw1").value;
  if(correctPassword===Password){
      document.getElementById("student1").style.display="block";
      document.getElementById("validate1").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("student1").style.display="block";
    document.getElementById("validate1").style.display="none";
   }

   else{document.getElementById("alert1").innerHTML="Enter Correct Password";}
  }

  });
