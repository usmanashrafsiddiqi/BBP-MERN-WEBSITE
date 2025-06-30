// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import About from './pages/About'; // ✅ Import About page
import Contact from './pages/Contact';
import Community from './pages/Community';
import Developer from './pages/Developer';
import Blogs from './pages/Blogs';
import ArticlePage from './pages/ArticlePage';
import TeamInfo from './pages/TeamInfo'; // ✅ Import the new page;
import Rent from './pages/Rent'; // ✅ import at the top
import NewProjects from './pages/NewProjects';
import DeveloperDetail from './pages/DeveloperDetail';
import Career from "./pages/Career";
function App() {
  return (
    <Router>
       <ScrollToTop /> {/* ⬅️ This ensures scroll resets on route change */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} /> {/* ✅ Add this line */}
        <Route path="/contact" element={<Contact />} /> {/* ✅ Add this line */}
        <Route path="/community" element={<Community />} /> {/* ✅ Add this line */}
        <Route path="/developer" element={<Developer  />} /> {/* ✅ Add this line */}
        <Route path="/blogs" element={<Blogs/>  }/> {/* ✅ Add this line */}
        <Route path="/blogs/:slug" element={<ArticlePage />} /> 
        <Route path="/team" element={<TeamInfo />} /> {/* ✅ Add this line */}
        <Route path="/rent" element={<Rent />} />
        <Route path="/newprojects" element={<NewProjects />} />
        <Route path="/developer/:name" element={<DeveloperDetail />} />
        <Route path="/career" element={<Career />} />

      </Routes>
    </Router>
  );
}

export default App;
