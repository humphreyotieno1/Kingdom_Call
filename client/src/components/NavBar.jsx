import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
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

  const navigate = useNavigate();

  useEffect(() => {
    function handleHoverOutside(event) {
      if (!event.target.closest('.relative')) {
        setIsMediaDropdownOpen(false)
        setIsResourceDropdownOpen(false);
      }
    }

    document.addEventListener('mouseover', handleHoverOutside);
    return () => {
      document.removeEventListener('mouseover', handleHoverOutside);
    };
  }, []);

  


  return (
    <header className="w-full fixed top-0 z-50 font-robotoMono bg-[#E48515] text-white">
      {/* Combined Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4 text-sm w-full">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img src="/kingdom_logo.png" alt="Logo" className="h-16" />
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
          
          <div className="relative">
            <Link to='/media'
              onMouseEnter={() => {
                setIsMediaDropdownOpen(!isMediaDropdownOpen);
              }}
              className="flex items-center py-2 px-3 hover:text-gray-700"
            >
              Media
              <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </Link>
            <div className={`absolute left-0 ${isMediaDropdownOpen ? 'block' : 'hidden'} border border-[#e48515] bg-[#e48515] rounded`}>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-400">
                <Link to="/media/videos" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Videos</Link>
                <Link to="/media/gallery" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Gallery</Link>
                <Link to="/media/live-sessions"className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Live Sessions</Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <Link to='/resources' 
              onMouseEnter={() => setIsResourceDropdownOpen(!isResourceDropdownOpen)}
              className="flex items-center py-2 px-3 hover:text-gray-700"
            >
              Resources 
              <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </Link>
            <div className={`absolute left-0 ${isResourceDropdownOpen ? 'block' : 'hidden'} border border-[#e48515] bg-[#e48515] rounded`}>
              <div className="mt-2 text-sm text-gray-700 dark:text-gray-400 ">
                <Link to="resources/prayer-requests" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Prayer Requests</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Get Help</Link>
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
               <span className="sr-only">Search icon</span>
             </button>
            )}
            {/* Search Input */}
            {isSearchVisible && (
               
              <div className="w-full px-4 py-2 ">
               <input 
                 type="text" 
                 id="search-navbar" 
                 className="w-full p-2 pl-10 text-sm text-gray-50 bg-transparent border-0 placeholder-gray-500 focus:ring-0 focus:outline-none shadow-lg" 
                 placeholder="search..."
               />
             </div>
             

            )}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col items-start w-full">
              <Link to="/" className="py-2 px-3 hover:text-gray-700 w-full" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about-us" className="py-2 px-3 hover:text-gray-700 w-full" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="py-2 px-3 hover:text-gray-700 w-full" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/departments" className="py-2 px-3 hover:text-gray-700 w-full" onClick={() => setIsMenuOpen(false)}>Departments</Link>
              
              <button 
                onClick={() => {
                  navigate('/media')
                  toggleDropdown('mobileMediaDropdown')
                  setIsMenuOpen(false)
                }}
                
                className="flex items-center py-2 px-3 hover:text-gray-700"
              >
                Media 
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>

              <div className={`w-3/4 ${activeDropdown === 'mobileMediaDropdown' ? '' : 'hidden'} flex flex-col space-y-1 ml-4 bg-white text-black rounded`}>
                <Link to="media/videos" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Videos</Link>
                <Link to="media/gallery" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link to="media/live-sessions" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Live Sessions</Link>
              </div>

              <button 
                onClick={() => {
                  navigate('/resources')
                  toggleDropdown('mobileResourcesDropdown')
                  setIsMenuOpen(false)
                }}
                className="flex items-center py-2 px-3 hover:text-gray-700"
              >
                Resources 
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div className={`w-3/4 ${activeDropdown === 'mobileResourcesDropdown' ? '' : 'hidden'} flex flex-col space-y-1 ml-4 bg-white text-black rounded`}>
                <Link to="/resources/prayer-requests" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Prayer Requests</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200" onClick={() => setIsMenuOpen(false)}>Get Help</Link>
              </div>

              <Link to="/contact" className="py-2 px-3 hover:text-gray-700 w-full" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="py-2 px-4 text-xs text-center text-gray-500">
               © 2024 Kingdom Call All Rights Reserved Co.
             </div>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
};

export default NavBar;