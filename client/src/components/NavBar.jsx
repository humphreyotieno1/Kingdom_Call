import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchButton from './SearchBar';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleLinkClick = () => {
    toggleMenu(true);
    closeDropdown();
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen(index);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(null);
  };

  return (
    <header className="w-full fixed top-0 z-50 font-robotoMono">
      {/* Top Navbar */}
      <div className="bg-[#E48515] text-white w-full">
        <div className="flex justify-between items-center py-1 px-4 text-sm w-full">
          <div className="flex space-x-4 font-robotoMono">
            <Link to="/" className="hover:text-gray-300">Kingdom Call</Link>
            <p className="hover:text-gray-300">Your kingdom come... Your will be done.</p>
          </div>
          <div className="flex space-x-4">
            {/* Search icon - visible on both desktop and mobile */}
            <SearchButton/>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow w-full">
        <div className="flex justify-between items-center py-2 px-4 w-full">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="./Logo.jpg" alt="Logo" className="h-12" />
             
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4 mx-auto">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/about-us" className="hover:text-gray-600">About Us</Link>
            <Link to="/services" className="hover:text-gray-600">Services</Link>
            <Link to="/departments" className="hover:text-gray-600">Departments</Link>
            <div className="relative group">
              <Link to="/media" className="hover:text-gray-600">
                Media
              </Link>
              {isDropdownOpen === 0 && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                >
                  <Link to="/videos" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Videos</Link>
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Gallery</Link>
                  <Link to="/live-sessions" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Live Sessions</Link>
                </div>
              )}
            </div>
            <div className="relative group"
              onMouseEnter={() => toggleDropdown(1)}
            >
              <Link to="/resources" className="hover:text-gray-600">
                Resources
              </Link>
              {isDropdownOpen === 1 && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg"
                >
                  <Link to="/testimonies" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Testimonies</Link>
                  <Link to="/sermons" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Sermons</Link>
                  <Link to="/stories" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Stories</Link>
                  <Link to="/prayer-request" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Prayer Request</Link>
                  <Link to="/help" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Get Help</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="hover:text-gray-600">Contact Us</Link>
          </nav>
          <div className="flex items-center space-x-4">
     
            {/* Hamburger menu - visible only on mobile */}
            <button onClick={toggleMenu} className="text-black focus:outline-none md:hidden">
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>

        </div>
        {/* mobile view */}
        {isMenuOpen && (
          <div className="md:hidden bg-white w-full">
            <nav className="flex flex-col space-y-1 px-4 py-2">
              <Link to="/about-us" className="py-2 px-4 hover:bg-gray-200" onClick={handleLinkClick}>About Us</Link>
              <Link to="/services" className="py-2 px-4 hover:bg-gray-200" onClick={handleLinkClick}>Services</Link>
              <Link to="/departments" className="py-2 px-4 hover:bg-gray-200" onClick={handleLinkClick}>Departments</Link>
              <div>
                <Link 
                  to="/media" 
                  className="py-2 px-4 hover:bg-gray-200 w-full text-left"
                  onClick={handleLinkClick}
                >
                  Media
                </Link>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(0);
                  }}
                  className="p-6"
                >
                  {isDropdownOpen === 0 ? '▲' : '▼'}
                </button>
                {isDropdownOpen === 0 && (
                  <div className="flex flex-col space-y-1 ml-4 bg-white text-black">
                    <Link to="/videos" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Videos</Link>
                    <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Gallery</Link>
                    <Link to="/live-sessions" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Live Sessions</Link>
                  </div>
                )}
              </div>
              <div>
              <Link 
                  to="/resources" 
                  className="py-2 px-4 hover:bg-gray-200 w-full text-left"
                  onClick={handleLinkClick}
                >
                  Resources
                </Link>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown(1);
                  }}
                  className="p-6"
                >
                  {isDropdownOpen === 1 ? '▲' : '▼'}
                </button>
                {isDropdownOpen === 1 && (
                  <div className="flex flex-col space-y-1 ml-4 bg-white text-black">
                    <Link to="/testimonies" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Strategy</Link>
                    <Link to="/sermons" className="block px-4 py-2 hover:bg-gray-200" onClick={handleLinkClick}>Logistics</Link>
                    <Link to="/stories" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Stories</Link>
                    <Link to="/prayer-request" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Prayer Request</Link>
                    <Link to="/help" className="block px-4 py-2 hover:bg-gray-200" onClick={closeDropdown}>Get Help</Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="py-2 px-4 hover:bg-gray-200" onClick={handleLinkClick}>Contact Us</Link>
            </nav>
            <div className="py-2 px-4 text-xs text-center text-gray-500">
              © 2024 Kingdom Call All Rights Reserved Co.
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;