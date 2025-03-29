import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    surname: '',
    patronymicName: '',
    email: '',
    password: '',
    Organization: '',
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
      const res = await fetch('http://localhost:8080/api/recruiters/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed.');
      }
    } catch (err) {
      console.error(err.message);
      alert('An error occurred.');
    }
  };

  return (
    <>
      {/* <div className="head">
        <div className="nav">
          Find It
          <a href="" className="u">Home</a>
          <a href="" className="k">Your Profile</a>
          <a href="" className="k">Registation</a>
          <a href="" className="k">Login</a>
          <a href="" className="k">For recruiters</a>
        </div>
      </div> */}
      <br />
      <div className="Registration">
        <form onSubmit={handleSubmit}>
          <p className="text">Создайте аккаунт работодателя
          </p>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="username"
            placeholder="Никнейм"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="surname"
            placeholder="Фамилия"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="patronymicName"
            placeholder="Отчество"
            value={formData.patronymicName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="input"
            id="email"
            placeholder="Почта"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="input"
            id="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="OrganizationName"
            placeholder="Название Организации"
            value={formData.Organization}
            onChange={handleChange}
            required
          />
          <button className="btn" type="submit">Зарегистрироваться</button>
          {/*<div className="have login">
            <span className="mini-text">
              Already have an account?
              <a href="">Sign in</a>
            </span>
          </div>*/}
          <div className="mini-text">© 2025 FindIt</div>
        </form>
      </div>
    </>
  );
}

export default App;
