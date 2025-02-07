import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Departments from './Pages/Departments';
import Media from './Pages/Media';
import Videos from './Pages/Videos';
import Gallery from './Pages/Gallery';
import LiveSessions from './Pages/LiveSessions';
import Resources from './Pages/Resources';
import PrayerRequest from './Pages/PrayerRequest';
import LeadershipPage from './Pages/Leadership';
import Values from './Pages/Values';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/media" element={<Media />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/live-sessions" element={<LiveSessions />} />
        <Route path="/library" element={<Resources />} />
        <Route path="/prayer-requests" element={<PrayerRequest />} />
        <Route path="#leadership" element={<LeadershipPage />} />
        <Route path="/values" element={<Values />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
