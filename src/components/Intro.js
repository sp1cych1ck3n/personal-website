import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "98.css";
import "./Intro.css";
import 'react-image-crop/dist/ReactCrop.css';
import cat1 from '../cat1.png';
import cat2 from '../cat2.png';
import { useNavigate } from 'react-router-dom';

console.log(cat1);
console.log(cat2);

function Intro({ data }) {
  const outputRef = useRef(null);
  const [hasPrinted, setHasPrinted] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const buttonValue = event.currentTarget.value;

    if (buttonValue === 'projects') {
      navigate('/projects');
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

  const introText1 =
    "i'm kiana, a second year mechatronics engineering student at the university of waterloo.\n\n" +
    "i'm interested in software development; specifically, ui/ux design, AI integration, and back-end development.\n\n" +
    "but first, i am a learner! my curiosity drives what i aim to pursue in life, and is a foundation for both my personal and academic activities.\n\n" +
    "in my free time, i partake in various hobbies! my hobbies include researching learning about history (specifically, political ideologies), watching criminal documentaries, crocheting, playing video games (league of legends victim), and literaly anything to do with my two cats (pictured below).";

  // MAIN TYPEWRITER EFFECT
  useEffect(() => {
    if (outputRef.current) {
      // Clear previous content
      outputRef.current.innerHTML = "";

      const typewriter = new Typewriter(outputRef.current, {
        delay: 30,
        cursor: "|",
      });

      typewriter
        .typeString(introText1.replace(/\n/g, "<br/>"))
        .callFunction(() => {
          setHasPrinted(true);
        })
        .start();
    }
  }, [introText1]);
  return (
    <div>
      {/* Introduction Window */}
      <div className="window intro-window">
        <div className="title-bar">
          <div className="title-bar-text intro-title">introduction</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <div ref={outputRef} className="typewriter-text" />
        </div>
        <button className="user-buttons" value="projects" onClick={handleNavigation}>projects</button>
        <button className="user-buttons" value="contact" onClick={handleNavigation}>contact</button>
        <button className="user-buttons" value="restart" onClick={handleNavigation}>restart</button>
        <button className="user-buttons" value="back" onClick={handleNavigation}>back</button>

      </div>


      { }
      {hasPrinted && (
        <>
          {/* Cat 1 Window - Zoro */}
          <div className="picture">
            <div className="window picture-window">
              <div className="title-bar">
                <div className="title-bar-text">zoro (boy cat)</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body">
                <img className="shape-border" src={cat1} alt="boy cat zoro" />
              </div>
            </div>

            {/* Cat 2 Window - Nola */}
            <div className="window picture-window">
              <div className="title-bar">
                <div className="title-bar-text">nola (girl cat)</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body">
                <img className="shape-border" src={cat2} alt="girl cat nola" />
              </div>
            </div>
          </div>
        </>

      )}
    </div>
  );
}

export default Intro;