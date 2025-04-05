import './App.css';
import { useState } from 'react';

function RegRecruiters() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    surname: '',
    patronymicName: '',
    description: '',
    stackTech: '',
    email: '',
    password: '',
    organizationName: '',
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
      const res = await fetch('http://localhost:8080/api/recruiter/register', {
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
      <div className="Page-buttons">
        <nav className='navigation'>
          <a className="btn1 fiol" href="http://localhost:6001/main-page">Главная страница</a>
          <a className="btn1 fiol" href="http://localhost:6001/vakansii" id="vak">Вакансии</a>
          <a className="btn1 fiol" href="http://localhost:6001/task" id="zad">Задание</a>
        </nav>
        </div>
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
            type="text"
            className="input"
            id="description"
            placeholder="О себе (необязательно)"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            className="input"
            id="stackTech"
            placeholder="Стеки (через запятую, необязательно)"
            value={formData.stackTech}
            onChange={handleChange}
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
            id="organizationName"
            placeholder="Название Организации"
            value={formData.organizationName}
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

export default RegRecruiters;
