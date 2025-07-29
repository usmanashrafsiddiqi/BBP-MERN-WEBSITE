import React, { useState } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMoreOpen(false);
  };

  return (
    <nav className="w-full z-[9999] px-6 py-4 relative">


      <div className="w-[99%] max-w-[99%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/mainlogo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/rent" className="text-white text-sm hover:underline">Rent</Link>
          <Link to="/newprojects" className="text-white text-sm hover:underline">New Projects</Link>
          <Link to="/community" className="text-white text-sm hover:underline">Community</Link>
          <Link to="/developer" className="text-white text-sm hover:underline">Developer</Link>

          {/* More dropdown */}
          <div className="relative group">
            <button className="text-white text-sm flex items-center gap-1">
              <span>More</span>
              <HiChevronDown className="mt-[2px]" />
            </button>
            <div className="absolute top-full mt-2 hidden group-hover:block bg-white text-black rounded shadow-lg p-2 min-w-[160px]">
              <Link to="/career" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
              <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link>
              <Link to="/mortgage-calculator" className="block px-4 py-2 hover:bg-gray-100">Mortgage Calculator</Link>
            </div>
          </div>

          <Link to="/about" className="text-white text-sm hover:underline">About</Link>
          <Link to="/contact" className="text-white text-sm hover:underline">Contact Us</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-[10000]">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black z-[9998] flex flex-col items-center space-y-4 py-6 rounded-b-[24px] shadow-lg md:hidden">
          <Link to="/rent" className="hover:underline" onClick={toggleMenu}>Rent</Link>
          <Link to="/newprojects" className="hover:underline" onClick={toggleMenu}>New Projects</Link>
          <Link to="/community" className="hover:underline" onClick={toggleMenu}>Community</Link>
          <Link to="/developer" className="hover:underline" onClick={toggleMenu}>Developer</Link>

          {/* Mobile More Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-1 hover:underline"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              <span>More</span>
              <HiChevronDown className="mt-[2px]" />
            </button>
            {moreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black rounded shadow-lg p-2 min-w-[180px] text-center">
                <Link to="/career" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Careers</Link>
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Blogs</Link>
                <Link to="/mortgage-calculator" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Mortgage Calculator</Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:underline" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="hover:underline" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
