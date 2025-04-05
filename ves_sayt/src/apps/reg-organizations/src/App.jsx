import './App.css';
import { useState } from 'react';

function RegOrganization() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rating: '',
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
      const res = await fetch('http://localhost:8080/api/organization/register', {
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
      <div className="RegistrationOrganization">
        <form onSubmit={handleSubmit}>
          <p className="text">Создайте Организацию</p>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Название организации"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="description"
            placeholder="Описание организации"  
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="rating"
            placeholder="Рейтинг организации"  
            value={formData.rating}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Зарегистрироваться</button>
          <div className="mini-text">© 2025 FindIt</div>
        </form>
      </div>
    </>
  );
}

export default RegOrganization;
