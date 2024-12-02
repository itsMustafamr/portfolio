import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure Navbar.js exists in the components folder
import Home from './pages/Home';         // Ensure Home.js exists in the pages folder
import About from './pages/About';       // Ensure About.js exists in the pages folder
import Projects from './pages/Projects'; // Ensure Projects.js exists in the pages folder
import Contact from './pages/Contact';   // Ensure Contact.js exists in the pages folder
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
