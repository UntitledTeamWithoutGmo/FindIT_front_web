import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
// Импортируем приложения
import Log from './apps/log/src/App';
import Prof from './apps/prof/src/App';
import Reg from './apps/reg/src/App';
import LogRecruiters from './apps/log-recruiters/src/App';
import RegRecruiters from './apps/reg-recruiters/src/App';
import Vakansii from './apps/vakansii/src/App';
import MainPage from './apps/main-page/src/App';
import AboutVacanci from './apps/about-vacanci/src/App';
import Task from './apps/task/src/App';

function App() {
  return (
    <Router>
      <div>
    
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/prof" element={<Prof />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/log-recruiters" element={<LogRecruiters />} />
          <Route path="/reg-recruiters" element={<RegRecruiters />} />
          <Route path="/vakansii" element={<Vakansii />} />
          <Route path="/main-page" element={<MainPage />} />
          <Route path="/about-vacanci" element={<AboutVacanci />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
