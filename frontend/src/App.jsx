// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About'; // ✅ Import About page
import Contact from './pages/Contact';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} /> {/* ✅ Add this line */}
        <Route path="/contact" element={<Contact />} /> {/* ✅ Add this line */}
        <Route path="/community" element={<Community />} /> {/* ✅ Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
