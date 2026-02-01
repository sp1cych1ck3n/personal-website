import React from "react";
import './App.css';
import Intro from './components/Intro';
import Terminal from './components/Terminal';
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Terminal />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;