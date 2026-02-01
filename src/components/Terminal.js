import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect/dist/core';

function Terminal({ data }) {
    const navigate = useNavigate();
    const [button, setButtonInput] = useState(null);
    const [message, setMessage] = useState({ output: '' });
    const outputRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    // Typewriter effect when message changes
    useEffect(() => {
        if (outputRef.current && message.output) {
            // Clear previous content
            outputRef.current.innerHTML = '';

            // Create new typewriter instance
            const typewriter = new Typewriter(outputRef.current, {
                delay: 30, // typing speed (lower = faster)
                cursor: "|",
            });

            typewriter
                .typeString(message.output)
                .start();
        }
    }, [message.output]);

    // Set initial welcome message
    useEffect(() => {
        if (outputRef.current) {
            const typewriter2 = new Typewriter(outputRef.current, {
                delay: 30,
            });
            typewriter2
                .typeString("hi there, i'm kiana!")
                .pauseFor(1000)
                .typeString(" welcome to my portfolio. are you ready to get started?")
                .pauseFor(800)
                // .typeString("\ny/n: ")
                .start();
        }

    }, []);

    const handleButtonInput = (event) => {
        const buttonValue = event.currentTarget.value;

        if (buttonValue === 'continue' && !hasStarted) {
            setHasStarted(true);
            setMessage({ output: "glad you're here :). click any of the below buttons to explore your options." });
        }
        else if (hasStarted) {
            if (buttonValue === 'exit') {
                window.close();
            }
            else if (buttonValue === 'restart') {
                setHasStarted(false);
                setMessage({ output: '' });

                window.location.reload();
            }
            else if (buttonValue === 'back') {
                window.history.back();
            }
            else if (buttonValue === 'about') {
                navigate('/Intro');
            } else if (buttonValue === 'projects') {
                navigate('/Projects');
            } else if (buttonValue === 'contact') {
                navigate('/Contact');
            }
        }
        setButtonInput(null);
    };

    return (
        <div>
            {/* Introduction Window */}
            <div className="window intro-window">
                <div className="title-bar terminal-title">
                    <div className="title-bar-text">welcome!</div>
                    <div className="title-bar-controls">
                        <button aria-label="Help"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
            </div>
            <div className="window terminal-window">
                <div ref={outputRef}></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {!hasStarted ? (
                        <button value="continue" onClick={handleButtonInput}>
                            continue
                        </button>
                    ) : (
                        <>
                            <button value="about" onClick={handleButtonInput}>
                                about
                            </button>
                            <button value="projects" onClick={handleButtonInput}>
                                projects
                            </button>
                            <button value="contact" onClick={handleButtonInput}>
                                contact
                            </button>
                            <button value="restart" onClick={handleButtonInput}>
                                restart
                            </button>
                            <button value="exit" onClick={handleButtonInput}>
                                exit
                            </button>
                        </>)}
                </div>
            </div >
        </div>
    );
}
export default Terminal;