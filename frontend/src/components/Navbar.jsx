import React, { useState, useTransition } from 'react';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
 const {t} = useTranslation()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMoreOpen(false);
  };

  return (
   <nav className="w-full z-[9999] px-6 py-4 mt-2 md:mt-4 relative bg-white/5 backdrop-blur-md shadow-md rounded-xl ">


      <div className="w-[99%] max-w-[99%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/mainlogo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/crypto" className="text-white text-sm hover:underline">{t("CRYPTO")}</Link>
         {/* Rent (Coming Soon) */}
<div className="relative group cursor-default">
  <span className="text-white text-sm">{t("RENT_SMALL")}</span>
  <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
    Coming Soon
  </div>
</div>

          <Link to="/newprojects" className="text-white text-sm hover:underline">{t("NEW_PROJECTS")}</Link>
          <Link to="/community" className="text-white text-sm hover:underline">{t("COMMUNITY")}</Link>
          <Link to="/developer" className="text-white text-sm hover:underline">{t("DEVELOPER")}</Link>

          {/* More dropdown (Click to open) */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="text-white text-sm flex items-center gap-1"
            >
              <span>{t("MORE")}</span>
              <HiChevronDown className="mt-[2px]" />
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg p-2 min-w-[160px] z-[9999]">
                <Link to="/career" className="block px-4 py-2 hover:bg-gray-100">{t("CAREERS")}</Link>
                <Link to="/events" className="block px-4 py-2 hover:bg-gray-100">{t("EVENTS")}</Link>
                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100">{t("BLOGS")}</Link>
                <Link to="/mortgage-calculator" className="block px-4 py-2 hover:bg-gray-100">{t("MORTGAGE_CALCULATOR")}</Link>
              </div>
            )}
          </div>


          <Link to="/about" className="text-white text-sm hover:underline">{t("ABOUT")}</Link>
          <Link to="/contact" className="text-white text-sm hover:underline">{t("CONTACT_US")}</Link>
           <LanguageSwitcher />
        </div>

        {/* Hamburger Icon */}
        {/* Mobile Hamburger + LanguageSwitcher */}
<div className="md:hidden z-[10000] flex items-center gap-2">
  <LanguageSwitcher />
  <button onClick={toggleMenu} className="text-white">
    {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
  </button>
</div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black z-[9998] flex flex-col items-center space-y-4 py-6 rounded-b-[24px] shadow-lg md:hidden">
       
         <Link to="/crypto"  className="hover:underline"  onClick={toggleMenu}>Crypto</Link>
        {/* Rent (Coming Soon) */}
<div className="relative group cursor-default">

  <span className="text-black text-base">Rent</span>
  <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 whitespace-nowrap">
    Coming Soon
  </div>
</div>

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
                <Link to="/events" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleMenu}>Events</Link>
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
