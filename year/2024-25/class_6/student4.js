

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
  
    //student iv-------
  
    document.getElementById('welcome4').innerHTML =data[95].D;
  
    document.getElementById('name4').innerHTML =data[95].D;
    document.getElementById('rel4').innerHTML =data[96].C;
    document.getElementById('pname4').innerHTML = data[96].D;
    document.getElementById('dob4').innerHTML =data[97].D;
    document.getElementById('mno4').innerHTML = data[98].D;
    document.getElementById('class4').innerHTML = data[99].D;
    document.getElementById('sec4').innerHTML = data[100].D;
    document.getElementById('rate4').innerHTML = data[101].D;
  
    document.getElementById('sdate4').innerHTML = data[103].C;
    document.getElementById('today4').innerHTML = data[103].D;
    document.getElementById('tmonths4').innerHTML = data[103].E
    document.getElementById('days4').innerHTML = data[103].F;
  document.getElementById('tamount4').innerHTML = data[103].G;
    document.getElementById('tpaid4').innerHTML = data[103].H;
    document.getElementById('due4').innerHTML = data[103].I;
  
    document.getElementById('pdate14').innerHTML = data[106].D;
    document.getElementById('pamount14').innerHTML = data[106].E;
  
    document.getElementById('pdate24').innerHTML = data[107].D;
    document.getElementById('pamount24').innerHTML = data[107].E;
  
    document.getElementById('pdate34').innerHTML = data[108].D;
    document.getElementById('pamount34').innerHTML = data[108].E;
  
    document.getElementById('pdate44').innerHTML = data[109].D;
    document.getElementById('pamount44').innerHTML = data[109].E;
  
    document.getElementById('pdate54').innerHTML = data[110].D;
    document.getElementById('pamount54').innerHTML = data[110].E;
  
    document.getElementById('pdate64').innerHTML = data[111].D;
    document.getElementById('pamount64').innerHTML = data[111].E;
  
  document.getElementById('pdate74').innerHTML = data[112].D;
    document.getElementById('pamount74').innerHTML = data[112].E;
  
    document.getElementById('total4').innerHTML = data[118].E;
    
  
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
  
  