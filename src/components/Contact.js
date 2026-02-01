import React, { useEffect, useRef, useState } from 'react';
import Typewriter from "typewriter-effect/dist/core";
import "98.css";
import './Contact.css';
import { useNavigate } from 'react-router-dom';


function Contact() {
  const outputRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigation = (event) => {
    const buttonValue = event.currentTarget.value;

    if (buttonValue === 'about') {
      navigate('/intro');
    }
    else if (buttonValue === 'projects') {
      navigate('/projects');
    }
    else if (buttonValue === 'restart') {
      navigate('/terminal');
    }
    else if (buttonValue === 'back') {
      navigate(-1);
    }
  }

  const contactInfo = ["school email <a href='mailto:khabibi@uwaterloo.ca'khabibi@uwaterloo.ca</a>", "personal email <a href='habibi.kiana@gmail.com'habibi.kiana@gmail.com", "phone number <a href='tel: +14167201536'416 720-1536", "linkedin <a href='https://www.linkedin.com/in/kiana-habibi/'</a>"];

  useEffect(() => {
    if (outputRef.current) {
      // Clear previous content
      outputRef.current.innerHTML = "";

      const typewriter = new Typewriter(outputRef.current, {
        delay: 30,
        cursor: "|",
      });

      const formattedText = contactInfo.join("<br/>");

      typewriter
        .typeString(formattedText)
        .callFunction(() => {
        })
        .start();

    }
  }, []);


  return (
    <div className="window contact-window">
      <div className="title-bar">
        <div className="title-bar-text intro-title">contact me!</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body contact-body">
        <div ref={outputRef} className="typewriter-text" />
      </div>
      <div contact-button>
        <button value="about" onClick={handleNavigation}>about</button>
        <button value="projects" onClick={handleNavigation}>projects</button>
        <button value="restart" onClick={handleNavigation}>restart</button>
        <button value="back" onClick={handleNavigation}>back</button>
      </div>
    </div>
  );
}

export default Contact;