import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFirebase,
  SiNodedotjs,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiLinux,
  SiVscodium,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
  { name: 'React', icon: <SiReact color="#61DBFB" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38BDF8" /> },
  { name: 'Python', icon: <SiPython color="#3776AB" /> },
  { name: 'Django', icon: <SiDjango color="#092E20" /> },
  { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#83CD29" /> },
  { name: '.NET / C#', icon: <SiDotnet color="#512BD4" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'MySQL', icon: <SiMysql color="#00758F" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'GitHub', icon: <SiGithub color="#181717" /> },
  { name: 'Linux', icon: <SiLinux color="#FCC624" /> },
  { name: 'VS Code', icon: <SiVscodium color="#007ACC" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        backgroundColor: '#f8f4ec',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '1000px',
        margin: '3rem auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#b96111',
          marginBottom: '2rem',
        }}
      >
        My Skills
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {skills.map(({ name, icon }) => (
          <div
            key={name}
            style={{
              backgroundColor: '#fff5e6',
              borderRadius: '12px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(185, 97, 17, 0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
            <p style={{ color: '#b96111', fontWeight: 'bold' }}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
