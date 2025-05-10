import './App.css';
import { useState } from 'react';

const token = localStorage.getItem('token');

function CreateVacancy() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    tasklink: '',
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
      const res = await fetch('http://localhost:8080/api/vacancy/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Vacancy making successful!');
      } else {
        alert('Vacancy making failed.');
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
      <div className="create-vacancy">
        <form onSubmit={handleSubmit}>
          <p className="text">Создайте Вакансию</p>
          <input
            type="text"
            className="input"
            id="title"
            placeholder="Название вакансии"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="description"
            placeholder="Описание вакансии"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="price"
            placeholder="Зарплата/стоимость (укажите валюту)"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="input"
            id="tasklink"
            placeholder="Ссылка на задание (если есть)"
            value={formData.tasklink}
            onChange={handleChange}
          />
          <button className="btn" type="submit">Создать</button>
          <div className="mini-text">© 2025 FindIt</div>
        </form>
      </div>
    </>
  );
}

export default CreateVacancy;