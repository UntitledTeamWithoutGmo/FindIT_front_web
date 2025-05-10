import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.href = 'http://localhost:6001/index.html';
        alert('Login successful!');
      } else {
        alert('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <>
      {/*<div className="head">
        <div className="nav">
          Find It
          <a href="" className="u">Home</a>
          <a href="" className="k">Your Profile</a>
          <a href="" className="k">Registation</a>
          <a href="" className="k">Login</a>
          <a href="" className="k">For recruiters</a>
        </div>
      </div>*/}
      <br />
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <p className="text">Войти в аккаунт</p>
          <input
            type="text"
            className="input"
            id="username"
            name="username"
            placeholder="Никнейм"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="input"
            id="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="btn" id="submit" type="submit">Войти</button>
          {/*<div className="have login">
            <span className="mini-text">
              Don't have an account?
              <a href="">Sign up</a>
            </span>
          </div>*/}
          <div className="mini-text">© 2025 FindIt</div>
        </form>
      </div>
    </>
  );
}

export default App;