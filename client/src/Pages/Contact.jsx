import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-[#ebebeb]">
      <div className="w-full py-4 bg-[linear-gradient(180deg,#e48515,#ebebeb)] py-10">
        <h1 className="text-3xl font-bold text-black mt-20 mb-2 text-center py-4">Get Help</h1>
      </div>
      <div className="shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-8">
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-phone-alt text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Telephone</h2>
            <p className="text-lg sm:text-sm text-gray-600"> +254 115 979 303(office) </p>
          </div>
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-envelope text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Mail</h2>
            <p className="text-lg sm:text-sm text-gray-600"> wearekingdomcall@gmail.com</p>
          </div>
          <div className="sm:col-span-1">
            <div className="flex justify-center mb-2">
              <i className="fas fa-address-card text-4xl sm:text-3xl text-black"></i>
            </div>
            <h2 className="text-lg sm:text-sm font-medium">Address</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center rounded-lg">
            <img src="/contact.jpeg" alt="contact-us" className="w-full" />
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Send a message</h2>
            <p className="text-md sm:text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus nulla ut commodo sagittis.</p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Name" className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
                <input type="text" placeholder="Phone number" className="border border-[#E48515] p-2 rounded focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
              </div>
              <input type="email" placeholder="Email" className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"/>
              <textarea placeholder="Your Message..." className="border border-[#E48515] p-2 w-full rounded mb-4 focus:ring-2 focus:ring-[#E48515] focus:border-transparent text-sm"></textarea>
              <button type="submit" className="bg-gray-700 hover:bg-black hover:text-white transition text-white p-2 rounded w-full">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
