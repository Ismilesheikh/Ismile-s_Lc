async function getUsers() {
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbz3nfDScHLs3mqhCv_iW5fG3g3qSVlz7P4xfYGdWsTQpAS6aw0OTW2ErX1_iBXdzKVh/exec',
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

  const name1 = document.getElementById('name1');

  const pname1 = document.getElementById('pname1');
  


  name1.innerHTML = data[5].D;
  pname1.innerHTML = data[6].D;
  document.getElementById('dob1').innerHTML = data[7].D;
  document.getElementById('mno1').innerHTML = data[7].D;
  document.getElementById('class1').innerHTML = data[7].D;
  document.getElementById('sec1').innerHTML = data[7].D;
  document.getElementById('rate1').innerHTML = data[7].D;
  document.getElementById('sdate1').innerHTML = data[13].C;
  document.getElementById('today1').innerHTML = data[13].D;
  document.getElementById('tmonths1').innerHTML = data[13].E
  document.getElementById('days1').innerHTML = data[13].F;
  document.getElementById('tpaid1').innerHTML = data[13].G;
  document.getElementById('due1').innerHTML = data[13].D;
  

});