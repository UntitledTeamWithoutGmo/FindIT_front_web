import React, { useState, useEffect } from 'react';
import './App.css';

function Task() {
  const [task, setTask] = useState(null); // Состояние для хранения задачи
  const [code, setCode] = useState(''); // Состояние для хранения кода
  const [testResults, setTestResults] = useState([]); // Состояние для результатов тестов

  useEffect(() => {
// Запрос к серверу для получения задачи
    
    fetch('http://localhost:8080/api/task')
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error('Ошибка загрузки задачи:', error));
    

    // Пример задания
    /*const mockTask = {
      name: "Task Name",
      description:
        "You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label. Return the minimum number of CPU intervals required to complete all tasks.",
      exampleInput: 'tasks = ["A", "A", "A", "B", "B", "B"], n = 2',
      exampleOutput: "8",
    };
    setTask(mockTask);*/
  }, []);

  const handleSubmit = () => {
// Отправка кода на сервер
    
    fetch('http://localhost:8080/api/task/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    })
      .then((response) => response.json())
      .then((data) => setTestResults(data.results))
      .catch((error) => console.error('Ошибка отправки кода:', error));
    

    // Пример результатов тестов
    /*const mockResults = [
      { testName: "Code 1", passed: false },
      { testName: "Code 2", passed: true },
    ];
    setTestResults(mockResults);*/
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
      </div>
    </div>
  </div>
  );
}

export default Task;
