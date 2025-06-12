import React, { useState } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navItems = [
    { name: 'Buy', path: '#' },
    { name: 'Rent', path: '#' },
    { name: 'New Projects', path: '#' },
    { name: 'Community', path: '/community' },
    { name: 'Developer', path: '/developer' },
    { name: 'More', path: '#' }, // will trigger dropdown
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'EN | AR', path: '#' },
  ];

  return (
    <nav className="w-full px-6 md:px-8 py-4 flex items-center justify-between text-white relative z-50">
      {/* Logo */}
      <div className="w-[160px] md:w-[180px]">
        <img src="/mainlogo.png" alt="Briskbold Property Logo" className="w-full h-auto object-contain" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex flex-wrap gap-x-4 xl:gap-x-6 uppercase tracking-wide font-normal text-[1rem] md:text-[1.25rem] xl:text-[2rem] leading-snug relative">
        {navItems.map((item) => (
          item.name === 'More' ? (
            <li key={item.name} className="relative group">
              <div
                onClick={toggleDropdown}
                className="flex items-center cursor-pointer text-white/80 hover:text-white transition whitespace-nowrap"
              >
                <span>{item.name}</span>
                <HiChevronDown className="ml-2 w-8 h-8 font-bold" />
              </div>

              {/* Dropdown menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40">
                  <Link
                    to="/blogs"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Blogs
                  </Link>
                </div>
              )}
            </li>
          ) : (
            <li key={item.name}>
              <Link to={item.path} className="text-white/80 hover:text-white transition whitespace-nowrap">
                {item.name}
              </Link>
            </li>
          )
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
          {navItems.map((item) =>
            item.name === 'More' ? (
              <div key="more" className="relative">
                <div
                  onClick={toggleDropdown}
                  className="flex items-center justify-between text-white uppercase text-base tracking-wide hover:text-red-400 cursor-pointer"
                >
                  <span>More</span>
                  <HiChevronDown className="w-6 h-6" />
                </div>
                {dropdownOpen && (
                  <div className="mt-2 pl-4">
                    <Link
                      to="/blogs"
                      className="block text-sm text-white hover:text-red-300 py-1"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Blogs
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className="text-white text-base uppercase tracking-wide hover:text-red-400 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
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
