import React, { useState, useEffect } from 'react';
//import './Nav.css';
import "98.css";

function Opener({ text, speed = 100, delay = 0 }) {
  consts[displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [delay]);

  useEffect(() => {
    if (started && index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, displayedText, speed, started]);

  return <h1 >{displayedText}</h1>;
}

function Nav() {
  return (
    <div className="">
      <nav>
        <Opener text="hi there, i'm kiana!" speed={200} />
        <Opener text="welcome to my portfolio." speed={80} delay={5000} />
      </nav>
    </div>
  );
}
export default Nav;
