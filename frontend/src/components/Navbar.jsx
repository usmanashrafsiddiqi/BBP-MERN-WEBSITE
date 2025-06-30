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
    { name: 'Rent', path: '/rent' },
    { name: 'New Projects', path: '/newprojects' },
    { name: 'Community', path: '/community' },
    { name: 'Developer', path: '/developer' },
    { name: 'More', path: '#' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'EN | AR', path: '#' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 px-4 md:px-8 py-4 flex items-center justify-between text-white z-50">

      {/* Logo */}
      <div className="ml-3 mt-2 w-[120px] sm:w-[140px] md:w-[160px] xl:w-[180px]">
  <img
    src="/mainlogo.png"
    alt="Briskbold Property Logo"
    className="w-full h-auto object-contain"
  />
</div>






      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-end flex-wrap gap-2 xl:gap-3 2xl:gap-4 flex-1">
        <ul className="flex items-center flex-wrap gap-2 xl:gap-3 2xl:gap-4">
          {navItems.map((item) =>
            item.name === 'More' ? (
              <li key={item.name} className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center px-4 xl:px-5 py-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl border border-white border-opacity-40 bg-white/10 text-white rounded-full transition hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                >
                  {item.name}
                  <HiChevronDown className="ml-2 w-5 h-5" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-52 z-50">
                    <Link to="/blogs" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Blogs
                    </Link>
                    <Link to="/career" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Careers
                    </Link>
                    <Link to="/mortgage-calculator" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                      Mortgage Calculator
                    </Link>
                  </div>
                )}
              </li>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="px-4 xl:px-5 py-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl border border-white border-opacity-40 bg-white/10 text-white rounded-full transition hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                >
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Desktop Buttons */}
        <div className="flex space-x-3 xl:space-x-4 ml-4">
          <button className="px-4 xl:px-5 py-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl border border-red-500 bg-white/10 text-white rounded-full transition hover:bg-red-600/20 hover:shadow-[0_0_10px_rgba(255,0,0,0.4)]">
            HOT DEALS
          </button>
          <button className="px-4 xl:px-5 py-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl border border-white border-opacity-40 bg-white/10 text-white rounded-full font-semibold transition hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            LIST YOUR PROPERTY
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden z-50">
        <button onClick={toggleMenu}>
          {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-black bg-opacity-90 px-6 py-4 flex flex-col space-y-4 z-40 lg:hidden">
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
                  <div className="mt-2 pl-4 space-y-1">
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
                    <Link
                      to="/career"
                      className="block text-sm text-white hover:text-red-300 py-1"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Careers
                    </Link>
                    <Link
                      to="/mortgage-calculator"
                      className="block text-sm text-white hover:text-red-300 py-1"
                      onClick={() => {
                        setDropdownOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Mortgage Calculator
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
            <button className="px-4 py-2 border border-red-500 bg-white/10 text-white rounded-full text-sm transition hover:bg-red-600/20 hover:shadow-[0_0_10px_rgba(255,0,0,0.4)]">
              HOT DEALS
            </button>
            <button className="px-4 py-2 border border-white border-opacity-40 bg-white/10 text-white rounded-full text-sm font-semibold transition hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
              LIST YOUR PROPERTY
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
