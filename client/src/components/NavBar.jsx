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
        <div className="hidden md:flex space-x-4 mx-auto">
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
                {/*<Link to="/resources?section=testimonies" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Testimonies</Link>
                <Link to="/resources?section=sermons" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Sermons</Link>
                <Link to="/resources?section=merch" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Merchanise</Link>*/}
                <Link to="resources/prayer-request" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Prayer Requests</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-[#C46F12] text-white w-full text-left rounded">Get Help</Link>
              </div>
            </div>
          </div>

          <Link to="/contact" className="py-2 px-3 hover:text-gray-700">Contact Us</Link>
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
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="flex flex-col items-start w-full">
              <Link to="/" className="py-2 px-3 hover:text-gray-700 w-full">Home</Link>
              <Link to="/about-us" className="py-2 px-3 hover:text-gray-700 w-full">About Us</Link>
              <Link to="/services" className="py-2 px-3 hover:text-gray-700 w-full">Services</Link>
              <Link to="/departments" className="py-2 px-3 hover:text-gray-700 w-full">Departments</Link>
              
              <button 
                onClick={() => {
                  navigate('/media')
                  toggleDropdown('mobileMediaDropdown')
                }}
                
                className="flex items-center py-2 px-3 hover:text-gray-700"
              >
                Media 
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div className={`w-3/4 ${activeDropdown === 'mobileMediaDropdown' ? '' : 'hidden'} flex flex-col space-y-1 ml-4 bg-white text-black rounded`}>
                <Link to="media/videos" className="block px-4 py-2 hover:bg-gray-200">Videos</Link>
                <Link to="media/gallery" className="block px-4 py-2 hover:bg-gray-200">Gallery</Link>
                <Link to="media/live-sessions" className="block px-4 py-2 hover:bg-gray-200">Live Sessions</Link>
              </div>

              <button 
                onClick={() => {
                  navigate('/resources')
                  toggleDropdown('mobileResourcesDropdown')
                }}
                className="flex items-center py-2 px-3 hover:text-gray-700"
              >
                Resources 
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div className={`w-3/4 ${activeDropdown === 'mobileResourcesDropdown' ? '' : 'hidden'} flex flex-col space-y-1 ml-4 bg-white text-black rounded`}>
                <Link to="/resources?section=testimonies" className="block px-4 py-2 hover:bg-gray-200">Testimonies</Link>
                <Link to="/resources?section=sermons" className="block px-4 py-2 hover:bg-gray-200">Sermons</Link>
                <Link to="/stories" className="block px-4 py-2 hover:bg-gray-200">Stories</Link>
                <Link to="/prayer-requests" className="block px-4 py-2 hover:bg-gray-200">Prayer Requests</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Get Help</Link>
              </div>

              <Link to="/contact" className="py-2 px-3 hover:text-gray-700 w-full">Contact</Link>
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