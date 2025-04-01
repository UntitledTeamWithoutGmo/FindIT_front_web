import React, { useState, useEffect } from "react";
import "./App.css";

function Vakansii() {
  const [vacancies, setVacancies] = useState([]);
/*fetch("http://localhost:8080/api/vacancy/all")
.then((response) => response.json())
.then((data) => setVacancies(data))
.catch((error) => console.error("Ошибка загрузки вакансий:", error));
}, []);*/
  useEffect(() => {
    // Используем примерные данные
    const mockData = [
      {
        title: "UI Designer",
        description: "Какая-то Контора",
        price: "50,000₽/мес",
        taskLink: "#",
        location: "Москва, Ул. Пушкина, д.14",
        tags: ["UI/UX", "JS", "CSS"],
        id: 1
      },
      {
        title: "Frontend Developer",
        description: "Другая Контора",
        price: "80,000₽/мес",
        taskLink: "#",
        location: "Санкт-Петербург, Невский пр., д.1",
        tags: ["React", "HTML", "CSS"],
        id: 2
      },
    ];
    setVacancies(mockData);
    /*fetch("http://localhost:8080/api/vacancy/all")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Данные с сервера:", data); // Для отладки
      setVacancies(data);
    })
    .catch((error) => console.error("Ошибка загрузки вакансий:", error));*/
  }, []);

  const handleMoreDetails = (id) => {
    localStorage.setItem("id", id);
    window.location.href = "http://localhost:6001/about-vacanci";
    console.log(id);
  }

  return (
    <div className="vacancies-page">
      <header className="vacancies-header">
        <h1>Вакансии</h1>
        <hr width="100%"/>
        <p>Найдено {vacancies.length} вакансий</p>
      </header>
      <div className="vacancies-list">
        {vacancies.map((vacancy, index) => (
          <div key={index} className="vacancy-card">
            <div className="vacancy-content">
              <h2 className="vacancy-title">{vacancy.title}</h2>
              <p className="vacancy-description">{vacancy.description}</p>
              <div className="vacancy-tags">
                {vacancy.tags.map((tag, idx) => (
                  <span key={idx} className="vacancy-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="vacancy-location">{vacancy.location}</p>
              <div className="vacancy-footer">
                <span className="vacancy-price">{vacancy.price}</span>
                <div className="vacancy-buttons">
                  <a href={`http://localhost:8080/api/vacancy/call/${vacancy.id}`} className="btn1 blue">
                    Отликнуться
                  </a>
                  <button onClick={() => handleMoreDetails(vacancy.id)} className="btn1 blue">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vakansii;
