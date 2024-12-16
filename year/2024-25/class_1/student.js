async function getUsers() {
  try {
    const response = await fetch(
      'link---   https://script.google.com/macros/s/AKfycbz3nfDScHLs3mqhCv_iW5fG3g3qSVlz7P4xfYGdWsTQpAS6aw0OTW2ErX1_iBXdzKVh/exec',
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

  name1.innerHTML = data[5].D;
});