import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

// Pages
import AboutUsPage from './Pages/AboutUs';
import WhoWeArePage from './Pages/WhoWeAre';
import WhatWeBelievePage from './Pages/WhatWeBelieve';
import PurposePage from './Pages/Purpose';
import OurStoryPage from './Pages/OurStory';
import LeadershipPage from './Pages/Leadership';
import OurValuesPage from './Pages/OurValues';
import ServicesPage from './Pages/Services';
import DepartmentsPage from './Pages/Departments';
import Media from './Pages/Media';
import Videos from './Pages/Videos';
import Gallery from './Pages/Gallery';
import LiveSessions from './Pages/LiveSessions';
import ResourcesPage from './Pages/Resources';
import PrayerRequestPage from './Pages/PrayerRequest';
import ContactUsPage from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* About Us Section */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/about-us/who-we-are" element={<WhoWeArePage />} />
        <Route path="/about-us/what-we-believe" element={<WhatWeBelievePage />} />
        <Route path="/about-us/purpose" element={<PurposePage />} />
        <Route path="/about-us/our-story" element={<OurStoryPage />} />
        <Route path="/about-us/leadership" element={<LeadershipPage />} />
        <Route path="/about-us/values" element={<OurValuesPage />} />

        {/* Services & Departments */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />

        {/* Media Section */}
        <Route path="/media" element={<Media />} />
        <Route path="/media/videos" element={<Videos />} />
        <Route path="/media/gallery" element={<Gallery />} />
        <Route path="/media/live-sessions" element={<LiveSessions />} />

        {/* Resources */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/prayer-request" element={<PrayerRequestPage />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
