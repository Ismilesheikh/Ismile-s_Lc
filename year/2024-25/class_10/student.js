

async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzJMGCKALdtkvldIHxWeY7FP79ebIhjuHAiBepNetsnzCpm2DZF3o6QkXsAqIgfQjek/exec',
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


  document.getElementById('total2').innerHTML = data[28].E;
  //student iii-------

  document.getElementById('welcome3').innerHTML =data[5].D;

  document.getElementById('name3').innerHTML =data[5].D;
  document.getElementById('rel3').innerHTML =data[6].C;
  document.getElementById('pname3').innerHTML = data[6].D;
  document.getElementById('dob3').innerHTML =data[7].D;
  document.getElementById('mno3').innerHTML = data[8].D;
  document.getElementById('class3').innerHTML = data[9].D;
  document.getElementById('sec3').innerHTML = data[10].D;
  document.getElementById('rate3').innerHTML = data[11].D;

  document.getElementById('sdate3').innerHTML = data[13].C;
  document.getElementById('today3').innerHTML = data[13].D;
  document.getElementById('tmonths3').innerHTML = data[13].E
  document.getElementById('days3').innerHTML = data[13].F;
document.getElementById('tamount3').innerHTML = data[13].G;
  document.getElementById('tpaid3').innerHTML = data[13].H;
  document.getElementById('due3').innerHTML = data[13].I;

  document.getElementById('pdate13').innerHTML = data[16].D;
  document.getElementById('pamount13').innerHTML = data[16].E;

  document.getElementById('pdate23').innerHTML = data[17].D;
  document.getElementById('pamount23').innerHTML = data[17].E;

  document.getElementById('pdate33').innerHTML = data[18].D;
  document.getElementById('pamount33').innerHTML = data[18].E;

  document.getElementById('pdate43').innerHTML = data[19].D;
  document.getElementById('pamount43').innerHTML = data[19].E;

  document.getElementById('pdate53').innerHTML = data[20].D;
  document.getElementById('pamount53').innerHTML = data[20].E;

  document.getElementById('pdate63').innerHTML = data[21].D;
  document.getElementById('pamount63').innerHTML = data[21].E;

document.getElementById('pdate73').innerHTML = data[22].D;
  document.getElementById('pamount73').innerHTML = data[22].E;

  document.getElementById('total3').innerHTML = data[28].E;
  //student iv-------

  document.getElementById('welcome4').innerHTML =data[5].D;

  document.getElementById('name4').innerHTML =data[5].D;
  document.getElementById('rel4').innerHTML =data[6].C;
  document.getElementById('pname4').innerHTML = data[6].D;
  document.getElementById('dob4').innerHTML =data[7].D;
  document.getElementById('mno4').innerHTML = data[8].D;
  document.getElementById('class4').innerHTML = data[9].D;
  document.getElementById('sec4').innerHTML = data[10].D;
  document.getElementById('rate4').innerHTML = data[11].D;

  document.getElementById('sdate4').innerHTML = data[13].C;
  document.getElementById('today4').innerHTML = data[13].D;
  document.getElementById('tmonths4').innerHTML = data[13].E
  document.getElementById('days4').innerHTML = data[13].F;
document.getElementById('tamount4').innerHTML = data[13].G;
  document.getElementById('tpaid4').innerHTML = data[13].H;
  document.getElementById('due4').innerHTML = data[13].I;

  document.getElementById('pdate14').innerHTML = data[16].D;
  document.getElementById('pamount14').innerHTML = data[16].E;

  document.getElementById('pdate24').innerHTML = data[17].D;
  document.getElementById('pamount24').innerHTML = data[17].E;

  document.getElementById('pdate34').innerHTML = data[18].D;
  document.getElementById('pamount34').innerHTML = data[18].E;

  document.getElementById('pdate44').innerHTML = data[19].D;
  document.getElementById('pamount44').innerHTML = data[19].E;

  document.getElementById('pdate54').innerHTML = data[20].D;
  document.getElementById('pamount54').innerHTML = data[20].E;

  document.getElementById('pdate64').innerHTML = data[21].D;
  document.getElementById('pamount64').innerHTML = data[21].E;

document.getElementById('pdate74').innerHTML = data[22].D;
  document.getElementById('pamount74').innerHTML = data[22].E;

  document.getElementById('total4').innerHTML = data[28].E;
  //student v-------

  document.getElementById('welcome5').innerHTML =data[5].D;

  document.getElementById('name5').innerHTML =data[5].D;
  document.getElementById('rel5').innerHTML =data[6].C;
  document.getElementById('pname5').innerHTML = data[6].D;
  document.getElementById('dob5').innerHTML =data[7].D;
  document.getElementById('mno5').innerHTML = data[8].D;
  document.getElementById('class5').innerHTML = data[9].D;
  document.getElementById('sec5').innerHTML = data[10].D;
  document.getElementById('rate5').innerHTML = data[11].D;

  document.getElementById('sdate5').innerHTML = data[13].C;
  document.getElementById('today5').innerHTML = data[13].D;
  document.getElementById('tmonths5').innerHTML = data[13].E
  document.getElementById('days5').innerHTML = data[13].F;
