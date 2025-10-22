// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import About from './pages/About'; // ✅ Import About page
import Contact from './pages/Contact';
import Community from './pages/Community';
import Developer from './pages/Developer';
import Events from './pages/Events';
import ArticlePage from './pages/ArticlePage';
import TeamInfo from './pages/TeamInfo'; // ✅ Import the new page;
import Rent from './pages/Rent'; // ✅ import at the top
import NewProjects from './pages/NewProjects';
import DeveloperDetail from './pages/DeveloperDetail';
import MortgageCalculator from "./pages/MortgageCalculator";
import Career from "./pages/Career";
import Blogs from './pages/Blogs';
import BlogArticle from './pages/BlogArticle';
import JobDetail from "./pages/JobDetail";
import ProjectDetails from "./pages/ProjectDetails";
import Crypto from "./pages/Crypto";
import PrivacyPolicy from './pages/PrivacyPolicy'; 
function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/community" element={<Community />} />
        <Route path="/developer" element={<Developer />} /> 
        <Route path="/events" element={<Events />} />
        <Route path="/events/:slug" element={<ArticlePage />} />
<Route path="/blogs" element={<Blogs />} />
<Route path="/blogs/:slug" element={<BlogArticle />} />
        <Route path="/team" element={<TeamInfo />} /> 
        <Route path="/rent" element={<Rent />} />
        <Route path="/newprojects" element={<NewProjects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/developer/:name" element={<DeveloperDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/careers/:slug" element={<JobDetail />} />
        <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
        <Route path="/crypto" element={<Crypto  />} />
<Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
