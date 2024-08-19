import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleDropdown = (dropdownId) => {
    if (activeDropdown === dropdownId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownId);
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 font-robotoMono bg-[#E48515] text-white">
      {/* Combined Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 text-sm w-full">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="./kingdom_logo.png" alt="Logo" className="h-16" />
          <div className="flex flex-col">
            <Link to="/" className="hover:text-gray-700 text-2xl font-extrabold">Kingdom Call</Link>
            <p className="hover:text-gray-300 italic">Your kingdom come... Your will be done.</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/about-us" className="py-2 px-3 hover:text-gray-700">About Us</Link>
          <Link to="/services" className="py-2 px-3 hover:text-gray-700">Services</Link>
          <Link to="/departments" className="py-2 px-3 hover:text-gray-700">Departments</Link>

          {/* Media Dropdown */}
          <div className="relative group">
            <Link 
              to="/media" 
              className="flex items-center py-2 px-3 hover:text-gray-700"
            >
              Media
              <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 z-10 hidden group-hover:block peer-hover:block">
              <div className="flex flex-col font-normal bg-[#E48515] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <Link to="/videos" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Videos</Link>
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gallery</Link>
                  <Link to="/live-sessions" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Live Sessions</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <Link 
              to="/resources" 
              className="flex items-center py-2 px-3 hover:text-gray-700"
            >
              Resources
              <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </Link>
            <div className="absolute left-0 mt-2 z-10 hidden group-hover:block peer-hover:block">
              <div className="flex flex-col font-normal bg-[#E48515] divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div className="py-2 text-sm text-gray-700 dark:text-gray-400">
                  <Link to="/testimonies" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Testimonies</Link>
                  <Link to="/sermons" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sermons</Link>
                  <Link to="/stories" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Stories</Link>
                  <Link to="/prayer-requests" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Prayer Requests</Link>
                  <Link to="/help" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Get Help</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="/contact" className="py-2 px-3 hover:text-gray-700">Contact</Link>

          {/* Search input */}
          <div className={`relative ${isSearchVisible ? 'block' : 'hidden md:block'}`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input 
              type="text" 
              id="search-navbar" 
              className="w-full p-2 pl-10 text-sm text-gray-50 bg-transparent border-0 placeholder-gray-500 focus:ring-0 focus:outline-none shadow-lg" 
              placeholder="search..."
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col w-full">
          <div className="flex items-center justify-between w-full px-4">
            {/* Hamburger Menu */}
            <button onClick={toggleMenu} className="text-black focus:outline-none">
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

            {/* Search Icon */}
            {isSearchVisible ? (
              <button 
                onClick={toggleSearch} 
                type="button" 
                className="text-white focus:outline-none rounded-lg text-sm p-2.5"
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/>
                </svg>
                <span className="sr-only">Close search</span>
              </button>
            ) : (
              <button 
                onClick={toggleSearch} 
                type="button" 
                data-collapse-toggle="navbar-search" 
                aria-controls="navbar-search" 
                aria-expanded={isSearchVisible} 
                className="text-white focus:outline-none rounded-lg text-sm p-2.5"
              >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col space-y-4 px-4 py-2 mt-2 text-white text-center bg-[#E48515] rounded-lg shadow-md">
              <Link to="/about-us" className="py-2 px-3 hover:bg-[#E48615] rounded">About Us</Link>
              <Link to="/services" className="py-2 px-3 hover:bg-[#E48615] rounded">Services</Link>
              <Link to="/departments" className="py-2 px-3 hover:bg-[#E48615] rounded">Departments</Link>
              
              {/* Media Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center justify-between w-full py-2 px-3 hover:bg-[#E48615] rounded"
                  onClick={() => toggleDropdown('media')}
                >
                  Media
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {activeDropdown === 'media' && (
                  <div className="flex flex-col space-y-2 bg-[#E48615] rounded-lg shadow-lg mt-2">
                    <Link to="/videos" className="block px-4 py-2 hover:bg-gray-100">Videos</Link>
                    <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                    <Link to="/live-sessions" className="block px-4 py-2 hover:bg-gray-100">Live Sessions</Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative">
                <button 
                  className="flex items-center justify-between w-full py-2 px-3 hover:bg-[#E48615] rounded"
                  onClick={() => toggleDropdown('resources')}
                >
                  Resources
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {activeDropdown === 'resources' && (
                  <div className="flex flex-col space-y-2 bg-[#E48615] rounded-lg shadow-lg mt-2">
                    <Link to="/testimonies" className="block px-4 py-2 hover:bg-gray-100">Testimonies</Link>
                    <Link to="/sermons" className="block px-4 py-2 hover:bg-gray-100">Sermons</Link>
                    <Link to="/stories" className="block px-4 py-2 hover:bg-gray-100">Stories</Link>
                    <Link to="/prayer-requests" className="block px-4 py-2 hover:bg-gray-100">Prayer Requests</Link>
                    <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">Get Help</Link>
                  </div>
                )}
              </div>

              <Link to="/contact" className="py-2 px-3 hover:bg-[#E48615] rounded">Contact</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
