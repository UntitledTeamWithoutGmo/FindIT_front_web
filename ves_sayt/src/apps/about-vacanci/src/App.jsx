import React, { useState, useEffect } from 'react';
import './App.css';

function AboutVacanci() {
  const [vacancy, setVacancy] = useState(null); // Состояние для хранения данных вакансии
  const id = localStorage.getItem("id"); // Получаем ID из localStorage

  useEffect(() => {
    // Запрос к серверу для получения данных вакансии
    fetch(`http://localhost:8080/api/vacancy/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Данные с сервера:", data); // Для отладки
        setVacancy(data); // Сохраняем данные вакансии в состояние
      })
      .catch((error) => console.error("Ошибка загрузки вакансии:", error));
  }, [id]);

  if (!vacancy) {
    // Пока данные загружаются, отображаем сообщение
    return <p>Загрузка данных вакансии...</p>;
  }

  return (
    <div className="about-vacancy">
      <h1 className="title-vacancy">{vacancy.title}</h1>
      <p className="description-vacancy">Описание: {vacancy.description}</p>
      <p className="company">Организация: {vacancy.organizationName}</p>
      <h2 className="price-vacancy">Зарплата: {vacancy.price}</h2>
      <a href='btn1 green'>Отликнуться</a>
    </div>
  );
}

export default AboutVacanci;
