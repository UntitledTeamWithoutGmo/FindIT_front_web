import React, { useState, useEffect } from 'react';
import './App.css';

function Task() {
  const [task, setTask] = useState(null); // Состояние для хранения задачи
  const [code, setCode] = useState(''); // Состояние для хранения кода
  const [isCorrect, setIsCorrect] = useState(false); // Состояние для результата проверки

  const token = localStorage.getItem('token'); // Получаем токен из localStorage

  const handleSubmit = () => {
    // Отправка кода на сервер
    fetch('http://localhost:5000/api/code/java', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка сервера');
      }
      return response.json();
      })
      .then((data) => {
      if (data.correct) {
        setIsCorrect(true); // Устанавливаем результат проверки
      } else {
        setIsCorrect(false);
      }
      })
      .catch((error) => {
      console.error('Ошибка отправки кода:', error);
      setIsCorrect(null); // Скрываем кнопку при ошибке
      });
  };

  const handleLevel = () => {
    // Отправка кода на сервер
    window.location.href = 'http://localhost:6001/prof';
    fetch('http://localhost:8080/api/users/listen', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Добавляем токен в заголовок
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error('Ошибка отправки кода:', error));
  };

  /*if (!task) {
    return <p>Загрузка задачи...</p>;
  }*/

  return (
    <>
    <div className="Page-buttons">
        <nav className='navigation'>
          <a className="btn1 fiol" href="http://localhost:6001/main-page">Главная страница</a>
          <a className="btn1 fiol" href="http://localhost:6001/vakansii" id="vak">Вакансии</a>
          <a className="btn1 fiol" href="http://localhost:6001/task" id="zad">Задание</a>
        </nav>
        </div>
    <div className="container">
      <div className="task-section">
        <div className="header">
          <h2>Задание</h2>
        </div>
        <div className="task-box">
          <div className="task-header">
            <span className="task-title">Sum to variables</span>
            <span className="task-number">Task number: 1</span>
          </div>
          <div className="task-description">
            <p>Надо написать клас под названием TestClass и что бы он содержал метод calculate который принимает два числа и возвращает их сумму, на языке программирования Java</p>
            <div className="example">
              <p><strong>Пример:</strong></p>
              <p><strong>Input:</strong>5, 3</p>
              <p><strong>Output:</strong>8</p>
            </div>
          </div>
        </div>
      </div>

      <div className="code-section">
        <div className="code-header">
          <span>Код</span>
        </div>
        <div className="code-box">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Введите ваш код здесь..."
          ></textarea>
          <button className="submit-button" onClick={handleSubmit}>
            Отправить
          </button>
          {isCorrect && (
            <button className="submit-button" id="i" onClick={handleLevel}>
              Поднять Уровень
            </button>
          )}
        </div>
          <>
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? 'Все правильно!' : 'Ошибка в коде!'}
            </div>
          </>
      </div>
    </div>
    </>
  );
}

export default Task;
