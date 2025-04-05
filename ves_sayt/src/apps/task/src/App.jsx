import React, { useState, useEffect } from 'react';
import './App.css';

function Task() {
  const [task, setTask] = useState(null); // Состояние для хранения задачи
  const [code, setCode] = useState(''); // Состояние для хранения кода
  const [isCorrect, setIsCorrect] = useState(null); // Состояние для результата проверки

  const token = localStorage.getItem('token'); // Получаем токен из localStorage

  useEffect(() => {
    // Запрос к серверу для получения задачи
    fetch('http://localhost:5000/api/code/java')
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error('Ошибка загрузки задачи:', error));
  }, []);

  const handleSubmit = () => {
    // Отправка кода на сервер
    fetch('http://localhost:5000/api/code/java', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsCorrect(data.correct); // Устанавливаем результат проверки
      })
      .catch((error) => console.error('Ошибка отправки кода:', error));
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

  if (!task) {
    return <p>Загрузка задачи...</p>;
  }

  return (
    <div className="container">
      <div className="task-section">
        <div className="header">
          <h2>Задание</h2>
        </div>
        <div className="task-box">
          <div className="task-header">
            <span className="task-title">{task.name}</span>
            <span className="task-number">Task number: {task.id}</span>
          </div>
          <div className="task-description">
            <p>{task.description}</p>
            <div className="example">
              <p><strong>Пример:</strong></p>
              <p><strong>Input:</strong> {task.exampleInput}</p>
              <p><strong>Output:</strong> {task.exampleOutput}</p>
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
          {isCorrect !== null && (
            <button className="submit-button" id="i" onClick={handleLevel}>
              Поднять Уровень
            </button>
          )}
        </div>
        {isCorrect !== null && (
          <>
            <div className={`result-message ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? 'Все правильно!' : 'Ошибка в коде!'}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Task;
