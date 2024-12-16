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

  const preElement = document.getElementById('name1');

  preElement.innerHTML = data[0].are;
});