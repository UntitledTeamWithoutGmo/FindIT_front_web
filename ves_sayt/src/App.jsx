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
import CreateVacancy from './apps/create-vacanci/src/App';
import ChooseLogin from './apps/vibor-logina/src/App';
import ChooseReg from './apps/vibor-rega/src/App';
import RegOrganization from './apps/reg-organizations/src/App';

const Open = () => {
  window.location.href = 'http://localhost:6001/prof';
}

function App() {
  return (
    <Router>
      <div className="Page-buttons">
        <nav className='navigation'>
          <a className="btn1 fiol" href="http://localhost:6001/main-page">Главная страница</a>
          <a className="btn1 fiol" href="http://localhost:6001/vakansii" id="vak">Вакансии</a>
          <a className="btn1 fiol" href="http://localhost:6001/task" id="zad">Задание</a>

          <img className="profile-pictures" src='./src/assets/avatar.png' onClick={Open}/>
        </nav>
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
          <Route path="/create-vacanci" element={<CreateVacancy />} />
          <Route path="/vibor-logina" element={<ChooseLogin />} />
          <Route path="/vibor-rega" element={<ChooseReg />} />
          <Route path="/reg-organizations" element={<RegOrganization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
