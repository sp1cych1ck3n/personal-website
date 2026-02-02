import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
import Typewriter from 'typewriter-effect/dist/core';
import './Projects.css';
import project1 from '../project1.png';
import project2 from '../project2.png';
import project3 from '../project3.png';

console.log(project1);
console.log(project2);
console.log(project3);
const projects = [
  {
    title: "waterloo engineering competition (WEC) junior design: hydraulic bridge",
    year: "2024",
    description: ["designed and built a hydraulically actuated bridge as part of a four-person team during WEC, delivering a fully functional prototype within an 8-hour time constraint.", "contributed to mechanical design, hydraulic system integration, and iterative testing, prioritizing structural stability, smooth actuation, and reliability under load.", "achieved a 91/100 judge evaluation, recognizing strong functionality, design quality, and effective teamwork in a high-pressure, hands-on engineering environment."
    ]
  },
  {
    title: "LEGO robotics programming project: robot dog 'byte'",
    year: "2024",
    description: ["programmed robotic behaviour in C++ with an emphasis on motion control and system reliability.", "applied iterative testing and debugging to refine behavior under physical constraints.", "wrote a 40+ page report depicting design constraints, planning, criteria fulfilment, and software/hardware design."
    ]
  },
  {
    title: "WEC junior design director",
    year: "2025",
    description: ["designed a full engineering challenge for 100+ participants across various programs and education levels, including modelling terrain the problem is based on: which is why I'm sawing!", "integrated problem modelling, prototyping, and systems-level evaluation.", "co-authored a 13-page technical package including requirements and evaluation rubrics."
    ]
  },
  {
    title: "enghacks hackathon — integrated director",
    year: "2026",
    description: ["co-leading the design of a winter accessibility device challenge that participants must solve using electrical, software, and hardware elements.", "selected low-cost sensors, motors, and power systems to enable feasible prototypes. prioritized inclusive design and real-world usability over theoretical solutions.", "designed rubric to test students of all undergrad levels."
    ]
  }
];

function Projects() {
  const outputRef = useRef(null);
  const [hasPrinted, setHasPrinted] = useState(false);
  const navigate = useNavigate();


  const handleNavigation = (event) => {
    const buttonValue = event.currentTarget.value;

    if (buttonValue === 'about') {
      navigate('/intro');
    }
    else if (buttonValue === 'contact') {
      navigate('/contact');
    }
    else if (buttonValue === 'restart') {
      navigate('/');
    }
    else if (buttonValue === 'back') {
      navigate(-1);
    }
  }

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.innerHTML = "";

      const typewriter = new Typewriter(outputRef.current, {
        delay: 20,
      });

      projects.forEach((project, index) => {

        typewriter
          .typeString(`<strong style="color:rgb(14, 30, 153);">${project.title}</strong>`)
          .typeString(`<i style="font-weight: 600" >.........${project.year}</i>`)
          .typeString("<br/><ul>")
          .pauseFor(1000);

        project.description.forEach(point => {
          typewriter.typeString(`<li>${point}</li>`);
        });

        if (index < projects.length - 1) {
          typewriter.typeString("<br/><br/>");
        }
      });

      typewriter
        .callFunction(() => {
          setHasPrinted(true);
        })
        .start();
    }
  }, []);

  return (
    <div className="window intro-window">
      {/* Full-width title bar */}
      <div className="title-bar intro-window">
        <div className="title-bar-text">projects and experiences</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>

      <button className="user-buttons" value="about" onClick={handleNavigation}>about</button>
      <button className="user-buttons" value="contact" onClick={handleNavigation}>contact</button>
      <button className="user-buttons" value="restart" onClick={handleNavigation}>restart</button>
      <button className="user-buttons" value="back" onClick={handleNavigation}>back</button>

      {/* Split content */}
      <div className="content-split">
        {/* Left 50% - Text */}
        <div className="window-body text-content">
          <div ref={outputRef} className="typewriter-text"></div>
        </div>

        {/* Right 50% - Images */}
        <div className="images-content">
          {hasPrinted && (
            <>
              {<img src={project1} alt="project 1" />}
              {<img src={project2} alt="project 2" />}
              {<img src={project3} alt="project 3" />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Projects;