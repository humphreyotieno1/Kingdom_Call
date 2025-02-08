"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
    const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const router = useRouter();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else if (router.pathname !== '/') {
            router.push('/', { query: { scrollTo: sectionId } });
        }
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (router.pathname === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            router.push('/', { query: { scrollToTop: true } });
        }
    };

    const handleDropdownClick = (dropdownId, event) => {
        event.preventDefault();
        if (dropdownId === 'media') {
            setIsMediaDropdownOpen(prev => !prev);
            setIsResourceDropdownOpen(false);
            setActiveDropdown(isMediaDropdownOpen ? null : 'media');
        } else if (dropdownId === 'resources') {
            setIsResourceDropdownOpen(prev => !prev);
            setIsMediaDropdownOpen(false);
            setActiveDropdown(isResourceDropdownOpen ? null : 'resources');
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-container')) {
                setIsMediaDropdownOpen(false);
                setIsResourceDropdownOpen(false);
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <header className="bg-[#e78f0a] fixed top-0 z-50 w-full md:pb-2 pb-6 pt-2 lg:pt-0 lg:pb-0 font-montserrat">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo and Title Section */}
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={handleHomeClick}>
                        <div className="flex-shrink-0">
                            <Image className="w-auto h-8 lg:h-10" width={40} height={40} src="/kingdom_logo.png" alt="Logo" />
                        </div>
                        <div className="md:hidden sm:flex lg:flex flex-col">
                            <span className="text-2xl font-extrabold text-white">Kingdom Call</span>
                            <p className="italic font-bold text-white text-sm lg:text-base">
                                Your kingdom come... Your will be done.
                            </p>
                        </div>
                        <div className="hidden lg:hidden md:flex flex-col">
                            <span className="text-xl font-extrabold text-white">Kingdom Call</span>
                        </div>

                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70"
                        >
                            About Us
                        </button>

                        <button
                            onClick={() => scrollToSection('services')}
                            className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70"
                        >
                            Services
                        </button>

                        <Link href="/departments" className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70">
                            Departments
                        </Link>

                        {/* Media Dropdown */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={(e) => handleDropdownClick('media', e)}
                                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 flex items-center"
                            >
                                Explore
                                <svg className={`w-2.5 h-2.5 ml-2 transform transition-transform duration-200 ${isMediaDropdownOpen ? 'rotate-180' : ''}`}
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className={`absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg transition-all duration-300 ${isMediaDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}>
                                <div className="py-2">
                                    <Link href="/media" className="block px-4 py-2 text-white transition-colors duration-200">Media
                                    </Link>
                                    <Link href="/videos" className="block px-4 py-2 text-white transition-colors duration-200">Videos
                                    </Link>
                                    <Link href="/gallery" className="block px-4 py-2 text-white transition-colors duration-200">Gallery
                                    </Link>
                                    <Link href="/live" className="block px-4 py-2 text-white transition-colors duration-200">Live Sessions
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={(e) => handleDropdownClick('resources', e)}
                                className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 flex items-center"
                            >
                                Resources
                                <svg className={`w-2.5 h-2.5 ml-2 transform transition-transform duration-200 ${isResourceDropdownOpen ? 'rotate-180' : ''}`}
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <div className={`absolute left-0 mt-2 w-48 bg-black rounded-lg shadow-lg transition-all duration-300 ${isResourceDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                                }`}>
                                <div className="py-2">
                                    <Link href="/library" className="block px-4 py-2 text-white transition-colors duration-200">Library
                                    </Link>
                                    <Link href="/prayer" className="block px-4 py-2 text-white transition-colors duration-200">Prayer Requests
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="inline-flex p-2 text-white transition-all duration-200 rounded-md md:hidden focus:bg-gray-800 hover:bg-gray-800"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <button
                                onClick={() => {
                                    scrollToSection('about');
                                    setIsMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                            >
                                About Us
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection('services');
                                    setIsMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                            >
                                Services
                            </button>
                            <Link href="/departments" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700">
                                Departments
                            </Link>

                            {/* Media Dropdown */}
                            <div className="dropdown-container">
                                <button
                                    onClick={(e) => {
                                        handleDropdownClick('media', e);
                                    }}
                                    className="px-3 py-2 text-base font-medium text-white hover:bg-gray-700 flex justify-between items-center"
                                >
                                    Explore
                                    <svg
                                        className={`w-4 h-4 transform transition-transform duration-200 ${isMediaDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {isMediaDropdownOpen && (
                                    <div className="pl-6 mt-1 space-y-1">
                                        <Link href="/media" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Media
                                        </Link>
                                        <Link href="/videos" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Videos
                                        </Link>
                                        <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Gallery
                                        </Link>
                                        <Link href="/live" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Live Sessions
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Resources Dropdown */}
                            <div className="dropdown-container">
                                <button
                                    onClick={(e) => {
                                        handleDropdownClick('resources', e);
                                    }}
                                    className="px-3 py-2 text-base font-medium text-white hover:bg-gray-700 flex justify-between items-center"
                                >
                                    Resources
                                    <svg
                                        className={`w-4 h-4 transform transition-transform duration-200 ${isResourceDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {isResourceDropdownOpen && (
                                    <div className="pl-6 mt-1 space-y-1">
                                        <Link href="/library" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Library
                                        </Link>
                                        <Link href="/prayer" onClick={() => setIsMenuOpen(false)} className="block text-sm text-white hover:bg-gray-700 px-3 py-1">Prayer Requests
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => {
                                    scrollToSection('contact');
                                    setIsMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default NavBar;