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

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/log">Login</Link></li>
            <li><Link to="/prof">Profile</Link></li>
            <li><Link to="/reg">Registration</Link></li>
            <li><Link to="/log-recruiters">Login for Recruiters</Link></li>
            <li><Link to="/reg-recruiters">Registration for Recruiters</Link></li>
            <li><Link to="/vakansii">Vakansii</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/prof" element={<Prof />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/log-recruiters" element={<LogRecruiters />} />
          <Route path="/reg-recruiters" element={<RegRecruiters />} />
          <Route path="/vakansii" element={<Vakansii />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
