
import React, { useEffect, useState } from 'react';
import '../styles/about.scss';
import gradPicVV1G from '../assets/grad_highschool.jpg'; 
import gradPicRTU from '../assets/grad_rtu.jpg'; // Example image path
import gradPic from '../assets/graduation.png'
import vv1gLogo from '../assets/logo.png';
import rtuLogo from '../assets/rtu_logo.png'
import asyaLogo from '../assets/asya_logo.png'

const milestones = [
  {
    year: '2020',
    title: 'Graduated High School',
    description: 'Completed secondary education with a focus on science and mathematics.',
    logo: vv1gLogo,
    image: gradPicVV1G,
    story: 'I graduated with honors, been in student parlament and participated in national olympiads.'
  },
  {
    year: '2020–2023',
    title: 'Riga Technical University',
    description: 'Earned a engineering Bachelor’s degree in Computer Science.',
    logo: rtuLogo,
    image: gradPicRTU,
    story: 'Developed 10+ full-stack projects, joined AI research, and led hackathons.'
  },
  {
    year: '2022–Now',
    title: 'Full-Stack Software Developer',
    description: 'Building scalable applications and designing clean user experiences.!!!!!!!!!!!!!!!!',
    logo: asyaLogo,
    image: gradPic,
    story: 'Crafting modern web apps and mentoring juniors in React best practices. Yesyesyesyesyes'
  }
];


const About = () => {
  const [flipStates, setFlipStates] = useState(Array(milestones.length).fill(false));

  // useEffect(() => {
  //   const intervalIds = milestones.map((_, i) => {
  //     return setInterval(() => {
  //       setFlipStates(prev => {
  //         const copy = [...prev];
  //         copy[i] = true;
  //         return copy;
  //       });
  
  //       setTimeout(() => {
  //         setFlipStates(prev => {
  //           const copy = [...prev];
  //           copy[i] = false;
  //           return copy;
  //         });
  //       }, 4000); // stays flipped for 4 seconds
  
  //     }, i * 2000 + 6000); // every 6s, staggered by 2s
  //   });
  
  //   return () => intervalIds.forEach(clearInterval);
  // }, []);
  
  return (
    <section className="about" id="about">
      <div className="timeline">
        {milestones.map((item, index) => (
          <div key={index} className="card-wrapper">
            <div className={`flip-card ${flipStates[index] ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="front-image" src={item.logo} alt={`${item.title} visual`} />
                <span className="year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

                <div className="flip-card-back">
                  <div className="back-content">
                    <img src={item.image} alt={item.title} />
                    <div className="story">{item.story}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
