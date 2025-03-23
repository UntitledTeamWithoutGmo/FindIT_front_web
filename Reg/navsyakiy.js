const form = document.getElementById('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const data = new FormData(form);

  console.log(Array.from(data));

  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: 'POST',
        body: data,
      },
    );

    const resData = await res.json();

    console.log(resData);
  } catch (err) {
    console.log(err.message);
  }
});
