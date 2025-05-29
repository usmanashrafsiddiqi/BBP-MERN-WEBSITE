// src/components/Navbar.jsx
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: 'Buy', path: '#' },
    { name: 'Rent', path: '#' },
    { name: 'New Projects', path: '#' },
    { name: 'Community', path: '/community' },
    { name: 'Developer', path: '#' },
    { name: 'More', path: '#' },
    { name: 'About', path: '/about' }, // ✅ Real path
    { name: 'Contact Us', path: '/contact' },
    { name: 'EN | AR', path: '#' },
  ];

  return (
    <nav className="w-full px-6 md:px-8 py-4 flex items-center justify-between text-white">
      <div className="w-[160px] md:w-[180px]">
        <img src="/mainlogo.png" alt="Briskbold Property Logo" className="w-full h-auto object-contain" />
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex flex-wrap gap-x-4 xl:gap-x-6 uppercase tracking-wide font-normal text-[1rem] md:text-[1.25rem] xl:text-[2rem] leading-snug">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} className="text-white/80 hover:text-white transition whitespace-nowrap">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex space-x-4">
        <button className="bg-transparent border border-white text-white px-4 py-1 rounded-full text-sm hover:bg-white hover:text-red-700 transition">
          HOT DEALS
        </button>
        <button className="bg-white text-red-700 px-4 py-1 rounded-full text-sm font-semibold hover:bg-red-100 transition">
          LIST YOUR PROPERTY
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden z-50">
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black bg-opacity-90 px-6 py-4 flex flex-col space-y-4 z-40 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white text-base uppercase tracking-wide hover:text-red-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-2 pt-4">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-red-700 transition">
              HOT DEALS
            </button>
            <button className="bg-white text-red-700 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-100 transition">
              LIST YOUR PROPERTY
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
