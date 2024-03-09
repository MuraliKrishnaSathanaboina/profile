

import React from 'react';
import './App.css';

const App = () => {
  const user = {
    name: 'Murali Krishna Sathanaboina',
    profession: 'Software Engineer',
    experience: ' 1year 4moths',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
    email: 'muralisathanaboina@gmail.com',
    linkedin: 'https://www.linkedin.com/feed/',
    github: 'https://github.com/MuraliKrishnaSathanaboina'
  };

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <h2>{user.profession}</h2>
      <p>Experience: {user.experience}</p>
      <h3>Skills:</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>Email: {user.email}</p>
      <p>LinkedIn: <a href={user.linkedin} target="_blank" rel="noopener noreferrer">{user.linkedin}</a></p>
      <p>GitHub: <a href={user.github} target="_blank" rel="noopener noreferrer">{user.github}</a></p>
    </div>
  );
};

export default App;

