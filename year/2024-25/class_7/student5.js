

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
  
    //student v-------
  
    document.getElementById('welcome5').innerHTML =data[125].D;
  
    document.getElementById('name5').innerHTML =data[125].D;
    document.getElementById('rel5').innerHTML =data[126].C;
    document.getElementById('pname5').innerHTML = data[126].D;
    document.getElementById('dob5').innerHTML =data[127].D;
    document.getElementById('mno5').innerHTML = data[128].D;
    document.getElementById('class5').innerHTML = data[129].D;
    document.getElementById('sec5').innerHTML = data[130].D;
    document.getElementById('rate5').innerHTML = data[131].D;
  
    document.getElementById('sdate5').innerHTML = data[133].C;
    document.getElementById('today5').innerHTML = data[133].D;
    document.getElementById('tmonths5').innerHTML = data[133].E
    document.getElementById('days5').innerHTML = data[133].F;
  document.getElementById('tamount5').innerHTML = data[133].G;
    document.getElementById('tpaid5').innerHTML = data[133].H;
    document.getElementById('due5').innerHTML = data[133].I;
  
    document.getElementById('pdate15').innerHTML = data[136].D;
    document.getElementById('pamount15').innerHTML = data[136].E;
  
    document.getElementById('pdate25').innerHTML = data[137].D;
    document.getElementById('pamount25').innerHTML = data[137].E;
  
    document.getElementById('pdate35').innerHTML = data[138].D;
    document.getElementById('pamount35').innerHTML = data[138].E;
  
    document.getElementById('pdate45').innerHTML = data[139].D;
    document.getElementById('pamount45').innerHTML = data[139].E;
  
    document.getElementById('pdate55').innerHTML = data[140].D;
    document.getElementById('pamount55').innerHTML = data[140].E;
  
    document.getElementById('pdate65').innerHTML = data[141].D;
    document.getElementById('pamount65').innerHTML = data[141].E;
  
  document.getElementById('pdate75').innerHTML = data[142].D;
    document.getElementById('pamount75').innerHTML = data[142].E;
  
    document.getElementById('total5').innerHTML = data[148].E;
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
  
  
  
  