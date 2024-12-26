async function getUsers() {
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyujs1_9BWkbFvUmxKcQxQZdhlD13gvqzuO2LfOrTXn2frViyq1qf-Va486qgm7q1w/exec',
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
    document.getElementById("chName").innerHTML =data[1].C7;
    
  //Question No 1 fetching
   document.getElementById("q1").innerHTML =data[3].Q7;
   //Answer 
   document.getElementById("ans1_a").innerHTML =data[4].A7;
  document.getElementById("ans1_b").innerHTML =data[4].B7;
  document.getElementById("ans1_c").innerHTML =data[4].C7;
  document.getElementById("ans1_d").innerHTML =data[4].D7;
   //Question No 2
    
  }
    );
//Question No 1 style change
    var ans_seen = "Answer Seen";
    document.getElementById("ans1_a").addEventListener('click',function()
  {
    document.getElementById("ans1_a").style.background = 'green';
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
    document.getElementById("ans1_a").style.background = 'green';
    document.getElementById("ans1_e").innerHTML =ans_seen;
  }
  )
  /*style ends */

