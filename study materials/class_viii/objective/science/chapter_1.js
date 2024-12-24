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
    console.log(data);
    
    // Chapter 1
    document.getElementById("q1").innerHTML =data[2].B;
    
  //Question No 1
   document.getElementById("q1").innerHTML =data[3].B;
   //Answer 
   document.getElementById("ans1_a").innerHTML =data[4].B;
  document.getElementById("ans1_b").innerHTML =data[5].B;
  document.getElementById("ans1_c").innerHTML =data[6].B;
  document.getElementById("ans1_d").innerHTML =data[7].B;
   //Question No 2
    
  }
    );
    
    document.getElementById("ans1_a").addEventListener('click',function() {
      ans1_a.style.background='red';
    })
    
    
    