document.getElementById('tamount5').innerHTML = data[13].G;
  document.getElementById('tpaid5').innerHTML = data[13].H;
  document.getElementById('due5').innerHTML = data[13].I;

  document.getElementById('pdate15').innerHTML = data[16].D;
  document.getElementById('pamount15').innerHTML = data[16].E;

  document.getElementById('pdate25').innerHTML = data[17].D;
  document.getElementById('pamount25').innerHTML = data[17].E;

  document.getElementById('pdate35').innerHTML = data[18].D;
  document.getElementById('pamount35').innerHTML = data[18].E;

  document.getElementById('pdate45').innerHTML = data[19].D;
  document.getElementById('pamount45').innerHTML = data[19].E;

  document.getElementById('pdate55').innerHTML = data[20].D;
  document.getElementById('pamount55').innerHTML = data[20].E;

  document.getElementById('pdate65').innerHTML = data[21].D;
  document.getElementById('pamount65').innerHTML = data[21].E;

document.getElementById('pdate75').innerHTML = data[22].D;
  document.getElementById('pamount75').innerHTML = data[22].E;

  document.getElementById('total5').innerHTML = data[28].E;
  //student vi-------

  document.getElementById('welcome6').innerHTML =data[5].D;

  document.getElementById('name6').innerHTML =data[5].D;
  document.getElementById('rel6').innerHTML =data[6].C;
  document.getElementById('pname6').innerHTML = data[6].D;
  document.getElementById('dob6').innerHTML =data[7].D;
  document.getElementById('mno6').innerHTML = data[8].D;
  document.getElementById('class6').innerHTML = data[9].D;
  document.getElementById('sec6').innerHTML = data[10].D;
  document.getElementById('rate6').innerHTML = data[11].D;

  document.getElementById('sdate6').innerHTML = data[13].C;
  document.getElementById('today6').innerHTML = data[13].D;
  document.getElementById('tmonths6').innerHTML = data[13].E
  document.getElementById('days6').innerHTML = data[13].F;
document.getElementById('tamount6').innerHTML = data[13].G;
  document.getElementById('tpaid6').innerHTML = data[13].H;
  document.getElementById('due6').innerHTML = data[13].I;

  document.getElementById('pdate16').innerHTML = data[16].D;
  document.getElementById('pamount16').innerHTML = data[16].E;

  document.getElementById('pdate26').innerHTML = data[17].D;
  document.getElementById('pamount26').innerHTML = data[17].E;

  document.getElementById('pdate36').innerHTML = data[18].D;
  document.getElementById('pamount36').innerHTML = data[18].E;

  document.getElementById('pdate46').innerHTML = data[19].D;
  document.getElementById('pamount46').innerHTML = data[19].E;

  document.getElementById('pdate56').innerHTML = data[20].D;
  document.getElementById('pamount56').innerHTML = data[20].E;

  document.getElementById('pdate66').innerHTML = data[21].D;
  document.getElementById('pamount66').innerHTML = data[21].E;

document.getElementById('pdate76').innerHTML = data[22].D;
  document.getElementById('pamount76').innerHTML = data[22].E;




  document.getElementById('total6').innerHTML = data[28].E;
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


  //password for student iv

document.getElementById('button4').addEventListener('click', function(){
  let correctPassword ="Ismile@2024";
  let Password = document.getElementById("psw4").value;
  if(correctPassword===Password){
      document.getElementById("student4").style.display="block";
      document.getElementById("validate4").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("student4").style.display="block";
    document.getElementById("validate4").style.display="none";
   }

   else{document.getElementById("alert4").innerHTML="Enter Correct Password";}
  }

  });


  //password for student v

document.getElementById('button5').addEventListener('click', function(){
  let correctPassword ="Ismile@2024";
  let Password = document.getElementById("psw5").value;
  if(correctPassword===Password){
      document.getElementById("student5").style.display="block";
      document.getElementById("validate5").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("student5").style.display="block";
    document.getElementById("validate5").style.display="none";
   }

   else{document.getElementById("alert5").innerHTML="Enter Correct Password";}
  }

  });


  //password for student vi

document.getElementById('button6').addEventListener('click', function(){
  let correctPassword ="Ismile@2024";
  let Password = document.getElementById("psw6").value;
  if(correctPassword===Password){
      document.getElementById("student6").style.display="block";
      document.getElementById("validate6").style.display="none";
  }

   else{if(Password=== "7563876753"){
    document.getElementById("student6").style.display="block";
    document.getElementById("validate6").style.display="none";
   }

   else{document.getElementById("alert6").innerHTML="Enter Correct Password";}
  }

  });
