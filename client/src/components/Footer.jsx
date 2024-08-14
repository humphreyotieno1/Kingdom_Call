import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold">Kingdom Call</h2>
          <p className="text-sm mt-2 text-center">Your kingdom come...Your will be done.</p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} className="text-2xl" /></a>
            <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} className="text-2xl" /></a>
            <a href="#" className="text-white"><FontAwesomeIcon icon={faTelegram} className="text-2xl" /></a>
            <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} className="text-2xl" /></a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p className="mt-2"><FontAwesomeIcon icon={faPhone} /> +254 740 882 365</p>
          <p className="mt-1"><FontAwesomeIcon icon={faEnvelope} /> wearekingdomcall@gmail.com</p>
          <p className="mt-1"><FontAwesomeIcon icon={faMapMarkerAlt} /> Reach Out to Us</p>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-black rounded-full p-2">
            <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4">
        <p className="text-center text-sm mt-4">Copyright © 2024 Kingdom Call. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
