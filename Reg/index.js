const form = document.getElementById('registrationForm');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    username: document.getElementById('username').value,
    surname: document.getElementById('surname').value,
    patronymicName: document.getElementById('patronymicName').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  try {
    const res = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert('Registration successful!');
    } else {
      alert('Registration failed.');
    }
  } catch (err) {
    console.log(err.message);
    alert('An error occurred.');
  }
});