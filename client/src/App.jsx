import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './Pages/Landing';
import AboutUsPage from './Pages/AboutUs';
import ServicesPage from './Pages/Services';
import DepartmentsPage from './Pages/Departments';
import MediaPage from './Pages/Media';
import ResourcesPage from './Pages/Resources';
import ContactUsPage from './Pages/Contact';
import Footer from './components/Footer';


import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUsPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/departments' element={<DepartmentsPage/>}/>
        <Route path='/media' element={<MediaPage/>}/>
        <Route path='/resources' element={<ResourcesPage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;