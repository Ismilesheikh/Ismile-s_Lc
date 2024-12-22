

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
  
    //student vi-------
  
    document.getElementById('welcome6').innerHTML =data[155].D;
  
    document.getElementById('name6').innerHTML =data[155].D;
    document.getElementById('rel6').innerHTML =data[156].C;
    document.getElementById('pname6').innerHTML = data[156].D;
    document.getElementById('dob6').innerHTML =data[157].D;
    document.getElementById('mno6').innerHTML = data[158].D;
    document.getElementById('class6').innerHTML = data[159].D;
    document.getElementById('sec6').innerHTML = data[160].D;
    document.getElementById('rate6').innerHTML = data[161].D;
  
    document.getElementById('sdate6').innerHTML = data[163].C;
    document.getElementById('today6').innerHTML = data[163].D;
    document.getElementById('tmonths6').innerHTML = data[163].E
    document.getElementById('days6').innerHTML = data[163].F;
  document.getElementById('tamount6').innerHTML = data[163].G;
    document.getElementById('tpaid6').innerHTML = data[163].H;
    document.getElementById('due6').innerHTML = data[163].I;
  
    document.getElementById('pdate16').innerHTML = data[166].D;
    document.getElementById('pamount16').innerHTML = data[166].E;
  
    document.getElementById('pdate26').innerHTML = data[167].D;
    document.getElementById('pamount26').innerHTML = data[167].E;
  
    document.getElementById('pdate36').innerHTML = data[168].D;
    document.getElementById('pamount36').innerHTML = data[168].E;
  
    document.getElementById('pdate46').innerHTML = data[169].D;
    document.getElementById('pamount46').innerHTML = data[169].E;
  
    document.getElementById('pdate56').innerHTML = data[170].D;
    document.getElementById('pamount56').innerHTML = data[170].E;
  
    document.getElementById('pdate66').innerHTML = data[171].D;
    document.getElementById('pamount66').innerHTML = data[171].E;
  
  document.getElementById('pdate76').innerHTML = data[172].D;
    document.getElementById('pamount76').innerHTML = data[172].E;
  
  
  
  
    document.getElementById('total6').innerHTML = data[178].E;
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
  