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
    document.getElementById("chName").innerHTML =data[1].B6;
    
  //Question No 1 fetching
   document.getElementById("q1").innerHTML =data[3].Q6;
   //Answer 
   document.getElementById("ans1_a").innerHTML =data[4].A6;
  document.getElementById("ans1_b").innerHTML =data[4].B6;
  document.getElementById("ans1_c").innerHTML =data[4].C6;
  document.getElementById("ans1_d").innerHTML =data[4].D6;
   //Question No 2
   document.getElementById("q2").innerHTML =data[5].Q6;
   //Answer 
   document.getElementById("ans2_a").innerHTML =data[6].A6;
  document.getElementById("ans2_b").innerHTML =data[6].B6;
  document.getElementById("ans2_c").innerHTML =data[6].C6;
  document.getElementById("ans2_d").innerHTML =data[6].D6;

//Question No 3
   document.getElementById("q3").innerHTML =data[7].Q6;
   //Answer 
   document.getElementById("ans3_a").innerHTML =data[8].A6;
  document.getElementById("ans3_b").innerHTML =data[8].B6;
  document.getElementById("ans3_c").innerHTML =data[8].C6;
  document.getElementById("ans3_d").innerHTML =data[8].D6;


//Question No 4
   document.getElementById("q4").innerHTML =data[9].Q6;
   //Answer 
   document.getElementById("ans4_a").innerHTML =data[10].A6;
  document.getElementById("ans4_b").innerHTML =data[10].B6;
  document.getElementById("ans4_c").innerHTML =data[10].C6;
  document.getElementById("ans4_d").innerHTML =data[10].D6;

//Question No 5
   document.getElementById("q5").innerHTML =data[11].Q6;
   //Answer 
   document.getElementById("ans5_a").innerHTML =data[12].A6;
  document.getElementById("ans5_b").innerHTML =data[12].B6;
  document.getElementById("ans5_c").innerHTML =data[12].C6;
  document.getElementById("ans5_d").innerHTML =data[12].D6;
    
  }
    );



//Question No 1 style change
    var ans_seen = "Answer Seen";
    document.getElementById("ans1_a").addEventListener('click',function()
  {
    document.getElementById("ans1_a").style.background = 'green';
document.getElementById("ans1_a").style.color = 'white';
  }
  )

  document.getElementById("ans1_b").addEventListener('click',function()
  {
    document.getElementById("ans1_b").style.background = 'red';
document.getElementById("ans1_b").style.color = 'white';
  }
  )

  document.getElementById("ans1_c").addEventListener('click',function()
  {
    document.getElementById("ans1_c").style.background = 'red';
document.getElementById("ans1_c").style.color = 'white';
  }
  )

//Question No 2 style change
     document.getElementById("ans2_a").addEventListener('click',function()
  {
    document.getElementById("ans2_a").style.background = 'red';
document.getElementById("ans2_a").style.color = 'white';
  }
  )

  document.getElementById("ans2_b").addEventListener('click',function()
  {
    document.getElementById("ans2_b").style.background = 'green';
document.getElementById("ans2_b").style.color = 'white';
  }
  )

  document.getElementById("ans2_c").addEventListener('click',function()
  {
    document.getElementById("ans2_c").style.background = 'red';
document.getElementById("ans2_c").style.color = 'white';
  }
  )

  document.getElementById("ans2_d").addEventListener('click',function()
  {
    document.getElementById("ans2_d").style.background = 'red';
document.getElementById("ans2_d").style.color = 'white';
  }
  )

  document.getElementById("ans2_e").addEventListener('click',function()
  {
 document.getElementById("ans2_e").style.background = 'green';
document.getElementById("ans2_e").style.color = 'white'; document.getElementById("ans2_b").style.background = 'green';
document.getElementById("ans2_b").style.color = 'white';
    document.getElementById("ans2_e").innerHTML =ans_seen;
  }
  )

//Question No 3 style change
     document.getElementById("ans3_a").addEventListener('click',function()
  {
    document.getElementById("ans3_a").style.background = 'red';
document.getElementById("ans3_a").style.color = 'white';
  }
  )

  document.getElementById("ans3_b").addEventListener('click',function()
  {
    document.getElementById("ans3_b").style.background = 'red';
document.getElementById("ans3_b").style.color = 'white';
  }
  )

  document.getElementById("ans3_c").addEventListener('click',function()
  {
    document.getElementById("ans3_c").style.background = 'green';
document.getElementById("ans3_c").style.color = 'white';
  }
  )

  document.getElementById("ans3_d").addEventListener('click',function()
  {
    document.getElementById("ans3_d").style.background = 'red';
document.getElementById("ans3_d").style.color = 'white';
  }
  )

  document.getElementById("ans3_e").addEventListener('click',function()
  {
 document.getElementById("ans3_e").style.background = 'green';
document.getElementById("ans3_e").style.color = 'white'; document.getElementById("ans3_c").style.background = 'green';
document.getElementById("ans3_c").style.color = 'white';
    document.getElementById("ans3_e").innerHTML =ans_seen;
  }
  )

//Question No 4 style change
     document.getElementById("ans4_a").addEventListener('click',function()
  {
    document.getElementById("ans4_a").style.background = 'green';
document.getElementById("ans4_a").style.color = 'white';
  }
  )

  document.getElementById("ans4_b").addEventListener('click',function()
  {
    document.getElementById("ans4_b").style.background = 'red';
document.getElementById("ans4_b").style.color = 'white';
  }
  )

  document.getElementById("ans4_c").addEventListener('click',function()
  {
    document.getElementById("ans4_c").style.background = 'red';
document.getElementById("ans4_c").style.color = 'white';
  }
  )

  document.getElementById("ans4_d").addEventListener('click',function()
  {
    document.getElementById("ans4_d").style.background = 'red';
document.getElementById("ans4_d").style.color = 'white';
  }
  )

  document.getElementById("ans4_e").addEventListener('click',function()
  {
 document.getElementById("ans4_e").style.background = 'green';
document.getElementById("ans4_e").style.color = 'white'; document.getElementById("ans4_a").style.background = 'green';
document.getElementById("ans4_a").style.color = 'white';
    document.getElementById("ans4_e").innerHTML =ans_seen;
  }
  )
//Question No 5 style change
     document.getElementById("ans5_a").addEventListener('click',function()
  {
    document.getElementById("ans5_a").style.background = 'red';
document.getElementById("ans5_a").style.color = 'white';
  }
  )

  document.getElementById("ans5_b").addEventListener('click',function()
  {
    document.getElementById("ans5_b").style.background = 'red';
document.getElementById("ans5_b").style.color = 'white';
  }
  )

  document.getElementById("ans5_c").addEventListener('click',function()
  {
    document.getElementById("ans5_c").style.background = 'green';
document.getElementById("ans5_c").style.color = 'white';
  }
  )

  document.getElementById("ans5_d").addEventListener('click',function()
  {
    document.getElementById("ans5_d").style.background = 'red';
document.getElementById("ans5_d").style.color = 'white';
  }
  )

  document.getElementById("ans5_e").addEventListener('click',function()
  {
 document.getElementById("ans5_e").style.background = 'green';
document.getElementById("ans5_e").style.color = 'white'; document.getElementById("ans5_c").style.background = 'green';
document.getElementById("ans5_c").style.color = 'white';
    document.getElementById("ans5_e").innerHTML =ans_seen;
  }
  )


  /*style ends */

