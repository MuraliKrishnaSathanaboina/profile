

// import React from 'react';
// import './App.css';

// const App = () => {
//   const user = {
//     name: 'Murali Krishna Sathanaboina',
//     profession: 'Software Engineer',
//     experience: ' 1year 4moths',
//     skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js'],
//     email: 'muralisathanaboina@gmail.com',
//     linkedin: 'https://www.linkedin.com/feed/',
//     github: 'https://github.com/MuraliKrishnaSathanaboina'
//   };

//   return (
//     <div className="profile">
//       <h1>{user.name}</h1>
//       <h2>{user.profession}</h2>
//       <p>Experience: {user.experience}</p>
//       <h3>Skills:</h3>
//       <ul>
//         {user.skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//       <p>Email: {user.email}</p>
//       <p>LinkedIn: <a href={user.linkedin} target="_blank" rel="noopener noreferrer">{user.linkedin}</a></p>
//       <p>GitHub: <a href={user.github} target="_blank" rel="noopener noreferrer">{user.github}</a></p>
//     </div>
//   );
// };

// export default App;

// Profile.js
import React from 'react';
import './App.css';

const App = () => {
  const projects = [
    {
      title: 'Project 1',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      link: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  const user = {
    name: 'John Doe',
    bio: 'I am a passionate developer interested in building cool projects.',
    location: 'City, Country',
    website: 'https://example.com',
    avatar: 'avatar.jpg'
  };

  const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <h3>{project.title}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="user-details">
        <img src={user.avatar} alt={user.name} />
        <h1>{user.name}</h1>
        <p className="bio">{user.bio}</p>
        <p className="location">{user.location}</p>
        <a href={user.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;

// Profile.css
