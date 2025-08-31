import React from 'react';
import '../styles/skills.scss';

const skillsData = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS / SCSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 65 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Figma', level: 60 },
  ],
  soft: [
    { name: 'Teamwork', level: 85 },
    { name: 'Communication', level: 80 },
  ]
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <p className="hint">Hover over a category to see more</p>
      <div className="skills-groups">
        {Object.entries(skillsData).map(([group, items]) => (
          <div className="skill-group-card hover-container" key={group}>
            <h3>{group.toUpperCase()}</h3>
            <div className="hover-reveal">
              {items.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <svg className="circle" viewBox="0 0 36 36">
                    <path className="bg" d="M18 2.0845 a15.9155 15.9155 0 1 1 0 31.831 a15.9155 15.9155 0 1 1 0-31.831" />
                    <path className="progress" strokeDasharray={`${skill.level}, 100`} d="M18 2.0845 a15.9155 15.9155 0 1 1 0 31.831 a15.9155 15.9155 0 1 1 0-31.831" />
                    <text x="18" y="20.35" className="percentage">{skill.level}%</text>
                  </svg>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
