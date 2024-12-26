async function getUsers() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyQj2Rp14Pcm0C-kzRipEO62r2OpeAhfHHwebMSSXSG8R1dJhGCt5FqpQOWHuhZt0ft/exec',
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
    
    // Chapter 1
    document.getElementById("q1").innerHTML =data[2].B;
    
  //Question No 1 fetching
   document.getElementById("q1").innerHTML =data[3].Q;
   //Answer 
   document.getElementById("ans1_a").innerHTML =data[4].A;
  document.getElementById("ans1_b").innerHTML =data[4].B;
  document.getElementById("ans1_c").innerHTML =data[4].C;
  document.getElementById("ans1_d").innerHTML =data[4].D;
   //Question No 2
    
  }
    );
//Question No 1 style change
    var ans_seen = "Answer Seen";
    document.getElementById("ans1_a").addEventListener('click',function()
  {
    document.getElementById("ans1_a").style.background = 'red';
  }
  )

  document.getElementById("ans1_b").addEventListener('click',function()
  {
    document.getElementById("ans1_b").style.background = 'red';
  }
  )

  document.getElementById("ans1_c").addEventListener('click',function()
  {
    document.getElementById("ans1_c").style.background = 'green';
  }
  )

  document.getElementById("ans1_d").addEventListener('click',function()
  {
    document.getElementById("ans1_d").style.background = 'red';
  }
  )

  document.getElementById("ans1_e").addEventListener('click',function()
  {
    document.getElementById("ans1_e").style.background = 'green';
    document.getElementById("ans1_c").style.background = 'green';
    document.getElementById("ans1_e").innerHTML =ans_seen;
  }
  )
  /*style ends */

