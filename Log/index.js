document.getElementById('LoginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('https://your-java-server/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = '';
            alert('Login successful!');
        } else {
            alert('Login failed.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }
});