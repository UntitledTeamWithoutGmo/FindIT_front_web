import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState(null); // Состояние для хранения задачи
  const [code, setCode] = useState(''); // Состояние для хранения кода
  const [testResults, setTestResults] = useState([]); // Состояние для результатов тестов

  useEffect(() => {
    // Пример задания
    const mockTask = {
      name: "Task Name",
      description:
        "You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label. Return the minimum number of CPU intervals required to complete all tasks.",
      exampleInput: 'tasks = ["A", "A", "A", "B", "B", "B"], n = 2',
      exampleOutput: "8",
      id: 1
    };
    setTask(mockTask);
  }, []);

  const handleSubmit = () => {
    // Пример результатов тестов
    const mockResults = [
      { testName: "Code 1", passed: false },
      { testName: "Code 2", passed: true },
    ];
    setTestResults(mockResults);
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

        <div className="test-results">
          <p>Результаты тестов:</p>
          {testResults.map((result, index) => (
            <div
              key={index}
              className={`test-case ${result.passed ? 'passed' : 'failed'}`}
            >
              {result.testName}: {result.passed ? '✔️ Успешно' : '❌ Ошибка'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;