import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUsPage from './Pages/AboutUs';
import ServicesPage from './Pages/Services';
import DepartmentsPage from './Pages/Departments';
import MediaPage from './Pages/Media';
import ResourcesPage from './Pages/Resources';
import ContactUsPage from './Pages/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import WhoWeArePage from './Pages/WhoWeAre';
import WhatWeBelievePage from './Pages/WhatWeBelieve';
import PurposePage from './Pages/Purpose';
import OurStoryPage from './Pages/OurStory';
import LeadershipPage from './Pages/Leadership';
import OurValuesPage from './Pages/OurValues';
import VideosPage from './Pages/Videos';
import GalleryPage from './Pages/Gallery';
import LiveSessionsPage from './Pages/LiveSessions';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/about-us/who-we-are' element={<WhoWeArePage />} />
        <Route path='/about-us/what-we-believe' element={<WhatWeBelievePage />} />
        <Route path='/about-us/values' element={<OurValuesPage />} />
        <Route path='/about-us/purpose' element={<PurposePage />} />
        <Route path='/about-us/our-story' element={<OurStoryPage />} />
        <Route path='/about-us/leadership' element={<LeadershipPage/>} />

        <Route path='/services' element={<ServicesPage />} />
        <Route path='/departments' element={<DepartmentsPage />} />

        <Route path='/media' element={<MediaPage />} />
        <Route path="media/videos" element={<VideosPage />} />
        <Route path="media/gallery" element={<GalleryPage />} />
        <Route path="media/live-sessions" element={<LiveSessionsPage />} />

        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
