document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/api/users/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const user = await response.json();
            document.getElementById('username').innerText = user.username;
            document.getElementById('name').innerText = user.name;
            document.getElementById('surname').innerText = user.surname;
            document.getElementById('patronymicName').innerText = user.patronymicName;
            document.getElementById('email').innerText = user.email;
        } else {
            alert('Failed to load profile.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred.');
    }
});