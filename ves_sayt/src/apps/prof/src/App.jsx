import { useEffect, useState } from 'react';
//import { useState } from 'react';
import './App.css';

function Prof() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRecruiter, setIsRecruiter] = useState(false); // To differentiate between user and recruiter

  /*// Mock data for testing the visual design
  const mockProfile = {
    name: 'Иван',
    surname: 'Фамилия',
    patronymicName: 'Отчество',
    email: 'ivan@example.com',
    about: 'Web Developer and Digital UI/UX Designer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    level: 21,
    levelProgress: 70, // Percentage for the progress bar
    company: 'TechCorp', // For recruiters
  };

  const [profile] = useState(mockProfile);
  const [isRecruiter] = useState(false); // Change to `true` to test recruiter view*/

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        window.location.href = 'index.html';
        return;
      }

      try {
        // First, try fetching the user profile
        let response = await fetch('http://localhost:8080/api/users/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setProfile(userData);
          setIsRecruiter(false); // It's a user
        } else {
          // If user profile fails, try fetching the recruiter profile
          response = await fetch('http://localhost:8080/api/recruiter/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const recruiterData = await response.json();
            setProfile(recruiterData);
            setIsRecruiter(true); // It's a recruiter
          } else {
            throw new Error('Failed to load profile.');
          }
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!profile) {
    return <div className="error">Failed to load profile. Please try again later.</div>;
  }

  return (
    <div className="Profile">
      <div className="header">
        <div className="ramka"></div>
        <img src="/src/assets/avatar.png" alt="Profile Picture" className="profile-picture" />
        <h1 className="text-profile">{profile.name} {profile.surname}</h1>
        <p className="mini-text-profile">{profile.email}</p>
        {isRecruiter && <p className="mini-text-profile">Recruiter</p>}
      </div>
      <div className="about-section">
        <h2>О себе</h2>
        <p>{profile.about || "Информация о пользователе отсутствует."}</p>
      </div>
      <div className="level-section">
  <h2>Уровень</h2>
  <div className="level-bar">
    <span className="level-number">{profile.level}</span>
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${profile.levelProgress || 70}%` }} // Adjust dynamically
      ></div>
    </div>
  </div>
</div>
      <div className="skills-section">
        <h2>Навыки</h2>
        <div className="skills">
          {profile.skills?.map((skill, index) => (
            <span key={index} className="skill">{skill}</span>
          )) || <p>Навыки не указаны.</p>}
        </div>
      </div>
      {isRecruiter && (
        <div className="recruiter-section">
          <h2>Компания</h2>
          <p>{profile.company || "Информация о компании отсутствует."}</p>
        </div>
      )}
      {isRecruiter && (
        <div className='vacancies-section'>
            <h2>Созданные вакансии</h2>
            <p>{profile.vacancies || "Вакансии отсутствуют"}</p>
        </div>
      )}
      <div className="social-links">
        <h2>Соцсети</h2>
        <div className="links">
          <h3>links</h3>
        </div>
      </div>
    </div>
  );
}

export default Prof;
